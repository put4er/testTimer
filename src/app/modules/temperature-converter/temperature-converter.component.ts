import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-temperature-converter',
  templateUrl: './temperature-converter.component.html',
  styleUrls: ['./temperature-converter.component.css']
})
export class TemperatureConverterComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }

  convert(c, k) {
    if ((c.value === '') && (k.value === '')) {
      alert('Введіть температуру!');
    }
    if ((c.value !== '') && (k.value !== '')) {
      alert('Введіть лише 1 вид температури!');
    }
    if ((c.value === '') && (k.value !== '')) {
      return c.value = k.value * 1 - 273.15;
    }
    if ((k.value === '') && (c.value !== '')) {
      return k.value = c.value * 1 + 273.15;
    }
  }
}
