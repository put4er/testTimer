import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rock-paper-scessors',
  templateUrl: './rock-paper-scessors.component.html',
  styleUrls: ['./rock-paper-scessors.component.css']
})
export class RockPaperScessorsComponent implements OnInit {
  opponent = ['../../../assets/rock%20papper%20sces/rockR.JPG',
    '../../../assets/rock%20papper%20sces/papperR.JPG',
    '../../../assets/rock%20papper%20sces/scesR.JPG'];
  opponentAnswer;
  res;
  result;
  rockR;
  paperR;
  scessorsR;
  constructor() { }

  ngOnInit() {
    this.rockR = this.opponent[0];
    this.paperR = this.opponent[1];
    this.scessorsR = this.opponent[2];
  }
  Choose(answer) {
    const rand = Math.floor(Math.random() * Math.floor(3));
    this.opponentAnswer = this.opponent[rand];
    if (this.opponentAnswer === this.rockR) {
      this.res = 'rock';
    } else {
      if (this.opponentAnswer === this.paperR) {
      this.res = 'paper';
      } else {
        this.res = 'scessors';
      }
    }
    if (answer === this.res) {
      this.result = 'Draw';
    } else {
      if (((answer === 'rock') && (this.res === 'paper')) || ((answer === 'paper') && (this.res === 'scessors')) ||
        (answer === 'scessors') && (this.res === 'rock')) {
        this.result = 'Right is winner';
      } else {
        this.result = 'Left is winner';
      }
    }
  }
}
