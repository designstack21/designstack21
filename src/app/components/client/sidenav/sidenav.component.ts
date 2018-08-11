import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-ctn-sidenav',
    styleUrls: ['./sidenav.component.css'],

    templateUrl: 'sidenav.component.html'
})

export class SidenavComponent implements OnInit {
    constructor() { }
    menuList = [{
        title: 'menu 1',
        icon: 'icon',
        path: '/order',
        subMenu: [
            {
                title: 'menu 2',
                icon: 'icon',
                path: '/order'
            },
            {
                title: 'menu 3',
                icon: 'icon',
                path: '/order'
            }

        ]
    },
    {
        title: 'menu 2',
        icon: 'icon',
        path: '/order',
        subMenu: [
            {
                title: 'menu 2',
                icon: 'icon',
                path: '/order'
            },
            {
                title: 'menu 3',
                icon: 'icon',
                path: '/order'
            }
        ]
    },
    {
        title: 'menu 3',
        icon: 'icon',
        path: '/order'
    }];
    ngOnInit() { }
    opneMenu(menu) {
            menu.active = !menu.active;

    }
}
