import { Component, OnInit, ViewChild } from '@angular/core';
import { CpuService } from '../../service/cpu.service';
import { CpuModel } from '../../model/cpu.model';
import { Table } from 'primeng/table'
import { MessageService, SelectItem } from 'primeng/api';
import { BaseService } from 'src/app/service/base.service';
import { SeriesCodesService } from 'src/app/service/seriesCodes.service';
import { MicroarchitectureCodesService } from 'src/app/service/microarchitectureCodes.service';
import { CoreFamilyCodesService } from 'src/app/service/coreFamilyCodes.service';
import { SocketCodesService } from 'src/app/service/socketCodes.service';
import { PackagingCodesService } from 'src/app/service/packagingCodes.service';
import { IntegratedGraphicsCodesService } from 'src/app/service/integratedGraphicsCodes.service';
import { PricingModel } from 'src/app/model/pricing.model';
import { ComponentListModel } from 'src/app/model/componentList.model';
import { GlobalConstants } from 'src/app/globalConstants';
import { ComponentListService } from 'src/app/service/componentList.service';

@Component({
  selector: 'app-cpu-collection',
  templateUrl: './cpu-collection.component.html',
  styleUrls: ['./cpu-collection.component.scss']
})
export class CpuCollectionComponent implements OnInit {
  @ViewChild('dt') dt: Table | undefined;

  cpu: CpuModel[] = [];
  selectedCpu: CpuModel[] = [];
  clonedCpu: { [s: string]: CpuModel; } = {};
  loading: boolean = true;
  activityValues: number[] = [0, 100];

  manufacturerCodesFilteredSelectItems: SelectItem[] = [];
  colorCodesFilteredSelectItems: SelectItem[] = [];
  seriesCodesFilteredSelectItems: SelectItem[] = [];
  microarchitectureCodesFilteredSelectItems: SelectItem[] = [];
  coreFamilyCodesFilteredSelectItems: SelectItem[] = [];
  socketCodesFilteredSelectItems: SelectItem[] = [];
  packagingCodesFilteredSelectItems: SelectItem[] = [];
  integratedGraphicsCodesFilteredSelectItems: SelectItem[] = [];

  seriesCodesAllSelectItems: SelectItem[] = [];
  microarchitectureCodesAllSelectItems: SelectItem[] = [];
  coreFamilyCodesAllSelectItems: SelectItem[] = [];
  socketCodesAllSelectItems: SelectItem[] = [];
  packagingCodesAllSelectItems: SelectItem[] = [];
  integratedGraphicsCodesAllSelectItems: SelectItem[] = [];

  constructor(private cpuService: CpuService,
    private seriesCodesService: SeriesCodesService,
    private microarchitectureCodesService: MicroarchitectureCodesService,
    private coreFamilyCodesService: CoreFamilyCodesService,
    private socketCodesService: SocketCodesService,
    private packagingCodesService: PackagingCodesService,
    private integratedGraphicsCodesService: IntegratedGraphicsCodesService,
    private componentListService: ComponentListService,
    private messageService: MessageService) { }

