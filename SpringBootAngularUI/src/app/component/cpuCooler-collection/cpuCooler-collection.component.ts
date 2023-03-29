import { Component, OnInit, ViewChild } from '@angular/core';
import { CpuCoolerService } from '../../service/cpuCooler.service';
import { CpuCoolerModel } from '../../model/cpuCooler.model';
import { Table } from 'primeng/table'
import { MessageService, SelectItem } from 'primeng/api';
import { BaseService } from 'src/app/service/base.service';
import { BearingCodesService } from 'src/app/service/bearingCodes.service';
import { ComponentListService } from 'src/app/service/componentList.service';
import { PricingModel } from 'src/app/model/pricing.model';
import { ComponentListModel } from 'src/app/model/componentList.model';
import { GlobalConstants } from 'src/app/globalConstants';

@Component({
  selector: 'app-cpuCooler-collection',
  templateUrl: './cpuCooler-collection.component.html',
  styleUrls: ['./cpuCooler-collection.component.scss']
})
export class CpuCoolerCollectionComponent implements OnInit {
  @ViewChild('dt') dt: Table | undefined;

  cpuCooler: CpuCoolerModel[] = [];
  selectedCpuCooler: CpuCoolerModel[] = [];
  clonedCpuCooler: { [s: string]: CpuCoolerModel; } = {};
  loading: boolean = true;
  activityValues: number[] = [0, 100];

  manufacturerCodesFilteredSelectItems: SelectItem[] = [];
  colorCodesFilteredSelectItems: SelectItem[] = [];
  bearingCodesFilteredSelectItems: SelectItem[] = [];

  bearingCodesAllSelectItems: SelectItem[] = [];

  constructor(private cpuCoolerService: CpuCoolerService,
    private bearingCodesService: BearingCodesService,
    private componentListService: ComponentListService,
    private messageService: MessageService) { }

  ngOnInit() {
    this.cpuCoolerService.findAll().subscribe({
      next: (v) => {
        this.cpuCooler = v;

        let manufacturerCodesMap = new Set<string>();
        let colorCodesMap = new Set<string>();
        let bearingCodesMap = new Set<string>();

        v.forEach(e => {
          this.addToSelectItemList(this.manufacturerCodesFilteredSelectItems, manufacturerCodesMap, e.pidRegistryEntity.manufacturerCodesEntity?.dictionary, e.pidRegistryEntity.manufacturerCodesEntity?.id);
          this.addToSelectItemList(this.colorCodesFilteredSelectItems, colorCodesMap, e.pidRegistryEntity.colorCodesEntity?.dictionary, e.pidRegistryEntity.colorCodesEntity?.id);
          this.addToSelectItemList(this.bearingCodesFilteredSelectItems, bearingCodesMap, e.bearingCodesEntity?.dictionary, e.bearingCodesEntity?.id)
          
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
        this.bearingCodesFilteredSelectItems.sort(this.compare);
      },
      error: (e: string) => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Loading failed: ' + e });
      },
      complete: () => {
        this.loading = false;
      }
    });

    this.initializeDropdownSubscription(this.bearingCodesService, this.bearingCodesAllSelectItems);

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

  onRowEditInit(entity: CpuCoolerModel) {
    this.clonedCpuCooler[entity.pid] = { ...entity };
  }

  onRowEditSave(entity: CpuCoolerModel, index: number) {
    this.loading = true;

    this.cpuCoolerService.edit(entity).subscribe({
      next: (v) => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Edited: ' + v.pid });
        this.cpuCooler[this.findIndexById(v.pid)] = { ...v };
        this.cpuCooler = [...this.cpuCooler];

        delete this.clonedCpuCooler[entity.pid];
      },
      error: (e: string) => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Edit failed: ' + e });
        this.cpuCooler[index] = this.clonedCpuCooler[entity.pid];
        delete this.clonedCpuCooler[entity.pid];
      },
      complete: () => {
        this.loading = false;
      }
    });
  }

  onRowEditCancel(entity: CpuCoolerModel, index: number) {
    this.cpuCooler[index] = this.clonedCpuCooler[entity.pid];
    this.cpuCooler = [...this.cpuCooler];

    delete this.clonedCpuCooler[entity.pid];
  }

  onRowDelete(entity: CpuCoolerModel, index: number) {
    this.loading = true;

    this.cpuCoolerService.delete(entity).subscribe({
      next: (v) => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Deleted: ' + v.pid });
        delete this.cpuCooler[this.findIndexById(v.pid)];
        this.cpuCooler = [...this.cpuCooler];
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
    for (let i = 0; i < this.cpuCooler.length; i++) {
      if (this.cpuCooler[i].pid === pid) {
        index = i;
        break;
      }
    }

    return index;
  }
}
