import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',  //---->>> component selector as element
  // selector: '[app-servers]', ---->>> selector as attribute
  // selector: '.app-servers', //selector as class
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.sass']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverStatus = "No server created yet !!!"
  serverCreated = false;
  event = 'default';
  servers = ['testserver', 'testserver 2'];

  constructor() {
    setTimeout(() => this.allowNewServer = true ,2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = false;
    this.servers.push(this.event);
    this.serverStatus = "Server created! The name is " + this.event;
  }

  onUpdateServer(event: Event) {
    this.event = (<HTMLInputElement>event.target).value;
  }

}
