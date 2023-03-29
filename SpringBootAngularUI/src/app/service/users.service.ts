import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsersModel } from '../model/users.model';
import { BaseService } from './base.service';

@Injectable()
export class UsersService extends BaseService<UsersModel> {
  constructor(http: HttpClient) {
    super(http, '/users');
  }
}
