import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-ctn-invitaion-card-list',
    templateUrl: 'invitation-card-list.component.html',
    styleUrls: ['./invitation-card-list.component.css']
})

export class InviationCardListComponent implements OnInit {
    cardType = [
        {
            id: 1,
            title: 'All'
        },
        {
            id: 2,
            title: 'Wedding card'
        },
        {
            id: 3,
            title: 'Engagement card'
        },
        {
            id: 4,
            title: 'Inauguration Card'
        }
    ];
    constructor() { }

    ngOnInit() { }
}
