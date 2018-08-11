import { window } from 'rxjs/internal/operators';
import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { LoginService } from './login.service';

import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(@Inject(DOCUMENT) private document: any, private _loginService: LoginService) { }
  ngOnInit() {
  }
  googleLogin() {
    console.log('href ', this.document.location.href);
    this.document.location.href = './auth/google';
  }

  login(username: HTMLInputElement, password: HTMLInputElement) {
    this._loginService.login(username.value, password.value).subscribe(res => {
      console.log('login res ', res);
    })
  }
}
