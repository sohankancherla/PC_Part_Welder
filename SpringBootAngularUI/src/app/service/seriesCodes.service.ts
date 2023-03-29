import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { SeriesCodesModel } from '../model/seriesCodes.model';

@Injectable()
export class SeriesCodesService extends BaseService<SeriesCodesModel> {
  constructor(http: HttpClient) {
    super(http, '/seriesCodes');
  }
}
