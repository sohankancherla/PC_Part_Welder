import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../../service/users.service';
import { UsersModel } from '../../model/users.model';
import { MessageService, SelectItem } from 'primeng/api';
import { GlobalConstants } from 'src/app/globalConstants';
import { ComputerService } from 'src/app/service/computer.service';

@Component({
  selector: 'app-users-login-form',
  templateUrl: './users-login-form.component.html',
  styleUrls: ['./users-login-form.component.scss']
})
export class UsersLoginFormComponent implements OnInit {

  users: UsersModel[] = [];
  usersOriginal: UsersModel[] = [];
  selectedUsers: SelectItem = {
    value: undefined
  };
  usersSubmit: UsersModel;
  loading: boolean = true;

  usersSelectItem: SelectItem[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private usersService: UsersService,
    private computerService: ComputerService,
    private messageService: MessageService) {
    this.usersSubmit = new UsersModel(0, "", "", "", false);
  }

  ngOnInit() {
    this.usersService.findAll().subscribe({
      next: (v) => {
        this.users = v;
        this.usersOriginal = v;

        v.forEach(e => {
          this.usersSelectItem.push({label: e.username, value: e});
        })
      },
      error: (e: string) => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Loading failed: ' + e });
      },
      complete: () => {
        this.loading = false;
      }
    });

  }

  onSubmit() {
    if (this.usersSubmit.password == this.selectedUsers.value.password) {
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'User logged in: ' + this.selectedUsers.value.username });

      this.computerService.findByUid(this.selectedUsers.value.uid).subscribe({
        next: (v) => {
          GlobalConstants.user = this.selectedUsers.value;
          GlobalConstants.computer.cid = v[0].cid;
          GlobalConstants.computer.uid = GlobalConstants.user.uid;
        },
        error: (e: string) => {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Loading computer failed: ' + e });
        },
        complete: () => {
          this.loading = false;
        }
      });

      this.gotoHome();
    } else {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Incorrect password: ' });
    }
  }

  gotoHome() {
    this.router.navigate(['/']);
  }
}
