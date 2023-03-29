import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../../service/users.service';
import { UsersModel } from '../../model/users.model';
import { MessageService } from 'primeng/api';
import { ComputerService } from 'src/app/service/computer.service';
import { ComputerModel } from 'src/app/model/computer.model';

@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.scss']
})
export class UsersFormComponent {

  users: UsersModel;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private usersService: UsersService,
    private computerService: ComputerService,
    private messageService: MessageService) {
    this.users = new UsersModel(0, "", "", "", false);
  }

  onSubmit() {
    let uid = 0;
    this.usersService.add(this.users).subscribe({
      next: (v) => {
        uid = v.uid;
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Added user: ' + v.uid });
      },
      error: (e: string) => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Add user failed: ' + e });
      },
      complete: () => {
        let computer = new ComputerModel(0, uid);
        this.computerService.add(computer).subscribe({
          next: (v) => {
            this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Added computer: ' + v.cid });
          },
          error: (e: string) => {
            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Add computer failed: ' + e });
          },
          complete: () => {
            this.gotoUsersList();
          }
        });

      }
    });
  }

  gotoUsersList() {
    this.router.navigate(['/users']);
  }
}
