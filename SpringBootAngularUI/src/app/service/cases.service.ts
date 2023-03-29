import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { CasesModel } from '../model/cases.model';

@Injectable()
export class CasesService extends BaseService<CasesModel> {
  constructor(http: HttpClient) {
    super(http, '/cases');
  }
}
