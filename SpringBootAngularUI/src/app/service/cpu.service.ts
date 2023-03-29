import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { CpuModel } from '../model/cpu.model';

@Injectable()
export class CpuService extends BaseService<CpuModel> {
  constructor(http: HttpClient) {
    super(http, '/cpu');
  }
}
