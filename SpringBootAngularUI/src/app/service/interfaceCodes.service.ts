import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { InterfaceCodesModel } from '../model/interfaceCodes.model';

@Injectable()
export class InterfaceCodesService extends BaseService<InterfaceCodesModel> {
  constructor(http: HttpClient) {
    super(http, '/interfaceCodes');
  }
}
