import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { OrderComponent } from './order/order.component';
import { NavbarComponent } from './navbar/navbar.component';


import { DashboardAuthGuard } from '../../services/dashboardAuthGuard';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatNativeDateModule, MatInputModule, MatToolbarModule , MatButtonModule} from '@angular/material';

const appRoutes: Routes = [
{
path: 'dashboard', component: DashboardComponent,
// canActivate: [DashboardAuthGuard],
children: [
{
path: 'order', component: OrderComponent
}
]
},
];

@NgModule({
declarations: [
DashboardComponent, OrderComponent, NavbarComponent
],
imports: [
RouterModule.forChild(appRoutes), BrowserAnimationsModule , MatDatepickerModule, MatFormFieldModule, MatNativeDateModule,
MatInputModule, MatToolbarModule, MatButtonModule
],
providers: [DashboardAuthGuard],
})
export class ClientModule { }
