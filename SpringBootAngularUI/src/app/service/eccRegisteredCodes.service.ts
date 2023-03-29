import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { EccRegisteredCodesModel } from '../model/eccRegisteredCodes.model';

@Injectable()
export class EccRegisteredCodesService extends BaseService<EccRegisteredCodesModel> {
  constructor(http: HttpClient) {
    super(http, '/eccRegisteredCodes');
  }
}
