import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { ChipsetCodesModel } from '../model/chipsetCodes.model';

@Injectable()
export class ChipsetCodesService extends BaseService<ChipsetCodesModel> {
  constructor(http: HttpClient) {
    super(http, '/chipsetCodes');
  }
}
