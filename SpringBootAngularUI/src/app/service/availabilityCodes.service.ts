import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { AvailabilityCodesModel } from '../model/availabilityCodes.model';

@Injectable()
export class AvailabilityCodesService extends BaseService<AvailabilityCodesModel> {
  constructor(http: HttpClient) {
    super(http, '/availabilityCodes');
  }
}
