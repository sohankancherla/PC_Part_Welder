import { Component, OnInit, ViewChild } from '@angular/core';
import { PowerSupplyService } from '../../service/powerSupply.service';
import { PowerSupplyModel } from '../../model/powerSupply.model';
import { Table } from 'primeng/table'
import { MessageService, SelectItem } from 'primeng/api';
import { BaseService } from 'src/app/service/base.service';
import { FormFactorCodesService } from 'src/app/service/formFactorCodes.service';
import { EfficiencyRatingCodesService } from 'src/app/service/efficiencyRatingCodes.service';
import { TypeCodesService } from 'src/app/service/typeCodes.service';
import { PricingModel } from 'src/app/model/pricing.model';
import { ComponentListModel } from 'src/app/model/componentList.model';
import { GlobalConstants } from 'src/app/globalConstants';
import { ComponentListService } from 'src/app/service/componentList.service';

@Component({
  selector: 'app-powerSupply-collection',
  templateUrl: './powerSupply-collection.component.html',
  styleUrls: ['./powerSupply-collection.component.scss']
})
export class PowerSupplyCollectionComponent implements OnInit {
  @ViewChild('dt') dt: Table | undefined;

  powerSupply: PowerSupplyModel[] = [];
  selectedPowerSupply: PowerSupplyModel[] = [];
  clonedPowerSupply: { [s: string]: PowerSupplyModel; } = {};
  loading: boolean = true;
  activityValues: number[] = [0, 100];

  manufacturerCodesFilteredSelectItems: SelectItem[] = [];
  colorCodesFilteredSelectItems: SelectItem[] = [];
  formFactorCodesFilteredSelectItems: SelectItem[] = [];
  efficiencyRatingCodesFilteredSelectItems: SelectItem[] = [];
  typeCodesFilteredSelectItems: SelectItem[] = [];

  formFactorCodesAllSelectItems: SelectItem[] = [];
  efficiencyRatingCodesAllSelectItems: SelectItem[] = [];
  typeCodesAllSelectItems: SelectItem[] = [];

  constructor(private powerSupplyService: PowerSupplyService,
    private formFactorCodesService: FormFactorCodesService,
    private efficiencyRatingCodesService: EfficiencyRatingCodesService,
    private typeCodesService: TypeCodesService,
    private componentListService: ComponentListService,
    private messageService: MessageService) { }

  ngOnInit() {
    this.powerSupplyService.findAll().subscribe({
      next: (v) => {
        this.powerSupply = v;

        let manufacturerCodesMap = new Set<string>();
        let colorCodesMap = new Set<string>();
        let formFactorCodesMap = new Set<string>();
        let efficiencyRatingCodesMap = new Set<string>();
        let typeCodesMap = new Set<string>();

        v.forEach(e => {
          this.addToSelectItemList(this.manufacturerCodesFilteredSelectItems, manufacturerCodesMap, e.pidRegistryEntity.manufacturerCodesEntity?.dictionary, e.pidRegistryEntity.manufacturerCodesEntity?.id);
          this.addToSelectItemList(this.colorCodesFilteredSelectItems, colorCodesMap, e.pidRegistryEntity.colorCodesEntity?.dictionary, e.pidRegistryEntity.colorCodesEntity?.id);
          this.addToSelectItemList(this.formFactorCodesFilteredSelectItems, formFactorCodesMap, e.formFactorCodesEntity?.dictionary, e.formFactorCodesEntity?.id);
          this.addToSelectItemList(this.efficiencyRatingCodesFilteredSelectItems, efficiencyRatingCodesMap, e.efficiencyRatingCodesEntity?.dictionary, e.efficiencyRatingCodesEntity?.id);
          this.addToSelectItemList(this.typeCodesFilteredSelectItems, typeCodesMap, e.typeCodesEntity?.dictionary, e.typeCodesEntity?.id);
        
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
        this.formFactorCodesFilteredSelectItems.sort(this.compare);
        this.efficiencyRatingCodesFilteredSelectItems.sort(this.compare);
        this.typeCodesFilteredSelectItems.sort(this.compare);
      },
      error: (e: string) => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Loading failed: ' + e });
      },
      complete: () => {
        this.loading = false;
      }
    });

    this.initializeDropdownSubscription(this.formFactorCodesService, this.formFactorCodesAllSelectItems);
    this.initializeDropdownSubscription(this.efficiencyRatingCodesService, this.efficiencyRatingCodesAllSelectItems);
    this.initializeDropdownSubscription(this.typeCodesService, this.typeCodesAllSelectItems);
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

  onRowEditInit(entity: PowerSupplyModel) {
    this.clonedPowerSupply[entity.pid] = { ...entity };
  }

  onRowEditSave(entity: PowerSupplyModel, index: number) {
    this.loading = true;

    this.powerSupplyService.edit(entity).subscribe({
      next: (v) => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Edited: ' + v.pid });
        this.powerSupply[this.findIndexById(v.pid)] = { ...v };
        this.powerSupply = [...this.powerSupply];

        delete this.clonedPowerSupply[entity.pid];
      },
      error: (e: string) => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Edit failed: ' + e });
        this.powerSupply[index] = this.clonedPowerSupply[entity.pid];
        delete this.clonedPowerSupply[entity.pid];
      },
      complete: () => {
        this.loading = false;
      }
    });
  }

  onRowEditCancel(entity: PowerSupplyModel, index: number) {
    this.powerSupply[index] = this.clonedPowerSupply[entity.pid];
    this.powerSupply = [...this.powerSupply];

    delete this.clonedPowerSupply[entity.pid];
  }

  onRowDelete(entity: PowerSupplyModel, index: number) {
    this.loading = true;

    this.powerSupplyService.delete(entity).subscribe({
      next: (v) => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Deleted: ' + v.pid });
        delete this.powerSupply[this.findIndexById(v.pid)];
        this.powerSupply = [...this.powerSupply];
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
    for (let i = 0; i < this.powerSupply.length; i++) {
      if (this.powerSupply[i].pid === pid) {
        index = i;
        break;
      }
    }

    return index;
  }
}
