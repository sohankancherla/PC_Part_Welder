import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { CpuSocketCodesModel } from '../model/cpuSocketCodes.model';

@Injectable()
export class CpuSocketCodesService extends BaseService<CpuSocketCodesModel> {
  constructor(http: HttpClient) {
    super(http, '/cpuSocketCodes');
  }
}
