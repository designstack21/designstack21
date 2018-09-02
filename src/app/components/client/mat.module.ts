import { NgModule } from '@angular/core';

import {
    MatDatepickerModule, MatFormFieldModule, MatNativeDateModule, MatInputModule, MatToolbarModule,
    MatButtonModule, MatIconModule, MatMenuModule, MatSidenavModule, MatCardModule, MatSelectModule,
    MatPaginatorModule, MatTabsModule, MatTooltipModule, MatStepperModule, MatCheckboxModule
} from '@angular/material';


@NgModule({
    imports: [MatDatepickerModule, MatFormFieldModule, MatNativeDateModule, MatInputModule, MatToolbarModule,
        MatButtonModule, MatIconModule, MatMenuModule, MatSidenavModule, MatCardModule, MatSelectModule,
        MatPaginatorModule, MatTabsModule, MatTooltipModule, MatStepperModule, MatCheckboxModule],

    exports: [MatDatepickerModule, MatFormFieldModule, MatNativeDateModule, MatInputModule, MatToolbarModule,
        MatButtonModule, MatIconModule, MatMenuModule, MatSidenavModule, MatCardModule, MatSelectModule,
        MatPaginatorModule, MatTabsModule, MatTooltipModule, MatStepperModule, MatCheckboxModule],
    providers: [],
})
export class MatModule { }
