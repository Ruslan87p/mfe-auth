import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


const AUTH_API = 'http://localhost:3000/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'
   })
};



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private tokenKey = 'token';

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}




  login(loginForm: any): Observable<any> {
    const { email, password } = loginForm;
    return this.http.post(
      AUTH_API + 'login',
      {
        email,
        password,
      },
      httpOptions
    );
  }

  register(registrationForm: any): Observable<any> {
    const { name, email, password, surname, gender } = registrationForm;
    console.log(registrationForm, 'registrationForm SVC')
    return this.http.post(
      AUTH_API + 'signup',
      {
        gender,
        name,
        surname,
        email,
        password
      },
      httpOptions
    );
  }


  isLoggedIn(): boolean {
    const token = localStorage.getItem(this.tokenKey);
    return token != null && token.length > 0;
  }

  getToken(): string | null {
    return this.isLoggedIn() ? localStorage.getItem(this.tokenKey) : null;
  }

  logout() {
    localStorage.removeItem(this.tokenKey);
    this.router.navigate(['/login']);
  }


}
