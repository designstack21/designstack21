import { NgModule } from '@angular/core';
import { LogoDesignComponent } from './logo-design.component';
import { Routes } from '@angular/router';
import { MatModule } from '../mat.module';
import { QuillModule } from 'ngx-quill'

export const logoDesignRoutes: Routes = [
	{ path: 'logodesign', component: LogoDesignComponent }
];

@NgModule({
	imports: [
		MatModule, QuillModule
	],
	declarations: [
		LogoDesignComponent
	],
	exports: [LogoDesignComponent],
	providers: [],
})

export class LogoDesignModule { }
