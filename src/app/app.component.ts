import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ShowingComponent } from './showing/showing.component';
import { CalculateBlahBlahComponent } from './calculate-blah-blah/calculate-blah-blah.component';
import { AnnualData } from './calc.model';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CalculateBlahBlahComponent,
    ShowingComponent,
    NgFor,
    NgIf,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Oct9_Udemy_Section4';

  annualDatas: AnnualData[] = [];

  onCalculate(data: AnnualData[]) {
    this.annualDatas = [...this.annualDatas, ...data];
    console.log('parent' + data[0].interest);
  }
  get test() {
    return this.annualDatas;
  }
}
