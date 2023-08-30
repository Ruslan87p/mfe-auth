import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class HomeService {

  headers = new HttpHeaders()
  constructor(private http: HttpClient) {

    // this.headers.set("Access-Control-Allow-Origin", "*")
    // this.headers.set("Content-Type", "application/x-www-form-urlencoded")
    // this.headers.set("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    // , {headers: this.headers}
  }

  getUsers(): Observable<any> {
      return this.http.get('http://localhost:3000/users')
      .pipe(
        catchError(this.handleError)
      );;
  }


  private handleError(err: HttpErrorResponse | any) {
    console.error('An error occurred', err);
    return throwError(err.message || err);
  }


}
