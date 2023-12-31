import { Component, OnInit } from '@angular/core';
import { Table } from 'primeng/table';
import { TransactionService } from '../service/transaction.service';
import { Transaction } from '../entitiy/Transaction';

@Component({
  selector: 'app-overview-page',
  templateUrl: './overview-page.component.html',
  styleUrl: './overview-page.component.scss',
})
export class OverviewPageComponent implements OnInit {
  constructor(private httpservice: TransactionService) {}
  transactions!: Transaction[];
  first = 0;

  rows = 10;
  data: any;
  options: any;

  ngOnInit() {
    this.httpservice.allTransactions().subscribe((data) => {
      this.transactions = data;
    });
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');

    this.data = {
      labels: this.getLabels(),
      datasets: [
        {
          data: this.getAmounts(),
          backgroundColor: this.getColors(),
          hoverBackgroundColor: ['#bec2be'],
        },
      ],
    };

    this.options = {
      cutout: '60%',
      plugins: {
        legend: {
          labels: {
            color: textColor,
          },
        },
      },
    };
    console.log(this.data['datasets'][0]['data']);
  }
  clear(table: Table) {
    table.clear();
  }

  isFirstPage(): boolean {
    return this.transactions ? this.first === 0 : true;
  }
  getLabels(): string[] {
    const categories: string[] = [];
    if (this.transactions) {
      this.transactions.forEach((transaction) => {
        if (!categories.includes(transaction.category.name)) {
          categories.push(transaction.category.name);
        }
      });
    }
    return categories;
  }

  getTotalAmountByLabel(label: string): number {
    let totalAmount = 0;
    if (this.transactions) {
      this.transactions.forEach((transaction) => {
        if (transaction.category.name === label) {
          totalAmount += transaction.type
            ? transaction.amount
            : -transaction.amount;
        }
      });
    }
    return totalAmount;
  }

  // create a list of amounts that for each label, get the total amount according to the previous function
  getAmounts(): number[] {
    const amounts: number[] = [];
    if (this.transactions) {
      this.getLabels().forEach((label) => {
        amounts.push(this.getTotalAmountByLabel(label));
      });
    }
    return amounts;
  }
  //create a list that finds the corresponding category for each label and creates a list of colors
  getColors(): string[] {
    const colors: string[] = [];
    if (this.transactions) {
      this.getLabels().forEach((label) => {
        this.transactions.forEach((transaction) => {
          if (transaction.category.name === label) {
            colors.push(transaction.category.color);
          }
        });
      });
    }
    return colors;
  }
}
