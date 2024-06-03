import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {
  constructor(private _httpClient: HttpClient) {}

  getUser(id: number): Observable<any> {
    return this._httpClient.get<any>(`https://jsonplaceholder.typicode.com/todos/${id}`);
  }
}
