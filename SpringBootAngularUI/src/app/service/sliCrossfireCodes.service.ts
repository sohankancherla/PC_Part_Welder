import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { SliCrossfireCodesModel } from '../model/sliCrossfireCodes.model';

@Injectable()
export class SliCrossfireCodesService extends BaseService<SliCrossfireCodesModel> {
  constructor(http: HttpClient) {
    super(http, '/sliCrossfireCodes');
  }
}
