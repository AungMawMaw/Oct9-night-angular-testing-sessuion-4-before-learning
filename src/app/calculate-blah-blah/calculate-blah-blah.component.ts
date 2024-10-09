import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AnnualData, CalculateInvest } from '../calc.model';

@Component({
  selector: 'app-calculate-blah-blah',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calculate-blah-blah.component.html',
  styleUrl: './calculate-blah-blah.component.css',
})
export class CalculateBlahBlahComponent {
  initialInvestment = '';
  annualInvestment = '';
  expectedReturn = '';
  duration = '';
  @Output() answer = new EventEmitter<AnnualData[]>();

  onSubmit() {
    const tmp: CalculateInvest = {
      initialInvestment: Number(this.initialInvestment),
      annualInvestment: Number(this.annualInvestment),
      expectedReturn: Number(this.expectedReturn),
      duration: Number(this.duration),
    };
    const tmp_ans = calculateInvestmentResults(tmp);
    // console.log(tmp_ans[0].interest);
    // return [...tmp_ans];
    this.answer.emit(tmp_ans);
  }
}

function calculateInvestmentResults(data: CalculateInvest) {
  const { initialInvestment, annualInvestment, expectedReturn, duration } =
    data;
  const annualData = [];
  let investmentValue = initialInvestment;

  for (let i = 0; i < duration; i++) {
    const year = i + 1;
    const interestEarnedInYear = investmentValue * (expectedReturn / 100);
    investmentValue += interestEarnedInYear + annualInvestment;
    const totalInterest =
      investmentValue - annualInvestment * year - initialInvestment;
    annualData.push({
      year: year,
      interest: interestEarnedInYear,
      valueEndOfYear: investmentValue,
      annualInvestment: annualInvestment,
      totalInterest: totalInterest,
      totalAmountInvested: initialInvestment + annualInvestment * year,
    });
  }

  return annualData;
}
