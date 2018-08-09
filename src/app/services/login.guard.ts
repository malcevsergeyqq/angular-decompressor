import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { LoginService } from './login.service';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class LoginGuard implements CanActivate {
  constructor(
    private _loginService: LoginService,
    private _router: Router,
    private _http: HttpClient,
  ) {}

  canActivate(): boolean {
    return !!localStorage.getItem('access_key');
  }
}
