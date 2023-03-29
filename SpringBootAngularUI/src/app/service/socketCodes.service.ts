import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { SocketCodesModel } from '../model/socketCodes.model';

@Injectable()
export class SocketCodesService extends BaseService<SocketCodesModel> {
  constructor(http: HttpClient) {
    super(http, '/socketCodes');
  }
}
