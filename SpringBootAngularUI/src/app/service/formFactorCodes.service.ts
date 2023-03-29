import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { FormFactorCodesModel } from '../model/formFactorCodes.model';

@Injectable()
export class FormFactorCodesService extends BaseService<FormFactorCodesModel> {
  constructor(http: HttpClient) {
    super(http, '/formFactorCodes');
  }
}
