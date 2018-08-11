import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import {SlideshowModule} from 'ng-simple-slideshow';

import { MatModule } from '../mat.module';


import { InviationCardListComponent } from './invitation-card-list/invitation-card-list.component';
import { CardComponent } from './card/card.component';
import { CardDetailsComponent } from './card-details/card-details.component';

export const invitationRoutes: Routes = [
    { path: 'invitationcardlist', component: InviationCardListComponent },
    { path: 'carddetails/:id', component: CardDetailsComponent }
];

@NgModule({
    imports: [
        BrowserModule, MatModule, SlideshowModule, RouterModule
    ],
    exports: [InviationCardListComponent],
    declarations: [InviationCardListComponent, CardComponent, CardDetailsComponent],
    providers: [],
})
export class InvitaionModule { }
