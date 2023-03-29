import { Component, OnInit, ViewChild } from '@angular/core';
import { UsersService } from '../../service/users.service';
import { UsersModel } from '../../model/users.model';
import { Table } from 'primeng/table'
import { MessageService, SelectItem } from 'primeng/api';
import { BaseService } from 'src/app/service/base.service';

@Component({
  selector: 'app-users-collection',
  templateUrl: './users-collection.component.html',
  styleUrls: ['./users-collection.component.scss']
})
export class UsersCollectionComponent implements OnInit {
  @ViewChild('dt') dt: Table | undefined;

  users: UsersModel[] = [];
  selectedUsers: UsersModel[] = [];
  clonedUsers: { [s: string]: UsersModel; } = {};
  loading: boolean = true;
  activityValues: number[] = [0, 100];

  constructor(private usersService: UsersService,
    private messageService: MessageService) { }

  ngOnInit() {
    this.usersService.findAll().subscribe({
      next: (v) => {
        this.users = v;

        v.forEach(e => {

        });

      },
      error: (e: string) => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Loading failed: ' + e });
      },
      complete: () => {
        this.loading = false;
      }
    });

  }

  onRowEditInit(entity: UsersModel) {
    this.clonedUsers[entity.uid] = { ...entity };
  }

  onRowEditSave(entity: UsersModel, index: number) {
    this.loading = true;

    this.usersService.edit(entity).subscribe({
      next: (v) => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Edited: ' + v.uid });
        this.users[this.findIndexById(v.uid)] = { ...v };
        this.users = [...this.users];

        delete this.clonedUsers[entity.uid];
      },
      error: (e: string) => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Edit failed: ' + e });
        this.users[index] = this.clonedUsers[entity.uid];
        delete this.clonedUsers[entity.uid];
      },
      complete: () => {
        this.loading = false;
      }
    });
  }

  onRowEditCancel(entity: UsersModel, index: number) {
    this.users[index] = this.clonedUsers[entity.uid];
    this.users = [...this.users];

    delete this.clonedUsers[entity.uid];
  }

  onRowDelete(entity: UsersModel, index: number) {
    this.loading = true;

    this.usersService.delete(entity).subscribe({
      next: (v) => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Deleted: ' + v.uid });
        delete this.users[this.findIndexById(v.uid)];
        this.users = [...this.users];
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
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].uid === pid) {
        index = i;
        break;
      }
    }

    return index;
  }
}