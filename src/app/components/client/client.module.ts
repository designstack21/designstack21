import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';



import { DashboardComponent } from './dashboard/dashboard.component';
import { OrderComponent } from './order/order.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { AppServiceComponent } from './appService/appService.component';
import { AppSerceService } from './appService/app-service.service';


import { MatModule } from './mat.module';
import { InvitaionModule, invitationRoutes } from './Invitation-card/invitation.module';
import { LogoDesignModule, logoDesignRoutes } from './logo-design/logo-design.module';

import { DashboardAuthGuard } from '../../services/dashboardAuthGuard';


const appRoutes: Routes = [
    {
        path: 'dashboard', component: DashboardComponent,
        canActivate: [DashboardAuthGuard],
        children: [
            { path: '', redirectTo: 'service', pathMatch: 'full' },
            { path: 'service', component: AppServiceComponent, },
            { path: 'order', component: OrderComponent },
            ...invitationRoutes, ...logoDesignRoutes
        ]
    },
];

@NgModule({
    declarations: [
        DashboardComponent, OrderComponent, NavbarComponent, SidenavComponent,
        AppServiceComponent
    ],
    imports: [
        RouterModule.forChild(appRoutes), BrowserAnimationsModule,
        FlexLayoutModule, MatModule,
        Angular2FontawesomeModule, InvitaionModule, LogoDesignModule
    ],
    providers: [DashboardAuthGuard, AppSerceService],
})
export class ClientModule { }
