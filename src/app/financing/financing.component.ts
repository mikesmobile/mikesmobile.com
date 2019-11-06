import { Component } from '@angular/core';

@Component({
  selector: 'app-financing',
  templateUrl: './financing.component.html',
  styleUrls: ['./financing.component.sass']
})
export class FinancingComponent {
  totalCostInput: number;
  monthlyPayment: string = '';

  updateMonthly(event) {
    const newMonthlyPayment: number = event * 0.0198;
    if (isNaN(newMonthlyPayment)) {
      this.monthlyPayment = '';
    } else {
      this.monthlyPayment = newMonthlyPayment.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      });
    }
  }
}
