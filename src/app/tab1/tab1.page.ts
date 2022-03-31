import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  public num1: number;
  public num2: number;
  public num3: number;

  result() {
    if (this.num1 == null || this.num2 == null) {
      alert('Ada inputan yang kosong');
      this.num1 = null;
      this.num2 = null;
      this.num3 = null;
    }
    this.num3 = this.num1 * this.num2;
  }
  clear() {
    this.num1 = null;
    this.num2 = null;
    this.num3 = null;
  }

  constructor() {}
}
