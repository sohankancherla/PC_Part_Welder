import { Component, OnInit, ViewChild } from '@angular/core';
import { ComponentListService } from '../../service/componentList.service';
import { ComponentListModel } from '../../model/componentList.model';
import { Table } from 'primeng/table'
import { MessageService, SelectItem } from 'primeng/api';
import { BaseService } from 'src/app/service/base.service';
import { PricingModel } from 'src/app/model/pricing.model';
import { GlobalConstants } from 'src/app/globalConstants';

@Component({
  selector: 'app-componentList-collection',
  templateUrl: './componentList-collection.component.html',
  styleUrls: ['./componentList-collection.component.scss']
})
export class ComponentListCollectionComponent implements OnInit {
  @ViewChild('dt') dt: Table | undefined;

  componentList: ComponentListModel[] = [];
  selectedComponentList: ComponentListModel[] = [];
  clonedComponentList: { [s: string]: ComponentListModel; } = {};
  loading: boolean = true;
  activityValues: number[] = [0, 100];

  manufacturerCodesFilteredSelectItems: SelectItem[] = [];
  colorCodesFilteredSelectItems: SelectItem[] = [];
  merchantCodesFilteredSelectItems: SelectItem[] = [];

  constructor(private componentListService: ComponentListService,
    private messageService: MessageService) { }

  ngOnInit() {
    let cid = GlobalConstants.computer.cid;

    this.componentListService.findByCid(cid).subscribe({
      next: (v) => {
        this.componentList = v;

        let manufacturerCodesMap = new Set<string>();
        let colorCodesMap = new Set<string>();
        let merchantCodesMap = new Set<string>();

        v.forEach(e => {
          this.addToSelectItemList(this.manufacturerCodesFilteredSelectItems, manufacturerCodesMap, e.pidRegistryEntity!.manufacturerCodesEntity.dictionary, e.pidRegistryEntity!.manufacturerCodesEntity.id);
          this.addToSelectItemList(this.colorCodesFilteredSelectItems, colorCodesMap, e.pidRegistryEntity!.colorCodesEntity?.dictionary, e.pidRegistryEntity!.colorCodesEntity?.id);
          this.addToSelectItemList(this.merchantCodesFilteredSelectItems, merchantCodesMap, e.pricingEntity!.merchantCodesEntity?.dictionary, e.pricingEntity!.merchantCodesEntity?.id);
        });

        this.manufacturerCodesFilteredSelectItems.sort(this.compare);
        this.colorCodesFilteredSelectItems.sort(this.compare);
        this.merchantCodesFilteredSelectItems.sort(this.compare);
      },
      error: (e: string) => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Loading failed (No configured user or computer): ' + e });
      },
      complete: () => {
        this.loading = false;
      }
    });
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

  onRowEditInit(entity: ComponentListModel) {
    this.clonedComponentList[entity.pid] = { ...entity };
  }

  onRowEditSave(entity: ComponentListModel, index: number) {
    this.loading = true;

    this.componentListService.edit(entity).subscribe({
      next: (v) => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Edited: ' + v.pid });
        this.componentList[this.findIndexById(v.pid)] = { ...v };
        this.componentList = [...this.componentList];

        delete this.clonedComponentList[entity.pid];
      },
      error: (e: string) => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Edit failed: ' + e });
        this.componentList[index] = this.clonedComponentList[entity.pid];
        delete this.clonedComponentList[entity.pid];
      },
      complete: () => {
        this.loading = false;
      }
    });
  }

  onRowEditCancel(entity: ComponentListModel, index: number) {
    this.componentList[index] = this.clonedComponentList[entity.pid];
    this.componentList = [...this.componentList];

    delete this.clonedComponentList[entity.pid];
  }

  onRowDelete(entity: ComponentListModel, index: number) {
    this.loading = true;

    this.componentListService.delete(entity).subscribe({
      next: (v) => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Deleted: ' + v.pid });
        delete this.componentList[this.findIndexById(v.pid)];
        this.componentList = [...this.componentList];
      },
      error: (e: string) => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Delete failed: ' + e });
      },
      complete: () => {
        this.loading = false;
      }
    });
  }
  
  addTotals(entities: ComponentListModel[]): number {
    let total = 0;
    entities.forEach(e => {
      total += e.pricingEntity!.total * e.count;
    })
    return total;
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
    for (let i = 0; i < this.componentList.length; i++) {
      if (this.componentList[i].pid === pid) {
        index = i;
        break;
      }
    }

    return index;
  }
}
