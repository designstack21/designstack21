import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LoginService {
    private googleLoginUrl = './auth/google';
    private isUserLogin = './auth/isUserLogin';
    private loginUrl = './auth/loginUrl';
    constructor(private http: HttpClient) { }
    googleLogin() {
        return this.http.get(this.googleLoginUrl);
    }
    isLogin() {
        return this.http.get(this.isUserLogin);
    }
    login(username, password) {
        return this.http.get(this.loginUrl);
    }
}
