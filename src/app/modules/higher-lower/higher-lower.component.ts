import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-higher-lower',
  templateUrl: './higher-lower.component.html',
  styleUrls: ['./higher-lower.component.css']
})
export class HigherLowerComponent implements OnInit {
  isLow: boolean;
  isHig: boolean;
  isReverse = true;
  noReverse = false;

  constructor() {
  }

  ngOnInit() {
  }

  hideLow() {
    this.isReverse = true;
    this.noReverse = false;
  }

  showLow() {
    this.isReverse = false;
    this.noReverse = true;
  }

  takeHig() {
    this.isHig = true;
    this.isLow = false;
  }

  takeLow() {
    this.isHig = false;
    this.isLow = true;
  }

  transformText(text) {
    if (this.isReverse) {
      // reverse
      return alert(text.split('').reverse().join(''));
    } else {
      if ((this.noReverse)) {
        // to uppercase
        if (this.isHig) {
          return alert(text.toUpperCase());
        } else {
          // to low case
          return alert(text.toLowerCase());
        }
      }
    }
  }
}
