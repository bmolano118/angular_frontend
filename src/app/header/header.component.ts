import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],

    providers: [
        Location, {
            provide: LocationStrategy,
            useClass: PathLocationStrategy
        }
    ]
})
export class HeaderComponent implements OnInit {
    location: any;
    layoutClass: string;
    username: string = '';

    constructor(
        private router: Router,
        location: Location,
    ) {
        this.router.events.subscribe((ev) => {
            if (ev instanceof NavigationEnd) {
                this.location = location.path();
                if (this.location == '/demo-3') {
                    this.layoutClass = 'navbar-style-two';
                } else {
                    this.layoutClass = '';
                }
            }
        });
    }

    ngOnInit() {
        console.log(localStorage.getItem('ref:username'));
    }

    ngAfterViewInit(){
        console.log('ref username', localStorage.getItem('ref:username'));
    }

    login() {
        this.username = localStorage.getItem('ref:username');
        window.location.href = 'http://app.share2riches.com/#/authentication/ref/' + this.username;
    }

}
