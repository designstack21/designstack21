import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent implements OnInit {
imageSources = [
        './assets/img/slider/1.jpg',
        './assets/img/slider/2.jpg',
        './assets/img/slider/3.jpg',
        './assets/img/slider/4.jpg',
    ];
  constructor() { }

  ngOnInit() {
  }

}
