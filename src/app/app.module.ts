import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BannerComponent } from './components/banner/banner.component';
import {  HomeComponent } from './components/home/home.component';
import {  ServicesComponent } from './components/services/services.component';
import {  LoginComponent } from './components/login/login.component';
import {  ContactUsComponent } from './components/contactus/contactus.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'login', component:  LoginComponent},
  { path: 'contactus', component:  ContactUsComponent},
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
    ContactUsComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
