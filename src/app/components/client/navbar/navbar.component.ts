import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/components/login/login.service';

@Component({
    selector: 'app-ctn-navbar',
    templateUrl: 'navbar.component.html'
})

export class NavbarComponent implements OnInit {
    constructor(private _loginService: LoginService) { }

    ngOnInit() { }

    logout() {
        this._loginService.logout().subscribe(res => {
            // console.log('res ', res);
        })
    }

}