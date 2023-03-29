import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { ManufacturerCodesModel } from '../model/manufacturerCodes.model';

@Injectable()
export class ManufacturerCodesService extends BaseService<ManufacturerCodesModel> {
  constructor(http: HttpClient) {
    super(http, '/manufacturerCodes');
  }
}
