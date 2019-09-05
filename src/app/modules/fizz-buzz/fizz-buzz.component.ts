import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-fizz-buzz',
  templateUrl: './fizz-buzz.component.html',
  styleUrls: ['./fizz-buzz.component.css']
})
export class FizzBuzzComponent implements OnInit {
  array = [];

  constructor() {
  }

  ngOnInit() {
  }

  Start(q, w) {
    this.array = [];
    for (let i = 1; i < 101; i++) {
      if ((i % q === 0) && (i % w === 0)) {
        this.array.push('FizzBuzz');
       // break;
      } else {
        if (i % q === 0) {
          this.array.push('Fizz');
        } else {
          if (i % w === 0) {
            this.array.push('Buzz');
          } else {
            this.array.push(i);
          }
        }
      }
    }
  }
}
