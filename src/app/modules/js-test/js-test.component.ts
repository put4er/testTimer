import { Component, OnInit } from '@angular/core';
import {Pixel} from './pix';

@Component({
  selector: 'app-js-test',
  templateUrl: './js-test.component.html',
  styleUrls: ['./js-test.component.css'],
})

export class JsTestComponent implements OnInit {
  myImage: [{ img: string }];
  delStrTry;
 delStr: Pixel[];

  multi: number[][];
  multiStr = [
    ['q', 'q', 'q', 'q', 'q', 'q'],
    ['q', 'q', 'q', 'q', 'q', 'q'],
    ['q', 'q', 'q', 'q', 'q', 'q'],
    ['q', 'q', 'q', 'q', 'q', 'q'],
    ['q', 'q', 'q', 'q', 'q', 'q'],
    ['q', 'q', 'q', 'q', 'q', 'q'],
    ['q', 'q', 'q', 'q', 'q', 'q'],
    ];
  events;
  try: false;
  i;
  j;
  q = '../../../assets/img/1.JPG';
  w = '../../../assets/img/2.JPG';
  e = '../../../assets/img/3.JPG';
  r = '../../../assets/img/4.JPG';
  constructor() {
  }

  ngOnInit() {
  }

  tryimg() {
    this.multi = Array.from({length: 7}, () => Array.from({length: 6},
      () => Math.floor(Math.random() * 4 + 1)));
    for (let i = 0; i < 7; i++) {
      for (let j = 0; j < 6; j++) {
        if (this.multi[i][j] === 1) {
          this.events = this.q;
        } else {
          if (this.multi[i][j] === 2) {
            this.events = this.w;
          } else {
            if (this.multi[i][j] === 3) {
              this.events = this.e;
            } else {
              if (this.multi[i][j] === 4) {
                this.events = this.r;
              }
            }
          }
        }
        this.multiStr[i][j] = this.events;
      }
    }
    // console.log(this.multi);
  }
  take(i, j) {
    this.delStrTry = this.multiStr[i][j];
    this.delStr.push({item: this.delStrTry, x: i, y: j});
    console.log(this.delStr);
    this.checkAnother(i, j);
    console.log(this.delStr);
  }
  checkAnother(i, j) {
    if ((i - 1 > 0) && (this.multiStr[i - 1][j] === this.delStrTry)) {
      this.delStr.push({item: this.multiStr[i - 1][j], x: i - 1, y: j});
    }
    }
}

