import { Component, OnInit, ViewChild } from '@angular/core';
import { MemoryService } from '../../service/memory.service';
import { MemoryModel } from '../../model/memory.model';
import { Table } from 'primeng/table'
import { MessageService, SelectItem } from 'primeng/api';
import { FormFactorCodesService } from 'src/app/service/formFactorCodes.service';
import { BaseService } from 'src/app/service/base.service';
import { EccRegisteredCodesService } from 'src/app/service/eccRegisteredCodes.service';
import { MemoryTypeCodesService } from 'src/app/service/memoryTypeCodes.service';
import { PricingModel } from 'src/app/model/pricing.model';
import { ComponentListModel } from 'src/app/model/componentList.model';
import { GlobalConstants } from 'src/app/globalConstants';
import { ComponentListService } from 'src/app/service/componentList.service';

@Component({
  selector: 'app-memory-collection',
  templateUrl: './memory-collection.component.html',
  styleUrls: ['./memory-collection.component.scss']
})
export class MemoryCollectionComponent implements OnInit {
  @ViewChild('dt') dt: Table | undefined;

  memory: MemoryModel[] = [];
  selectedMemory: MemoryModel[] = [];
  clonedMemory: { [s: string]: MemoryModel; } = {};
  loading: boolean = true;
  activityValues: number[] = [0, 100];

  manufacturerCodesFilteredSelectItems: SelectItem[] = [];
  colorCodesFilteredSelectItems: SelectItem[] = [];
  formFactorCodesFilteredSelectItems: SelectItem[] = [];
  eccRegisteredCodesFilteredSelectItems: SelectItem[] = [];
  memoryTypeCodesFilteredSelectItems: SelectItem[] = [];

  formFactorCodesAllSelectItems: SelectItem[] = [];
  eccRegisteredCodesAllSelectItems: SelectItem[] = [];
  memoryTypeCodesAllSelectItems: SelectItem[] = [];

  constructor(private memoryService: MemoryService,
    private formFactorCodesService: FormFactorCodesService,
    private eccRegisteredCodesService: EccRegisteredCodesService,
    private memoryTypeCodesService: MemoryTypeCodesService,
    private componentListService: ComponentListService,
    private messageService: MessageService) { }

  ngOnInit() {
    this.memoryService.findAll().subscribe({
      next: (v) => {
        this.memory = v;

        let manufacturerCodesMap = new Set<string>();
        let colorCodesMap = new Set<string>();
        let memoryTypeCodesMap = new Set<string>();
        let formFactorCodesMap = new Set<string>();
        let eccRegisteredCodesMap = new Set<string>();

        v.forEach(e => {
          this.addToSelectItemList(this.manufacturerCodesFilteredSelectItems, manufacturerCodesMap, e.pidRegistryEntity.manufacturerCodesEntity.dictionary, e.pidRegistryEntity.manufacturerCodesEntity.id);
          this.addToSelectItemList(this.colorCodesFilteredSelectItems, colorCodesMap, e.pidRegistryEntity.colorCodesEntity?.dictionary, e.pidRegistryEntity.colorCodesEntity?.id);
          this.addToSelectItemList(this.formFactorCodesFilteredSelectItems, formFactorCodesMap, e.formFactorCodesEntity.dictionary, e.formFactorCodesEntity.id);
          this.addToSelectItemList(this.eccRegisteredCodesFilteredSelectItems, eccRegisteredCodesMap, e.eccRegisteredCodesEntity.dictionary, e.eccRegisteredCodesEntity.id);
          this.addToSelectItemList(this.memoryTypeCodesFilteredSelectItems, memoryTypeCodesMap, e.memoryTypeCodesEntity.dictionary, e.memoryTypeCodesEntity.id);
          
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
        this.eccRegisteredCodesFilteredSelectItems.sort(this.compare);
        this.memoryTypeCodesFilteredSelectItems.sort(this.compare);
      },
      error: (e: string) => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Loading failed: ' + e });
      },
      complete: () => {
        this.loading = false;
      }
    });
    this.initializeDropdownSubscription(this.formFactorCodesService, this.formFactorCodesAllSelectItems);
    this.initializeDropdownSubscription(this.eccRegisteredCodesService, this.eccRegisteredCodesAllSelectItems);
    this.initializeDropdownSubscription(this.memoryTypeCodesService, this.memoryTypeCodesAllSelectItems);
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

  onRowEditInit(entity: MemoryModel) {
    this.clonedMemory[entity.pid] = { ...entity };
  }

  onRowEditSave(entity: MemoryModel, index: number) {
    this.loading = true;

    this.memoryService.edit(entity).subscribe({
      next: (v) => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Edited: ' + v.pid });
        this.memory[this.findIndexById(v.pid)] = { ...v };
        this.memory = [...this.memory];

        delete this.clonedMemory[entity.pid];
      },
      error: (e: string) => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Edit failed: ' + e });
        this.memory[index] = this.clonedMemory[entity.pid];
        delete this.clonedMemory[entity.pid];
      },
      complete: () => {
        this.loading = false;
      }
    });
  }

  onRowEditCancel(entity: MemoryModel, index: number) {
    this.memory[index] = this.clonedMemory[entity.pid];
    this.memory = [...this.memory];

    delete this.clonedMemory[entity.pid];
  }

  onRowDelete(entity: MemoryModel, index: number) {
    this.loading = true;

    this.memoryService.delete(entity).subscribe({
      next: (v) => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Deleted: ' + v.pid });
        delete this.memory[this.findIndexById(v.pid)];
        this.memory = [...this.memory];
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
    for (let i = 0; i < this.memory.length; i++) {
      if (this.memory[i].pid === pid) {
        index = i;
        break;
      }
    }

    return index;
  }
}
