import { Component, OnInit } from '@angular/core';
import {listProducts} from '../../modules/list-Products/listProducts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products = listProducts;
  constructor() {
  }

  ngOnInit() {
  }

}
