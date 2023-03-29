import { Component, OnInit, ViewChild } from '@angular/core';
import { MotherboardService } from '../../service/motherboard.service';
import { MotherboardModel } from '../../model/motherboard.model';
import { Table } from 'primeng/table'
import { MessageService, SelectItem } from 'primeng/api';
import { SocketCodesService } from 'src/app/service/socketCodes.service';
import { ChipsetCodesService } from 'src/app/service/chipsetCodes.service';
import { MemoryTypeCodesService } from 'src/app/service/memoryTypeCodes.service';
import { MotherboardFormFactorCodesService } from 'src/app/service/motherboardFormFactorCodes.service';
import { BaseService } from 'src/app/service/base.service';
import { PricingModel } from 'src/app/model/pricing.model';
import { GlobalConstants } from 'src/app/globalConstants';
import { ComponentListService } from 'src/app/service/componentList.service';
import { ComponentListModel } from 'src/app/model/componentList.model';

@Component({
  selector: 'app-motherboard-collection',
  templateUrl: './motherboard-collection.component.html',
  styleUrls: ['./motherboard-collection.component.scss']
})
export class MotherboardCollectionComponent implements OnInit {
  @ViewChild('dt') dt: Table | undefined;

  motherboard: MotherboardModel[] = [];
  selectedMotherboard: MotherboardModel[] = [];
  clonedMotherboard: { [s: string]: MotherboardModel; } = {};
  loading: boolean = true;
  activityValues: number[] = [0, 100];

  manufacturerCodesFilteredSelectItems: SelectItem[] = [];
  colorCodesFilteredSelectItems: SelectItem[] = [];
  socketCodesFilteredSelectItems: SelectItem[] = [];
  chipsetCodesFilteredSelectItems: SelectItem[] = [];
  memoryTypeCodesFilteredSelectItems: SelectItem[] = [];
  motherboardFormFactorCodesFilteredSelectItems: SelectItem[] = [];

  socketCodesAllSelectItems: SelectItem[] = [];
  chipsetCodesAllSelectItems: SelectItem[] = [];
  memoryTypeCodesAllSelectItems: SelectItem[] = [];
  motherboardFormFactorCodesAllSelectItems: SelectItem[] = [];

  constructor(private motherboardService: MotherboardService,
    private socketCodesService: SocketCodesService,
    private chipsetCodesService: ChipsetCodesService,
    private memoryTypeCodesService: MemoryTypeCodesService,
    private motherboardFormFactorCodesService: MotherboardFormFactorCodesService,
    private componentListService: ComponentListService,
    private messageService: MessageService) { }

  ngOnInit() {
    this.motherboardService.findAll().subscribe({
      next: (v) => {
        this.motherboard = v;

        let manufacturerCodesMap = new Set<string>();
        let colorCodesMap = new Set<string>();
        let socketCodesMap = new Set<string>();
        let chipsetCodesMap = new Set<string>();
        let memoryTypeCodesMap = new Set<string>();
        let motherboardFormFactorCodesMap = new Set<string>();

        v.forEach(e => {
          this.addToSelectItemList(this.manufacturerCodesFilteredSelectItems, manufacturerCodesMap, e.pidRegistryEntity.manufacturerCodesEntity.dictionary, e.pidRegistryEntity.manufacturerCodesEntity.id);
          this.addToSelectItemList(this.colorCodesFilteredSelectItems, colorCodesMap, e.pidRegistryEntity.colorCodesEntity?.dictionary, e.pidRegistryEntity.colorCodesEntity?.id);
          this.addToSelectItemList(this.socketCodesFilteredSelectItems, socketCodesMap, e.socketCodesEntity.dictionary, e.socketCodesEntity.id);
          this.addToSelectItemList(this.chipsetCodesFilteredSelectItems, chipsetCodesMap, e.chipsetCodesEntity.dictionary, e.chipsetCodesEntity.id);
          this.addToSelectItemList(this.memoryTypeCodesFilteredSelectItems, memoryTypeCodesMap, e.memoryTypeCodesEntity?.dictionary, e.memoryTypeCodesEntity?.id);
          this.addToSelectItemList(this.motherboardFormFactorCodesFilteredSelectItems, motherboardFormFactorCodesMap, e.motherboardFormFactorCodesEntity.dictionary, e.motherboardFormFactorCodesEntity.id);

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
        this.socketCodesFilteredSelectItems.sort(this.compare);
        this.chipsetCodesFilteredSelectItems.sort(this.compare);
        this.memoryTypeCodesFilteredSelectItems.sort(this.compare);
        this.motherboardFormFactorCodesFilteredSelectItems.sort(this.compare);

      },
      error: (e: string) => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Loading failed: ' + e });
      },
      complete: () => {
        this.loading = false;
      }
    });

    this.initializeDropdownSubscription(this.socketCodesService, this.socketCodesAllSelectItems);
    this.initializeDropdownSubscription(this.chipsetCodesService, this.chipsetCodesAllSelectItems);
    this.initializeDropdownSubscription(this.memoryTypeCodesService, this.memoryTypeCodesAllSelectItems);
    this.initializeDropdownSubscription(this.motherboardFormFactorCodesService, this.motherboardFormFactorCodesAllSelectItems);
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

  onRowEditInit(entity: MotherboardModel) {
    this.clonedMotherboard[entity.pid] = { ...entity };
  }

  onRowEditSave(entity: MotherboardModel, index: number) {
    this.loading = true;

    this.motherboardService.edit(entity).subscribe({
      next: (v) => {
        v.pidRegistryEntity.lowestPricingEntity = entity.pidRegistryEntity.lowestPricingEntity; // Reset lowest pricing since returned DB record won't have this set
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Edited: ' + v.pid });
        this.motherboard[this.findIndexById(v.pid)] = { ...v };
        this.motherboard = [...this.motherboard];

        delete this.clonedMotherboard[entity.pid];
      },
      error: (e: string) => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Edit failed: ' + e });
        this.motherboard[index] = this.clonedMotherboard[entity.pid];
        delete this.clonedMotherboard[entity.pid];
      },
      complete: () => {
        this.loading = false;
      }
    });
  }

  onRowEditCancel(entity: MotherboardModel, index: number) {
    this.motherboard[index] = this.clonedMotherboard[entity.pid];
    this.motherboard = [...this.motherboard];

    delete this.clonedMotherboard[entity.pid];
  }

  onRowDelete(entity: MotherboardModel, index: number) {
    this.loading = true;

    this.motherboardService.delete(entity).subscribe({
      next: (v) => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Deleted: ' + v.pid });
        delete this.motherboard[this.findIndexById(v.pid)];
        this.motherboard = [...this.motherboard];
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
    for (let i = 0; i < this.motherboard.length; i++) {
      if (this.motherboard[i].pid === pid) {
        index = i;
        break;
      }
    }

    return index;
  }
}