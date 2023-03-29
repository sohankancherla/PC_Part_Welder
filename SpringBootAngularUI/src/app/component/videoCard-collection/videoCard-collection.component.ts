import { Component, OnInit, ViewChild } from '@angular/core';
import { VideoCardService } from '../../service/videoCard.service';
import { VideoCardModel } from '../../model/videoCard.model';
import { Table } from 'primeng/table'
import { MessageService, SelectItem } from 'primeng/api';
import { BaseService } from 'src/app/service/base.service';
import { ChipsetCodesService } from 'src/app/service/chipsetCodes.service';
import { FrameSyncCodesService } from 'src/app/service/frameSyncCodes.service';
import { InterfaceCodesService } from 'src/app/service/interfaceCodes.service';
import { MemoryTypeCodesService } from 'src/app/service/memoryTypeCodes.service';
import { PricingModel } from 'src/app/model/pricing.model';
import { ComponentListModel } from 'src/app/model/componentList.model';
import { GlobalConstants } from 'src/app/globalConstants';
import { ComponentListService } from 'src/app/service/componentList.service';

@Component({
  selector: 'app-videoCard-collection',
  templateUrl: './videoCard-collection.component.html',
  styleUrls: ['./videoCard-collection.component.scss']
})
export class VideoCardCollectionComponent implements OnInit {
  @ViewChild('dt') dt: Table | undefined;

  videoCard: VideoCardModel[] = [];
  selectedVideoCard: VideoCardModel[] = [];
  clonedVideoCard: { [s: string]: VideoCardModel; } = {};
  loading: boolean = true;
  activityValues: number[] = [0, 100];

  manufacturerCodesFilteredSelectItems: SelectItem[] = [];
  colorCodesFilteredSelectItems: SelectItem[] = [];
  chipsetCodesFilteredSelectItems: SelectItem[] = [];
  memoryTypeCodesFilteredSelectItems: SelectItem[] = [];
  interfaceCodesFilteredSelectItems: SelectItem[] = [];
  frameSyncCodesFilteredSelectItems: SelectItem[] = [];

  chipsetCodesAllSelectItems: SelectItem[] = [];
  memoryTypeCodesAllSelectItems: SelectItem[] = [];
  interfaceCodesAllSelectItems: SelectItem[] = [];
  frameSyncCodesAllSelectItems: SelectItem[] = [];

  constructor(private videoCardService: VideoCardService,
    private chipsetCodesService: ChipsetCodesService,
    private memoryTypeCodesService: MemoryTypeCodesService,
    private interfaceCodesService: InterfaceCodesService,
    private frameSyncCodesService: FrameSyncCodesService,
    private componentListService: ComponentListService,
    private messageService: MessageService) { }

  ngOnInit() {
    this.videoCardService.findAll().subscribe({
      next: (v) => {
        this.videoCard = v;

        let manufacturerCodesMap = new Set<string>();
        let colorCodesMap = new Set<string>();
        let chipsetCodesMap = new Set<string>();
        let memoryTypeCodesMap = new Set<string>();
        let interfaceCodesMap = new Set<string>();
        let frameSyncCodesMap = new Set<string>();

        v.forEach(e => {
          this.addToSelectItemList(this.manufacturerCodesFilteredSelectItems, manufacturerCodesMap, e.pidRegistryEntity.manufacturerCodesEntity?.dictionary, e.pidRegistryEntity.manufacturerCodesEntity?.id);
          this.addToSelectItemList(this.colorCodesFilteredSelectItems, colorCodesMap, e.pidRegistryEntity.colorCodesEntity?.dictionary, e.pidRegistryEntity.colorCodesEntity?.id);
          this.addToSelectItemList(this.chipsetCodesFilteredSelectItems, chipsetCodesMap, e.chipsetCodesEntity?.dictionary, e.chipsetCodesEntity?.id)
          this.addToSelectItemList(this.memoryTypeCodesFilteredSelectItems, memoryTypeCodesMap, e.memoryTypeCodesEntity?.dictionary, e.memoryTypeCodesEntity?.id)
          this.addToSelectItemList(this.interfaceCodesFilteredSelectItems, interfaceCodesMap, e.interfaceCodesEntity?.dictionary, e.interfaceCodesEntity?.id)
          this.addToSelectItemList(this.frameSyncCodesFilteredSelectItems, frameSyncCodesMap, e.frameSyncCodesEntity?.dictionary, e.frameSyncCodesEntity?.id)
          
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
        this.chipsetCodesFilteredSelectItems.sort(this.compare);
        this.memoryTypeCodesFilteredSelectItems.sort(this.compare);
        this.interfaceCodesFilteredSelectItems.sort(this.compare);
        this.frameSyncCodesFilteredSelectItems.sort(this.compare);
      },
      error: (e: string) => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Loading failed: ' + e });
      },
      complete: () => {
        this.loading = false;
      }
    });

    this.initializeDropdownSubscription(this.chipsetCodesService, this.chipsetCodesAllSelectItems);
    this.initializeDropdownSubscription(this.memoryTypeCodesService, this.memoryTypeCodesAllSelectItems);
    this.initializeDropdownSubscription(this.interfaceCodesService, this.interfaceCodesAllSelectItems);
    this.initializeDropdownSubscription(this.frameSyncCodesService, this.frameSyncCodesAllSelectItems);
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

  onRowEditInit(entity: VideoCardModel) {
    this.clonedVideoCard[entity.pid] = { ...entity };
  }

  onRowEditSave(entity: VideoCardModel, index: number) {
    this.loading = true;

    this.videoCardService.edit(entity).subscribe({
      next: (v) => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Edited: ' + v.pid });
        this.videoCard[this.findIndexById(v.pid)] = { ...v };
        this.videoCard = [...this.videoCard];

        delete this.clonedVideoCard[entity.pid];
      },
      error: (e: string) => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Edit failed: ' + e });
        this.videoCard[index] = this.clonedVideoCard[entity.pid];
        delete this.clonedVideoCard[entity.pid];
      },
      complete: () => {
        this.loading = false;
      }
    });
  }

  onRowEditCancel(entity: VideoCardModel, index: number) {
    this.videoCard[index] = this.clonedVideoCard[entity.pid];
    this.videoCard = [...this.videoCard];

    delete this.clonedVideoCard[entity.pid];
  }

  onRowDelete(entity: VideoCardModel, index: number) {
    this.loading = true;

    this.videoCardService.delete(entity).subscribe({
      next: (v) => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Deleted: ' + v.pid });
        delete this.videoCard[this.findIndexById(v.pid)];
        this.videoCard = [...this.videoCard];
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
    for (let i = 0; i < this.videoCard.length; i++) {
      if (this.videoCard[i].pid === pid) {
        index = i;
        break;
      }
    }

    return index;
  }
}
