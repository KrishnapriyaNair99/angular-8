import { Component, Input, OnInit, OnChanges,SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.scss']
})
export class ServerElementComponent implements OnInit, OnChanges {
  @Input() element: {type: string, name: string, content: string};
  @Input() name: string;

  constructor() {
    console.log('constructor called!!!');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnCHnages Called!!!');
    console.log('--------------', changes);
  }

  ngOnInit() {
    console.log('ngOnInit called');
  }
}
