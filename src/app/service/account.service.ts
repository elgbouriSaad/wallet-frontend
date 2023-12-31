import { Injectable } from '@angular/core';
import { Account } from '../entitiy/account';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Objective } from '../entitiy/objective';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  url: string = 'http://localhost:8080/api/v1/accounts';
  constructor(private http: HttpClient) {}

  public allAccounts(): Observable<Account[]> {
    return this.http.get<Account[]>(this.url);
  }

  public addAccount(acc: Account): Observable<Account> {
    return this.http.post<Account>(this.url + '/add', acc);
  }

  public deleteAccount(acc: Account): Observable<Account> {
    return this.http.delete<Account>(this.url + '/delete' + acc.id);
  }

  public updateAccount(acc: Account): Observable<Account> {
    return this.http.put<Account>(this.url + '/update', acc);
  }

  public getAccountById(id: number): Observable<Account> {
    return this.http.get<Account>(this.url + '/' + id);
  }

  public getAccountCategories(id: number): Observable<Objective[]> {
    return this.http.get<Objective[]>(this.url + '/' + id + '/objectives');
  }
}
