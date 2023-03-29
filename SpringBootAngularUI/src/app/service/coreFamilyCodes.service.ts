import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { CoreFamilyCodesModel } from '../model/coreFamilyCodes.model';

@Injectable()
export class CoreFamilyCodesService extends BaseService<CoreFamilyCodesModel> {
  constructor(http: HttpClient) {
    super(http, '/coreFamilyCodes');
  }
}
