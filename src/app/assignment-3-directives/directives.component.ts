import { Component } from '@angular/core';

@Component({
    selector: "app-directive",
    templateUrl: './directives.component.html',
    styles:[`
     .text-color {
         color: white;
     }`]
})
export class DirectivesComponent {
    show: boolean;
    logging = [];

    toggleData() {
        this.show = !this.show;
        // this.logging.push(this.logging.length + 1);
        this.logging.push(new Date());
    }
}