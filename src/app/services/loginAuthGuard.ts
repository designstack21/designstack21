
import { Injectable } from '@angular/core';
import {
	CanActivate, Router,
	ActivatedRouteSnapshot,
	RouterStateSnapshot
} from '@angular/router';
import { Observable, Subject, ReplaySubject } from 'rxjs';
import { LoginService } from '../components/login/login.service';

@Injectable()
export class AuthGuard implements CanActivate {
	constructor(private router: Router, private _loginService: LoginService) {
	}
	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
		return Observable.create(observer => {
			this._loginService.isLogin()
				.subscribe((res) => {
					if (res) {
						this.router.navigate(['dashboard']);
					}
					observer.next(true);
					observer.complete();
				}, (err) => {
					this.redirectToLogin(state);
					observer.next(false);
					observer.complete();
				});
		});
	}

	redirectToLogin(state: RouterStateSnapshot) {
		this.router.navigate(['login'], { queryParams: { q: state.url } });
	}

}

