import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  api_url = 'https://reqres.in';

  constructor(
    private http: HttpClient
  ) { }

  isLogin(params): Observable<any> {
    return this.http.post(`${this.api_url}/api/login`, params);
  }
  
}
