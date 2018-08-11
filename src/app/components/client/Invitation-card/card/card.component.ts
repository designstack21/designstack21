import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'app-ctn-card',
    templateUrl: 'card.component.html',
    styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {
    constructor() { }
    imageSources = [
        './assets/img/slider/1.jpg',
        './assets/img/slider/2.jpg',
        './assets/img/slider/3.jpg',
        './assets/img/slider/4.jpg',
    ];
    ngOnInit() { }
}
