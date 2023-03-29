import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { MicroarchitectureCodesModel } from '../model/microarchitectureCodes.model';

@Injectable()
export class MicroarchitectureCodesService extends BaseService<MicroarchitectureCodesModel> {
  constructor(http: HttpClient) {
    super(http, '/microarchitectureCodes');
  }
}