  ngOnInit() {
    this.cpuService.findAll().subscribe({
      next: (v) => {
        this.cpu = v;

        let manufacturerCodesMap = new Set<string>();
        let colorCodesMap = new Set<string>();
        let seriesCodesMap = new Set<string>();
        let microachitectureCodesMap = new Set<string>();
        let coreFamilyCodesMap = new Set<string>();
        let socketCodesMap = new Set<string>();
        let packagingCodesMap = new Set<string>();
        let integratedGraphicsCodesMap = new Set<string>();

        v.forEach(e => {
          this.addToSelectItemList(this.manufacturerCodesFilteredSelectItems, manufacturerCodesMap, e.pidRegistryEntity.manufacturerCodesEntity?.dictionary, e.pidRegistryEntity.manufacturerCodesEntity?.id);
          this.addToSelectItemList(this.colorCodesFilteredSelectItems, colorCodesMap, e.pidRegistryEntity.colorCodesEntity?.dictionary, e.pidRegistryEntity.colorCodesEntity?.id);
          this.addToSelectItemList(this.seriesCodesFilteredSelectItems, seriesCodesMap, e.seriesCodesEntity?.dictionary, e.seriesCodesEntity?.id);
          this.addToSelectItemList(this.microarchitectureCodesFilteredSelectItems, microachitectureCodesMap, e.microarchitectureCodesEntity?.dictionary, e.microarchitectureCodesEntity?.id);
          this.addToSelectItemList(this.coreFamilyCodesFilteredSelectItems, coreFamilyCodesMap, e.coreFamilyCodesEntity?.dictionary, e.coreFamilyCodesEntity?.id);
          this.addToSelectItemList(this.socketCodesFilteredSelectItems, socketCodesMap, e.socketCodesEntity?.dictionary, e.socketCodesEntity?.id);
          this.addToSelectItemList(this.packagingCodesFilteredSelectItems, packagingCodesMap, e.packagingCodesEntity?.dictionary, e.packagingCodesEntity?.id);
          this.addToSelectItemList(this.integratedGraphicsCodesFilteredSelectItems, integratedGraphicsCodesMap, e.integratedGraphicsCodesEntity?.dictionary, e.integratedGraphicsCodesEntity?.id);
          
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
        this.seriesCodesFilteredSelectItems.sort(this.compare);
        this.microarchitectureCodesFilteredSelectItems.sort(this.compare);
        this.coreFamilyCodesFilteredSelectItems.sort(this.compare);
        this.socketCodesFilteredSelectItems.sort(this.compare);
        this.packagingCodesFilteredSelectItems.sort(this.compare);
        this.integratedGraphicsCodesFilteredSelectItems.sort(this.compare);
      },
      error: (e: string) => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Loading failed: ' + e });
      },
      complete: () => {
        this.loading = false;
      }
    });

    this.initializeDropdownSubscription(this.seriesCodesService, this.seriesCodesAllSelectItems);
    this.initializeDropdownSubscription(this.microarchitectureCodesService, this.microarchitectureCodesAllSelectItems);
    this.initializeDropdownSubscription(this.coreFamilyCodesService, this.coreFamilyCodesAllSelectItems);
    this.initializeDropdownSubscription(this.socketCodesService, this.socketCodesAllSelectItems);
    this.initializeDropdownSubscription(this.packagingCodesService, this.packagingCodesAllSelectItems);
    this.initializeDropdownSubscription(this.integratedGraphicsCodesService, this.integratedGraphicsCodesAllSelectItems);
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

  onRowEditInit(entity: CpuModel) {
    this.clonedCpu[entity.pid] = { ...entity };
  }

  onRowEditSave(entity: CpuModel, index: number) {
    this.loading = true;

    this.cpuService.edit(entity).subscribe({
      next: (v) => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Edited: ' + v.pid });
        this.cpu[this.findIndexById(v.pid)] = { ...v };
        this.cpu = [...this.cpu];

        delete this.clonedCpu[entity.pid];
      },
      error: (e: string) => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Edit failed: ' + e });
        this.cpu[index] = this.clonedCpu[entity.pid];
        delete this.clonedCpu[entity.pid];
      },
      complete: () => {
        this.loading = false;
      }
    });
  }

  onRowEditCancel(entity: CpuModel, index: number) {
    this.cpu[index] = this.clonedCpu[entity.pid];
    this.cpu = [...this.cpu];

    delete this.clonedCpu[entity.pid];
  }

  onRowDelete(entity: CpuModel, index: number) {
    this.loading = true;

    this.cpuService.delete(entity).subscribe({
      next: (v) => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Deleted: ' + v.pid });
        delete this.cpu[this.findIndexById(v.pid)];
        this.cpu = [...this.cpu];
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
    for (let i = 0; i < this.cpu.length; i++) {
      if (this.cpu[i].pid === pid) {
        index = i;
        break;
      }
    }

    return index;
  }
}
