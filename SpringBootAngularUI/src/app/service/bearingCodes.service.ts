import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { BearingCodesModel } from '../model/bearingCodes.model';

@Injectable()
export class BearingCodesService extends BaseService<BearingCodesModel> {
  constructor(http: HttpClient) {
    super(http, '/bearingCodes');
  }
}
