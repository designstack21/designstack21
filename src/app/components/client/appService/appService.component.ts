import { Component, OnInit } from '@angular/core';
import { AppSerceService } from './app-service.service'

@Component({
	selector: 'app-ctn-appservic',
	templateUrl: 'appService.component.html',
	styleUrls: ['./appService.component.css']
})

export class AppServiceComponent implements OnInit {
	services;
	constructor(private appSerceService: AppSerceService) {
		this.appSerceService.getServices().subscribe(res => {
			this.services = res;
		});
	}

	ngOnInit() { }
}
