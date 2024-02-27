import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, of} from "rxjs";
import {Category} from "../interfaces/category";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private url = 'api/categories'
  httpOptions = {
    header: new HttpHeaders(
      {'Content-Type': 'application/json'}
    )
  }

  constructor(private http: HttpClient) {
  }
  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.url);
  }

  getCategory(id: number): Observable<Category> {
    const url = `${this.url}/${id}`;

    return this.http.get<Category>(url);
  }


  updateCategory(category: Category): any {
    // @ts-ignore
    return this.http.put(this.url, category, this.httpOptions)
      .pipe(
        catchError(this.handleError<Category>('updateCategory'))
      );
  }

  addCategory(category: Category): Observable<Category> {
    // @ts-ignore
    return this.http.post<Category>(this.url, category, this.httpOptions)
      .pipe(
        catchError(this.handleError<Category>('addCategory'))
      );
  }

  deleteCategory(category: Category): Observable<Category> {
    const url = `${this.url}/${category.id}`;

    // @ts-ignore
    return this.http.delete<Category>(url, this.httpOptions)
      .pipe(
        catchError(this.handleError<Category>('deleteCategory id=${category.id}'))
      );
  }

  private handleError<T>(operation = 'operation', result?: T): any {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
