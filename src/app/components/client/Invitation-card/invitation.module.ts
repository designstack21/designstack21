import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

import { MatModule } from '../mat.module';


import { InviationCardListComponent } from './invitation-card-list/invitation-card-list.component';

export const invitationRoutes:Routes = [
    { path: 'invitationcardlist', component: InviationCardListComponent }
];

@NgModule({
    imports: [
        MatModule
    ],
    exports: [InviationCardListComponent],
    declarations: [InviationCardListComponent],
    providers: [],
})
export class InvitaionModule { }
