import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.scss']
})
export class GameControlComponent implements OnInit {
  interval;
  lastNumber = 0;
  @Output() firedInterval = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  onStartGame() {
    this.interval = setInterval(() => {
      this.firedInterval.emit(this.lastNumber + 1);
      this.lastNumber++;
    },1000);
  }

  onPauseGame() {
    clearInterval(this.interval);
  }

}
