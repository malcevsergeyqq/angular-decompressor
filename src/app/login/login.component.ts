import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  private _loginGroup: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _loginService: LoginService,
    private _router: Router
  ) {}

  createFormGroup() {
    return this._fb.group({
       _email: ['123', [Validators.required, Validators.pattern(
         /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/
       )], ],
       _password: ['asd', [Validators.required, Validators.maxLength(4)]]
    });
  }

  ngOnInit() {
    if (!!localStorage.getItem('access_key')) { this._router.navigate(['/compressor']); }
    this._loginGroup = this.createFormGroup();
  }

  onSubmit () {
      this._loginService.login(
        this._loginGroup.get('_email').value,
        this._loginGroup.get('_password').value
      );
  }
}
