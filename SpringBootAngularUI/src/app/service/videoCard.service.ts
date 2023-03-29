import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { VideoCardModel } from '../model/videoCard.model';

@Injectable()
export class VideoCardService extends BaseService<VideoCardModel> {
  constructor(http: HttpClient) {
    super(http, '/videoCard');
  }
}
