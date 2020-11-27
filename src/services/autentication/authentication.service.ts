import { Injectable } from '@angular/core';
import { LocalStorageService } from '../local-storage/local-storage.service';

@Injectable()
export class AuthenticationService {
  constructor(
    private localStorageService: LocalStorageService,
  ) {}

  setTokenSessionStorage(token: any) {
    sessionStorage.setItem('Token', token);
    const timeout = this.localStorageService.getSessionExp();
  }

  getTokenSessionStorage(param: string = '') {
    if (sessionStorage.getItem('Token')) {
      const tokenEncryp = sessionStorage.getItem('Token');
      const token = JSON.parse(tokenEncryp);
      if (param === '') {
        return token;
      }
    }
    return '';
  }

  isLogged(): boolean {
    return sessionStorage.getItem('Token') ? true : false;
  }
}