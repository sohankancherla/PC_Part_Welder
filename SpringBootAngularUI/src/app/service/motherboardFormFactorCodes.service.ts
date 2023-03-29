import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { MotherboardFormFactorCodesModel } from '../model/motherboardFormFactorCodes.model';

@Injectable()
export class MotherboardFormFactorCodesService extends BaseService<MotherboardFormFactorCodesModel> {
  constructor(http: HttpClient) {
    super(http, '/motherboardFormFactorCodes');
  }
}
