import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo-design',
  templateUrl: './logo-design.component.html',
  styleUrls: ['./logo-design.component.css']
})
export class LogoDesignComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  saveLogoInfo(logoTitle: HTMLInputElement, logoCaption: HTMLInputElement) {
    console.log(logoTitle.value);
    console.log(logoCaption.value);
  }

}
