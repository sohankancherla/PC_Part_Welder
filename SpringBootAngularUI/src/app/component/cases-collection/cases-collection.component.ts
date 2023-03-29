import { Component, OnInit, ViewChild } from '@angular/core';
import { CasesService } from '../../service/cases.service';
import { CasesModel } from '../../model/cases.model';
import { Table } from 'primeng/table'
import { MessageService, SelectItem } from 'primeng/api';
import { BaseService } from 'src/app/service/base.service';
import { TypeCodesService } from 'src/app/service/typeCodes.service';
import { SidePanelWindowCodesService } from 'src/app/service/sidePanelWindowCodes.service';
import { ComponentListService } from 'src/app/service/componentList.service';
import { PricingModel } from 'src/app/model/pricing.model';
import { ComponentListModel } from 'src/app/model/componentList.model';
import { GlobalConstants } from 'src/app/globalConstants';

@Component({
  selector: 'app-cases-collection',
  templateUrl: './cases-collection.component.html',
  styleUrls: ['./cases-collection.component.scss']
})
export class CasesCollectionComponent implements OnInit {
  @ViewChild('dt') dt: Table | undefined;

  cases: CasesModel[] = [];
  selectedCases: CasesModel[] = [];
  clonedCases: { [s: string]: CasesModel; } = {};
  loading: boolean = true;
  activityValues: number[] = [0, 100];

  manufacturerCodesFilteredSelectItems: SelectItem[] = [];
  colorCodesFilteredSelectItems: SelectItem[] = [];
  typeCodesFilteredSelectItems: SelectItem[] = [];
  sidePanelWindowCodesFilteredSelectItems: SelectItem[] = [];

  typeCodesAllSelectItems: SelectItem[] = [];
  sidePanelWindowCodesAllSelectItems: SelectItem[] = [];

  constructor(private casesService: CasesService,
    private typeCodesService: TypeCodesService,
    private sidePanelWindowCodesService: SidePanelWindowCodesService,
    private componentListService: ComponentListService,
    private messageService: MessageService) { }

  ngOnInit() {
    this.casesService.findAll().subscribe({
      next: (v) => {
        this.cases = v;

        let manufacturerCodesMap = new Set<string>();
        let colorCodesMap = new Set<string>();
        let typeCodesMap = new Set<string>();
        let sidePanelWindowCodesMap = new Set<string>();

        v.forEach(e => {
          this.addToSelectItemList(this.manufacturerCodesFilteredSelectItems, manufacturerCodesMap, e.pidRegistryEntity.manufacturerCodesEntity?.dictionary, e.pidRegistryEntity.manufacturerCodesEntity?.id);
          this.addToSelectItemList(this.colorCodesFilteredSelectItems, colorCodesMap, e.pidRegistryEntity.colorCodesEntity?.dictionary, e.pidRegistryEntity.colorCodesEntity?.id);
          this.addToSelectItemList(this.typeCodesFilteredSelectItems, typeCodesMap, e.typeCodesEntity?.dictionary, e.typeCodesEntity?.id);
          this.addToSelectItemList(this.sidePanelWindowCodesFilteredSelectItems, sidePanelWindowCodesMap, e.sidePanelWindowCodesEntity?.dictionary, e.sidePanelWindowCodesEntity?.id);
          
          let lowestPricingEntity = e.pidRegistryEntity.pricingEntities[0];
          let lowestPrice = Number.MAX_SAFE_INTEGER;
          e.pidRegistryEntity.pricingEntities.forEach(p => {
            if (p.total < lowestPrice) {
              lowestPricingEntity = p;
              lowestPrice = p.total;
            }
          });
          e.pidRegistryEntity.lowestPricingEntity = lowestPricingEntity;
        });

        this.manufacturerCodesFilteredSelectItems.sort(this.compare);
        this.colorCodesFilteredSelectItems.sort(this.compare);
        this.typeCodesFilteredSelectItems.sort(this.compare);
        this.sidePanelWindowCodesFilteredSelectItems.sort(this.compare);
      },
      error: (e: string) => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Loading failed: ' + e });
      },
      complete: () => {
        this.loading = false;
      }
    });

