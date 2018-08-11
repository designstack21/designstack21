import { NgModule } from '@angular/core';

import {
    MatDatepickerModule, MatFormFieldModule, MatNativeDateModule, MatInputModule, MatToolbarModule,
    MatButtonModule, MatIconModule, MatMenuModule, MatSidenavModule, MatCardModule
} from '@angular/material';


@NgModule({
    imports:  [ MatDatepickerModule, MatFormFieldModule, MatNativeDateModule, MatInputModule, MatToolbarModule,
    MatButtonModule, MatIconModule, MatMenuModule, MatSidenavModule, MatCardModule ],
    exports: [ MatDatepickerModule, MatFormFieldModule, MatNativeDateModule, MatInputModule, MatToolbarModule,
    MatButtonModule, MatIconModule, MatMenuModule, MatSidenavModule, MatCardModule ],
    providers: [],
})
export class MatModule { }
