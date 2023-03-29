import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { ComponentListModel } from '../model/componentList.model';
import { Observable } from 'rxjs';

@Injectable()
export class ComponentListService extends BaseService<ComponentListModel> {
  constructor(http: HttpClient) {
    super(http, '/componentList');
  }

  public findByCid(cid: number): Observable<ComponentListModel[]> {
    return this.http.get<ComponentListModel[]>(this.url + '/findByCid/' + cid);
  }
}
