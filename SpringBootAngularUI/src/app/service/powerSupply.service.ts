import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { PowerSupplyModel } from '../model/powerSupply.model';

@Injectable()
export class PowerSupplyService extends BaseService<PowerSupplyModel> {
  constructor(http: HttpClient) {
    super(http, '/powerSupply');
  }
}
