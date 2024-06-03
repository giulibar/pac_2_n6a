import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  constructor(private _httpClient: HttpClient) {}

  getTodos(): Observable<any> {
    return this._httpClient.get<any>('https://jsonplaceholder.typicode.com/todos');
  }
}
