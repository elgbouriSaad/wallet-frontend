import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../entitiy/category';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  url: string = 'http://localhost:8080/api/v1/categories';
  constructor(private http: HttpClient) {}

  public allCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.url);
  }

  public addCategory(cat: Category): Observable<Category> {
    return this.http.post<Category>(this.url + '/add', cat);
  }

  public deleteCategory(cat: Category): Observable<Category> {
    return this.http.delete<Category>(this.url + '/delete' + cat.id);
  }

  public updateCategory(cat: Category): Observable<Category> {
    return this.http.put<Category>(this.url + '/update', cat);
  }
}
