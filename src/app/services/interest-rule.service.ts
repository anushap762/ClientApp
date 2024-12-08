import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { $ } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class InterestRuleService {
  private apiUrl = 'http://localhost:5251/api/InterestRules';

  constructor(private http: HttpClient) {}

  getInterestRules(): Observable<any> {
    return this.http.get(this.apiUrl+'/list');
  }

  createRule(rule: any): Observable<any> {
    debugger
    return this.http.post(this.apiUrl+'/add', rule);
  }
}