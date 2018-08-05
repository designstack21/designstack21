import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SignupService {
	private signupUrl = './auth/signup';
	private isUserLogin = './auth/isUserLogin';
	constructor(private http: HttpClient) { }
	signup(data) {
		return this.http.post(this.signupUrl, data);
	}
}
