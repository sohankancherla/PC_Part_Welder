import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { IntegratedGraphicsCodesModel } from '../model/integratedGraphicsCodes.model';

@Injectable()
export class IntegratedGraphicsCodesService extends BaseService<IntegratedGraphicsCodesModel> {
  constructor(http: HttpClient) {
    super(http, '/integratedGraphicsCodes');
  }
}
