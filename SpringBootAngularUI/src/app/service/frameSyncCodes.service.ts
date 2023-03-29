import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { FrameSyncCodesModel } from '../model/frameSyncCodes.model';

@Injectable()
export class FrameSyncCodesService extends BaseService<FrameSyncCodesModel> {
  constructor(http: HttpClient) {
    super(http, '/frameSyncCodes');
  }
}
