import { window } from 'rxjs/internal/operators';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cnt-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
	collapse = false;
  constructor() { }
  ngOnInit() {
  }
  collapseSideNav(){
	this.collapse = !this.collapse;
  }
}
