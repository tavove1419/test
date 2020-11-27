import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';


const helper = new JwtHelperService();

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  
  getSessionExp(): number {
    return this.decodeToken().exp;
  }

  removeSession(): void {
    sessionStorage.clear();
  }

  getToken(): string {
    return sessionStorage.getItem('Token');
  }

  private decodeToken() {
    const token = sessionStorage.getItem('Token');
    return helper.decodeToken(token);
  }
}