import { NgModule } from '@angular/core';

import {
    MatDatepickerModule, MatFormFieldModule, MatNativeDateModule, MatInputModule, MatToolbarModule,
    MatButtonModule, MatIconModule, MatMenuModule, MatSidenavModule, MatCardModule, MatSelectModule,
    MatPaginatorModule, MatTabsModule, MatTooltipModule, MatStepperModule
} from '@angular/material';


@NgModule({
    imports:  [ MatDatepickerModule, MatFormFieldModule, MatNativeDateModule, MatInputModule, MatToolbarModule,
    MatButtonModule, MatIconModule, MatMenuModule, MatSidenavModule, MatCardModule, MatSelectModule,
    MatPaginatorModule, MatTabsModule, MatTooltipModule, MatStepperModule ],
    
    exports: [ MatDatepickerModule, MatFormFieldModule, MatNativeDateModule, MatInputModule, MatToolbarModule,
    MatButtonModule, MatIconModule, MatMenuModule, MatSidenavModule, MatCardModule, MatSelectModule,
    MatPaginatorModule, MatTabsModule, MatTooltipModule, MatStepperModule ],
    providers: [],
})
export class MatModule { }
