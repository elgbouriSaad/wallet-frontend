import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Objective } from '../entitiy/objective';

@Injectable({
  providedIn: 'root',
})
export class ObjectiveService {
  url: string = 'http://localhost:8080/api/v1/objectives';
  constructor(private http: HttpClient) {}

  public allObjectives(): Observable<Objective[]> {
    return this.http.get<Objective[]>(this.url);
  }

  public addObjective(obj: Objective): Observable<Objective> {
    return this.http.post<Objective>(this.url + '/add', obj);
  }

  public deleteObjective(obj: Objective): Observable<Objective> {
    return this.http.delete<Objective>(this.url + '/delete' + obj.id);
  }

  public updateObjective(obj: Objective): Observable<Objective> {
    return this.http.put<Objective>(this.url + '/update', obj);
  }
}
