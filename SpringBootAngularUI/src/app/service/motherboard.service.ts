import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { MotherboardModel } from '../model/motherboard.model';

@Injectable()
export class MotherboardService extends BaseService<MotherboardModel> {
  constructor(http: HttpClient) {
    super(http, '/motherboard');
  }
}
