import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { OrderComponent } from './order/order.component';
import { DashboardAuthGuard } from '../../services/dashboardAuthGuard';

const appRoutes: Routes = [
{
path: 'dashboard', component: DashboardComponent,
canActivate: [DashboardAuthGuard],
children: [
{
path: 'order', component: OrderComponent
}
]
},
];

@NgModule({
declarations: [
DashboardComponent, OrderComponent
],
imports: [
RouterModule.forChild(appRoutes),
],
providers: [DashboardAuthGuard],
})
export class ClientModule { }
