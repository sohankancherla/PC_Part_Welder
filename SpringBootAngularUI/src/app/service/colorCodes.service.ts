import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { ColorCodesModel } from '../model/colorCodes.model';

@Injectable()
export class ColorCodesService extends BaseService<ColorCodesModel> {
  constructor(http: HttpClient) {
    super(http, '/colorCodes');
  }
}
