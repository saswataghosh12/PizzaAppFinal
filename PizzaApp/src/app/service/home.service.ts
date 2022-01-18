import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Pizza } from '../models/Pizza.model';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  readonly baseURL = 'http://localhost:11616';

  pizzaList: Pizza[] = [
  ];

  GetPizzaList() {
    this.http.get('http://localhost:11616/api/Pizza/GetPizzaList').subscribe(
      data => {
        this.pizzaList = data as Pizza[];
      }
    );
  }

  TryLogin(body: any) {
    return this.http.post(`${this.baseURL}/api/Authentication/Login`, body, {
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }



TrySignUp(body: any) {
  return this.http.post(`${this.baseURL}/api/Authentication/SignUp`, body, {
    observe: 'body',
    headers: new HttpHeaders().append('Content-Type', 'application/json')
  });
}

}