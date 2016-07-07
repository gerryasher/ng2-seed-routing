import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';


// additional imports

@Component({
    selector: 'gasher-app',
    template: `
        <h1>{{pageTitle}}</h1>
        <nav>
            <a [routerLink]="['/home']">Home</a>
            <a [routerLink]="['/about']">About</a>
            <a [routerLink]="['/contact']">Contact</a>
        </nav>
        <router-outlet></router-outlet>
    ` ,
    directives: [ROUTER_DIRECTIVES],
    providers: []
})
export class AppComponent {
    pageTitle: string = 'Router Seed App';
}
