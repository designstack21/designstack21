import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from "@angular/flex-layout";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome'


import { DashboardComponent } from './dashboard/dashboard.component';
import { OrderComponent } from './order/order.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { LogoDesignComponent } from './logo-design/logo-design.component';


import { DashboardAuthGuard } from '../../services/dashboardAuthGuard';


import {
    MatDatepickerModule, MatFormFieldModule, MatNativeDateModule, MatInputModule, MatToolbarModule,
    MatButtonModule, MatIconModule, MatMenuModule, MatSidenavModule
} from '@angular/material';


const appRoutes: Routes = [
    {
        path: 'dashboard', component: DashboardComponent,
        // canActivate: [DashboardAuthGuard],
        children: [
            {
                path: 'order', component: OrderComponent
            },
            {
                path: 'logodesign', component: LogoDesignComponent
            }
        ]
    },
];

@NgModule({
    declarations: [
        DashboardComponent, OrderComponent, NavbarComponent, SidenavComponent, LogoDesignComponent
    ],
    imports: [
        RouterModule.forChild(appRoutes), BrowserAnimationsModule, MatDatepickerModule,
        MatFormFieldModule, MatNativeDateModule,
        MatInputModule, MatToolbarModule, MatButtonModule,
        FlexLayoutModule, MatSidenavModule, MatIconModule, MatMenuModule,
        Angular2FontawesomeModule
    ],
    providers: [DashboardAuthGuard],
})
export class ClientModule { }
