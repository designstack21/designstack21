import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterStateSnapshot } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InterceptService } from './services/interceptor';
import { ClientModule } from './components/client/client.module';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BannerComponent } from './components/banner/banner.component';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';
import { LoginComponent } from './components/login/login.component';
import { LoginService } from './components/login/login.service';
import { ContactUsComponent } from './components/contactus/contactus.component';
import { SignUpComponent } from './components/signup/signup.component';
import { SignupService } from './components/signup/signup.service';
import { AuthGuard } from './services/loginAuthGuard';


const appRoutes: Routes = [
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
	{ path: 'home', component: HomeComponent },
	{ path: 'services', component: ServicesComponent },
	{ path: 'login', component: LoginComponent,  canActivate: [AuthGuard], },
	{ path: 'contactus', component: ContactUsComponent },
	{ path: 'signup', component: SignUpComponent,  canActivate: [AuthGuard], },
];


@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		FooterComponent,
		BannerComponent,
		HomeComponent,
		ServicesComponent,
		LoginComponent,
		ContactUsComponent,
		SignUpComponent
	],
	imports: [
		BrowserModule, RouterModule.forRoot(appRoutes), FormsModule, HttpClientModule, ClientModule
	],
	providers: [InterceptService,
		{
			provide: HTTP_INTERCEPTORS,
			useClass: InterceptService,
			multi: true
		}, LoginService, SignupService, AuthGuard],
	bootstrap: [AppComponent]
})
export class AppModule { }
