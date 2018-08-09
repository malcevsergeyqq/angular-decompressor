import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

@Injectable()
export class LoginService {
  private _url;

  constructor(
    private _http: HttpClient,
    private _router: Router
  ) {
    this._url = environment.serverUrl;
  }

  login(email, password) {
    const data = {
      email: email,
      password: password
    };
    return this._http.post(this._url, data).subscribe(r => {
      localStorage.setItem('access_key', r['status']);
      return this._router.navigate(['/compressor']);
      }, e => this._router.navigate(['/']));
  }
}
