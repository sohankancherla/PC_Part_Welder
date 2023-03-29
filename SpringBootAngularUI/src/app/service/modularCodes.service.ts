import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { ModularCodesModel } from '../model/modularCodes.model';

@Injectable()
export class ModularCodesService extends BaseService<ModularCodesModel> {
  constructor(http: HttpClient) {
    super(http, '/modularCodes');
  }
}
