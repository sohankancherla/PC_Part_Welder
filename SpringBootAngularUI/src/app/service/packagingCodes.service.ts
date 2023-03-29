import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { PackagingCodesModel } from '../model/packagingCodes.model';

@Injectable()
export class PackagingCodesService extends BaseService<PackagingCodesModel> {
  constructor(http: HttpClient) {
    super(http, '/packagingCodes');
  }
}
