import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-love-calc',
  templateUrl: './love-calc.component.html',
  styleUrls: ['./love-calc.component.css']
})
export class LoveCalcComponent implements OnInit {
  result;
  constructor() { }

  ngOnInit() {
  }
  getResult(f, s) {
    if ((f === '') || (s === '')) {
      alert('Введите имя!');
    } else {
      if ((f.length < 3) || (s.length < 3)) {
        alert('Имя должно быть больше!');
      } else {
        if ((!isNaN(f)) || (!isNaN(s))) {
          alert('Только буквы');
        }
      }
    }
    const rand = Math.floor(Math.random() * Math.floor(100));
    this.result = rand + '%';
  }
}
