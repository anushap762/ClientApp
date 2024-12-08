import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatementService {
  private apiUrl = 'http://localhost:5251/api/statements'; // Your backend URL

  constructor(private http: HttpClient) {}

  getStatement(account: string, month: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${account}/${month}`);
  }
}
