import { Component } from '@angular/core';

@Component({
    selector: 'home',
    templateUrl: './app/home/home.component.html'
})

export class HomeComponent {
    infoItems: any[] =
    [
        {
            title: "item 1",
            description: "asdfasdfsaf"
        },
        {
            title: "item 2",
            description: "fasdfsafs dfas dfa s"
        }
    ]
}