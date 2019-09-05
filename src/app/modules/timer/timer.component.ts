import {Component} from '@angular/core';


@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})


export class TimerComponent {
  hours: any = '00';
  minutes: any = '00';
  seconds: any = '00';
  counter: number;
  timer;
  alive = false;
  startText = 'Start';
  waitR = true;

  constructor() {
  }
  // запуск таймера
  startTimer() {
    this.waitR = false;
    this.alive = !this.alive;
    if (this.alive) {
      this.startText = 'Stop';
      const startTime = Date.now() - (this.counter || 0);
      this.timer = setInterval(() => {
        this.counter = Date.now() - startTime;
        this.hours = Math.floor(this.counter / 3600000000);
        this.minutes = Math.floor(this.counter / 60000);
        this.seconds = Math.floor(Math.floor(this.counter % 60000) / 1000).toFixed(0);
        if ((this.hours) < 10) {
          this.hours = '0' + this.hours;
        } else {
          this.hours = '' + this.hours;
        }
        if ((this.minutes) < 10) {
          this.minutes = '0' + this.minutes;
        } else {
          this.minutes = '' + this.minutes;
        }
        if ((this.seconds) < 10) {
          this.seconds = '0' + this.seconds;
        } else {
          this.seconds = '' + this.seconds;
        }
      });
    } else {
      this.alive = false;
      this.startText = 'Start';
      this.counter = undefined;
      clearInterval(this.timer);
    }
  }
  // зупинка таймера
  Wait() {
    if (this.startText === 'Start') {
      this.waitR = true;
      return;
    }
    if (this.alive) {
        clearInterval(this.timer);
        this.alive = false;
      } else {
        this.startTimer();
      }
  }
  // ресет таймера
  clearTimer() {
    this.alive = false;
    this.startText = 'Start';
    this.counter = undefined;
    this.hours = '00';
    this.seconds = '00';
    this.minutes = '00';
    clearInterval(this.timer);
  }
}
