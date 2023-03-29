import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { MemoryTypeCodesModel } from '../model/memoryTypeCodes.model';

@Injectable()
export class MemoryTypeCodesService extends BaseService<MemoryTypeCodesModel> {
  constructor(http: HttpClient) {
    super(http, '/memoryTypeCodes');
  }
}
