import { Component } from '@angular/core';

@Component({
    template: '<h3>{{pageTitle}}</h3>'
})
export class AboutComponent {
    public pageTitle: string = "About this site";
}