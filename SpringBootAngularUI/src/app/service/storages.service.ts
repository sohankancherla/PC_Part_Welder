import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { StoragesModel } from '../model/storages.model';

@Injectable()
export class StoragesService extends BaseService<StoragesModel> {
  constructor(http: HttpClient) {
    super(http, '/storages');
  }
}
