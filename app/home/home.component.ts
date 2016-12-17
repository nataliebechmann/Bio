import { Component, OnInit } from '@angular/core';

declare const jQuery;
declare const SC;

@Component({
    selector: 'home',
    templateUrl: './app/home/home.component.html'
})

export class HomeComponent implements OnInit {

    private setHasShownMusicStartModal(value: boolean) {
        localStorage.setItem("hasShownMusicStartModal", value + "")
    }

    private hasShownMusicStartModal() {
        return localStorage.getItem("hasShownMusicStartModal") == "true";
    }

    infoItems: any[] = [
        {
            title: "item 1",
            description: "asdfasdfsaf"
        },
        {
            title: "item 2",
            description: "fasdfsafs dfas dfa s"
        }
    ]

    ngOnInit() {
        var self = this;
        setTimeout(function () {
            if (!self.hasShownMusicStartModal()) {
                self.showMusicStartModal();
            }
        }, 4000);
    }

    showMusicStartModal() {
        jQuery('.ui.modal').modal('show');
        this.setHasShownMusicStartModal(true);
    }

    play() {

    }
}