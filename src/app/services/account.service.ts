import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AccountService {
  private apiUrl = 'http://localhost:5251/api/accounts';

  constructor(private http: HttpClient) {}

  getAccounts(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }

  createAccount(account: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, account);
  }

  deleteAccount(accountId: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${accountId}`);
  }
}

