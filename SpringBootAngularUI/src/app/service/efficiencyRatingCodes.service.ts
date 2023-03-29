import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { EfficiencyRatingCodesModel } from '../model/efficiencyRatingCodes.model';

@Injectable()
export class EfficiencyRatingCodesService extends BaseService<EfficiencyRatingCodesModel> {
  constructor(http: HttpClient) {
    super(http, '/efficiencyRatingCodes');
  }
}
