import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LogoDesignComponent } from './logo-design.component';
import { Routes } from '@angular/router';
import { MatModule } from '../mat.module';
import { AngularEditorModule } from '@kolkov/angular-editor';


export const logoDesignRoutes: Routes = [
	{ path: 'logodesign', component: LogoDesignComponent }
];

@NgModule({
	imports: [
		MatModule, FormsModule, ReactiveFormsModule, AngularEditorModule
	],
	declarations: [
		LogoDesignComponent
	],
	exports: [LogoDesignComponent],
	providers: [],
})

export class LogoDesignModule { }
