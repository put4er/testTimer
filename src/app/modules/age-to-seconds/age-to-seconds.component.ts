import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-age-to-seconds',
  templateUrl: './age-to-seconds.component.html',
  styleUrls: ['./age-to-seconds.component.css']
})
export class AgeToSecondsComponent implements OnInit {
  seconds;
  constructor() { }

  ngOnInit() {
  }
  Convert(age) {
    this.seconds = age * 365 * 24 * 60 * 60;
  }
}
