import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { ExternalPowerCodesModel } from '../model/externalPowerCodes.model';

@Injectable()
export class ExternalPowerCodesService extends BaseService<ExternalPowerCodesModel> {
  constructor(http: HttpClient) {
    super(http, '/externalPowerCodes');
  }
}
