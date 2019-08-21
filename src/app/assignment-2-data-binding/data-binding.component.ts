import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-data-binding',
    templateUrl: './data-binding.component.html'
})
export class DataBindingComponent implements OnInit {
    username = '';
    enableButton = false;

    ngOnInit() {}

    save() {
        this.username = ''
    }

}