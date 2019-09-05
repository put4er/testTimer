import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-encryption-and-decription',
  templateUrl: './encryption-and-decription.component.html',
  styleUrls: ['./encryption-and-decription.component.css']
})
export class EncryptionAndDecriptionComponent implements OnInit {
  key = 'this is key';
  AsciKey = [];
  AsciText = [];
  ConvertText = '';
  AsciDeconvertText = [];
  DeconvertText = '';
  constructor() { }

  ngOnInit() {
    this.Key();
  }
  Convert(text) {
    this.AsciText = [];
    let j = 0;
    for (let i = 0; i < text.length; i++) {
      if (j < this.AsciKey.length) {
        this.AsciText.push(text.charCodeAt(i) + this.AsciKey[j]);
      } else {
        j = 0;
        this.AsciText.push(text.charCodeAt(i) + this.AsciKey[j]);
      }
      j++;
    }
    this.ConvertText = String.fromCharCode.apply(null, this.AsciText);
   /* for (let i = 0; i < this.AsciText.length; i++) {
     console.log(this.AsciText[i]);
      this.ConvertText.fromCharCode(this.AsciText[i]);
    }*/
  }
  DeConvert(text) {
    this.AsciDeconvertText = [];
    let j = 0;
    for (let i = 0; i < text.length; i ++) {
      if (j < this.AsciKey.length) {
        this.AsciDeconvertText.push(text.charCodeAt(i) - this.AsciKey[j]);
      } else {
        j = 0;
        this.AsciDeconvertText.push(text.charCodeAt(i) - this.AsciKey[j]);
      }
      j++;
    }
    this.DeconvertText = String.fromCharCode.apply(null, this.AsciDeconvertText);
  }
  Key() {
    for (let i = 0; i < this.key.length; i++) {
      this.AsciKey.push(this.key.charCodeAt(i));
    }
    console.log(this.AsciKey);
  }
}