    this.initializeDropdownSubscription(this.typeCodesService, this.typeCodesAllSelectItems);
    this.initializeDropdownSubscription(this.sidePanelWindowCodesService, this.sidePanelWindowCodesAllSelectItems);
  }

  onRowAddProduct(entity: PricingModel) {
    let component = new ComponentListModel(GlobalConstants.computer.cid, entity.pid, entity.merchant, 1);
    this.componentListService.add(component).subscribe({
      next: (v) => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Added: ' + entity.pid + ' to computer ' + v.cid });
      },
      error: (e: string) => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Delete failed: ' + e });
      },
      complete: () => {
        this.loading = false;
      }
    });
  }

  onRowEditInit(entity: CasesModel) {
    this.clonedCases[entity.pid] = { ...entity };
  }

  onRowEditSave(entity: CasesModel, index: number) {
    this.loading = true;

    this.casesService.edit(entity).subscribe({
      next: (v) => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Edited: ' + v.pid });
        this.cases[this.findIndexById(v.pid)] = { ...v };
        this.cases = [...this.cases];

        delete this.clonedCases[entity.pid];
      },
      error: (e: string) => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Edit failed: ' + e });
        this.cases[index] = this.clonedCases[entity.pid];
        delete this.clonedCases[entity.pid];
      },
      complete: () => {
        this.loading = false;
      }
    });
  }

  onRowEditCancel(entity: CasesModel, index: number) {
    this.cases[index] = this.clonedCases[entity.pid];
    this.cases = [...this.cases];

    delete this.clonedCases[entity.pid];
  }

  onRowDelete(entity: CasesModel, index: number) {
    this.loading = true;

    this.casesService.delete(entity).subscribe({
      next: (v) => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Deleted: ' + v.pid });
        delete this.cases[this.findIndexById(v.pid)];
        this.cases = [...this.cases];
      },
      error: (e: string) => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Delete failed: ' + e });
      },
      complete: () => {
        this.loading = false;
      }
    });
  }

  applyFilterGlobal($event: any, stringVal: any) {
    this.dt!.filterGlobal(($event.target as HTMLInputElement).value, 'contains');
  }

  clear() {
    this.dt!.clear();
  }

  compare(a: SelectItem, b: SelectItem) {
    if (a.label == undefined || b.label == undefined) {
      return 0;
    }
    if (a.label < b.label)
      return -1;
    if (a.label > b.label)
      return 1;
    return 0;
  };

  initializeDropdownSubscription(subscription: BaseService<any>, selectItems: SelectItem[]) {
    subscription.findAll().subscribe({
      next: (v) => {
        v.forEach(e => {
          this.addToSelectItemNoCheckList(selectItems, e.dictionary, e.id)
        });

        selectItems.sort(this.compare);
      },
      error: (e: string) => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Loading failed: ' + e });
      },
      complete: () => {
        this.loading = false;
      }
    });
  }

  addToSelectItemList(selectItemList: SelectItem[], selectItemSet: Set<string>, label: string, value: number) {
    if (label !== null && value !== null) {
      if (!selectItemSet.has(label)) {
        selectItemList.push({ label: label, value: value });
        selectItemSet.add(label);
      }
    }
  }

  addToSelectItemNoCheckList(selectItemList: SelectItem[], label: string, value: number) {
    if (label !== null && value !== null) {
      selectItemList.push({ label: label, value: value });
    }
  }

  findIndexById(pid: number): number {
    let index = -1;
    for (let i = 0; i < this.cases.length; i++) {
      if (this.cases[i].pid === pid) {
        index = i;
        break;
      }
    }

    return index;
  }
}
