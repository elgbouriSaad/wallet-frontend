import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../entitiy/category';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  url: string = 'http://localhost:8080/api/v1/category';
  constructor(private http: HttpClient) {}

  public allCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.url);
  }

  public addCategory(cat: Category): Observable<Category> {
    return this.http.post<Category>(this.url + '/', cat);
  }

  public deleteCategory(cat: Category): Observable<Category> {
    return this.http.delete<Category>(this.url + '/' + cat.id);
  }

  public updateCategory(cat: Category): Observable<Category> {
    return this.http.put<Category>(this.url + '/', cat);
  }
  public getCategoryById(id: number): Observable<Category> {
    return this.http.get<Category>(this.url + '/' + id);
  }
}
