import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { CpuCoolerModel } from '../model/cpuCooler.model';

@Injectable()
export class CpuCoolerService extends BaseService<CpuCoolerModel> {
  constructor(http: HttpClient) {
    super(http, '/cpuCooler');
  }
}
