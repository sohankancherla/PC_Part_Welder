import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export abstract class BaseService<E> {

  protected url: string;
  private server: string = 'http://localhost:8080';

  constructor(protected http: HttpClient, url: string) {
    this.url = this.server + url;
  }

  public findAll(): Observable<E[]> {
    return this.http.get<E[]>(this.url + '/findAll');
  }

  public add(entity: E) {
    return this.http.post<E>(this.url + '/add', entity);
  }

  public delete(entity: E) {
    return this.http.post<E>(this.url + '/delete', entity);
  }

  public edit(entity: E) {
    return this.http.post<E>(this.url + '/edit', entity);
  }
}
