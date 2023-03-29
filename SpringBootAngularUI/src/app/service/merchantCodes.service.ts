import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { MerchantCodesModel } from '../model/merchantCodes.model';

@Injectable()
export class MerchantCodesService extends BaseService<MerchantCodesModel> {
  constructor(http: HttpClient) {
    super(http, '/merchantCodes');
  }
}
