import { Component, OnInit } from '@angular/core';
import { SignupService } from './signup.service';

@Component({
	selector: 'app-signup',
	templateUrl: './signup.component.html',
	styleUrls: ['./signup.component.css']
})
export class SignUpComponent implements OnInit {
	private signup = {
		firstName: '',
		lastName: '',
		phoneNo: '',
		email: '',
		password: '',
		cPassword: '',
		errFirstName: false,
		errLastName: false,
		errPhoneNo: false,
		errEmail: false,
		errPassword: false,
		errCPassword: false,
	};
	isSubmit = false;
	constructor(private _signupService: SignupService) { }

	ngOnInit() {
	}
	register() {
		this.isSubmit = true;
		if (!this.validateInput()) {
			return;
		}
		this._signupService.signup({
			firstName: this.signup.firstName,
			lastName: this.signup.lastName,
			email: this.signup.email,
			phoneNo: this.signup.phoneNo,
			password: this.signup.password
		}).subscribe(res => {
			console.log(res);
		});
	}
	validateInput() {
		if (!this.isSubmit) {
			return;
		}
		const alphaExp = /^[a-zA-Z]+$/;
		const emailExp = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
		const noExp = /^[6789]\d{9}$/;
		let isValid = true;
		this.signup.errFirstName = false;
		this.signup.errLastName = false;
		this.signup.errPhoneNo = false;
		this.signup.errEmail = false;
		this.signup.errPassword = false;
		this.signup.errCPassword = false;
		if (!this.signup.firstName || !this.signup.firstName.match(alphaExp)) {
			this.signup.errFirstName = true;
			isValid = false;
		}
		if (!this.signup.lastName || !this.signup.lastName.match(alphaExp)) {
			this.signup.errLastName = true;
			isValid = false;
		}

		if (!this.signup.email || !this.signup.email.match(emailExp)) {
			this.signup.errEmail = true;
			isValid = false;
		}

		if (!(this.signup.phoneNo.toString()).match(noExp)) {
			this.signup.errPhoneNo = true;
			isValid = false;
		}

		if (!this.signup.password || this.signup.password.length <= 4) {
			this.signup.errPassword = true;
			isValid = false;
		}

		if (!this.signup.cPassword || !(this.signup.cPassword === this.signup.password)) {
			this.signup.errCPassword = true;
			isValid = false;
		}
		return isValid;
	}
}
