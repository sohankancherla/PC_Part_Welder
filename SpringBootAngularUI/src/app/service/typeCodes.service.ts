import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { TypeCodesModel } from '../model/typeCodes.model';

@Injectable()
export class TypeCodesService extends BaseService<TypeCodesModel> {
  constructor(http: HttpClient) {
    super(http, '/typeCodes');
  }
}
