import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { FrontPanelUsbCodesModel } from '../model/frontPanelUsbCodes.model';

@Injectable()
export class FrontPanelUsbCodesService extends BaseService<FrontPanelUsbCodesModel> {
  constructor(http: HttpClient) {
    super(http, '/FrontPanelUsbCodes');
  }
}
