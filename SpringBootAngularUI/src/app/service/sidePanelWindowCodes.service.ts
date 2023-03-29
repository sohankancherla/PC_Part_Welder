import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { SidePanelWindowCodesModel } from '../model/sidePanelWindowCodes.model';

@Injectable()
export class SidePanelWindowCodesService extends BaseService<SidePanelWindowCodesModel> {
  constructor(http: HttpClient) {
    super(http, '/sidePanelWindowCodes');
  }
}
