import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { ComputerModel } from '../model/computer.model';
import { Observable } from 'rxjs';

@Injectable()
export class ComputerService extends BaseService<ComputerModel> {
  constructor(http: HttpClient) {
    super(http, '/computer');
  }

  public findByUid(uid: number): Observable<ComputerModel[]> {
    return this.http.get<ComputerModel[]>(this.url + '/findByUid/' + uid);
  }
}
