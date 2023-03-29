import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { MemoryModel } from '../model/memory.model';

@Injectable()
export class MemoryService extends BaseService<MemoryModel> {
  constructor(http: HttpClient) {
    super(http, '/memory');
  }
}
