import { Component, OnInit } from '@angular/core';
import {firstNameList} from './firstNameList';
import {lastNameList} from './lastNameList';

@Component({
  selector: 'app-name-generator',
  templateUrl: './name-generator.component.html',
  styleUrls: ['./name-generator.component.css']
})
export class NameGeneratorComponent implements OnInit {
  listFirstName = firstNameList;
  listLastName = lastNameList;
  firstName = '';
  lastName = '';
  min1 = 1;
  max1 = this.listFirstName.length;
  max2 = this.listLastName.length;
  i;
  constructor() { }

  ngOnInit() {
  }

  random() {
    this.firstName = '';
    this.lastName = '';
    this.i = this.getRandomArbitrary( this.min1, this.max1);
    this.firstName += this.listFirstName[this.i - 1].name;
    this.i = this.getRandomArbitrary( this.min1, this.max2);
    this.lastName += this.listLastName[this.i - 1].name;
  }
  getRandomArbitrary(min , max) {
    return Math.round(Math.random() * (max - min) + min);
  }

}
