import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  entry: number;
  stopLoss: number;

  positionSize: number;
  positionRisk: number;

  leverage: number;

  constructor() {}

  onSubmit() {
    let risk;
    if (this.entry > this.stopLoss) {
      risk = this.entry - this.stopLoss;
    } else {
      risk = this.stopLoss - this.entry;
    }

    const riskPercentage = risk / this.entry;
    const equityRisk = this.positionRisk / this.positionSize;
    this.leverage = Math.round(equityRisk / riskPercentage);
  }
}
