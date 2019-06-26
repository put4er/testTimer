import {Component, OnDestroy} from '@angular/core';
import {interval, of} from 'rxjs';
import {map} from 'rxjs/operators';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})


export class TestComponent {
  mySub: Subscription;
  secondsCounter = interval(1000);
  hours: any = '00';
  minutes: any = '00';
  seconds: any = '00';
  counter: number;
  timer;
  alive = false;
  startText = 'Start';
  waitDisabled = true;
  constructor() {
  }

  // запуск таймера
  startTimer() {
    this.waitDisabled = false;
    this.alive = !this.alive;
    if (this.alive) {
      this.startText = 'Stop';
      const startTime = Date.now() - (this.counter || 0);
      this.mySub = this.secondsCounter.subscribe(() => {
        this.counter = Date.now() - startTime;
        const nums = of((this.counter / 3600000000));
        const nums1 = of((this.counter / 60000));
        const nums2 = of(((this.counter % 60000) / 1000));
        const result = nums2.pipe(map((val: number) => Math.floor(val)));
        result.subscribe(n => {
          if ((n) < 10) {
            this.seconds = '0' + n;
          } else {
            this.seconds = '' + n;
          }
        });
        const result2 = nums1.pipe(map((val: number) => Math.floor(val)));
        result2.subscribe(n => {
          if ((n) < 10) {
            this.minutes = '0' + n;
          } else {
            this.minutes = '' + n;
          }
        });
        const result3 = nums.pipe(map((val: number) => Math.floor(val)));
        result3.subscribe(n => {
          if ((n) < 10) {
            this.hours = '0' + n;
          } else {
            this.hours = '' + n;
          }
        });
      });
    } else {
      this.alive = false;
      this.startText = 'Start';
      this.counter = undefined;
      this.mySub.unsubscribe();
    }
  }

  // зупинка таймера
  Wait() {
    if (this.startText === 'Start') {
      this.waitDisabled = true;
      return;
    }
    if (this.alive) {
      this.mySub.unsubscribe();
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
    this.hours = '00',
      this.seconds = '00',
      this.minutes = '00';
    this.mySub.unsubscribe();
  }

}
