import { Component, OnInit } from '@angular/core';
import { Table } from 'primeng/table';
import { TransactionService } from '../service/transaction.service';
import { Transaction } from '../entitiy/Transaction';
import { formatDate } from '@angular/common';

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

  dataLine: any;
  optionsLine: any;

  ngOnInit() {
    this.httpservice.allTransactions().subscribe((data) => {
      this.transactions = data;
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
      this.dataLine = {
        labels: this.getLast7DaysAsString(),
        datasets: [
          {
            label: 'Income',
            fill: false,
            borderColor: documentStyle.getPropertyValue('--blue-500'),
            yAxisID: 'y',
            tension: 0.4,
            data: this.getTotalIncomeByDayLastWeek(),
          },
          {
            label: 'Expense',
            fill: false,
            borderColor: documentStyle.getPropertyValue('--red-500'),
            yAxisID: 'y1',
            tension: 0.4,
            data: this.getTotalExpenseByDayLastWeek(),
          },
        ],
      };
    });
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue(
      '--text-color-secondary',
    );
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.options = {
      cutout: '60%',
      aspectRatio: 1.2,
      plugins: {
        legend: {
          labels: {
            color: textColor,
          },
        },
      },
    };

    this.optionsLine = {
      stacked: false,
      maintainAspectRatio: false,
      aspectRatio: 0.8,
      plugins: {
        legend: {
          labels: {
            color: textColor,
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
          },
        },
        y: {
          type: 'linear',
          display: true,
          position: 'left',
          ticks: {
            color: '#0000ff',
          },
          grid: {
            color: surfaceBorder,
          },
        },
        y1: {
          type: 'linear',
          display: true,
          position: 'right',
          ticks: {
            color: '#ff0000',
          },
          grid: {
            drawOnChartArea: false,
            color: surfaceBorder,
          },
        },
      },
    };
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
          if (
            transaction.category.name === label &&
            colors.includes(transaction.category.color) === false
          ) {
            colors.push(transaction.category.color);
          }
        });
      });
    }
    return colors;
  }
  getTotalExpenseByDayLastWeek(): number[] {
    const result: number[] = Array(7).fill(0);

    const lastWeek = new Date();
    lastWeek.setDate(lastWeek.getDate() - 7);

    this.transactions
      .filter((transaction) => new Date(transaction.date) >= lastWeek)
      .forEach((transaction) => {
        const dayIndex = this.getDayIndex(new Date(transaction.date), lastWeek);
        if (!transaction.type) {
          // Only consider expenses
          result[dayIndex] += transaction.amount;
        }
      });
    console.log(result);
    return result;
  }
  getTotalIncomeByDayLastWeek(): number[] {
    const result: number[] = Array(7).fill(0);

    const now = new Date();
    const lastWeek = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() - 7,
    );

    this.transactions
      .filter((transaction) => new Date(transaction.date) >= lastWeek)
      .forEach((transaction) => {
        const dayIndex = this.getDayIndex(new Date(transaction.date), lastWeek);
        if (transaction.type) {
          result[dayIndex] += transaction.amount;
        }
      });

    return result;
  }
  private getDayIndex(date: Date, lastWeek: Date): number {
    const dayDiff = Math.floor(
      (date.getTime() - lastWeek.getTime()) / (24 * 60 * 60 * 1000),
    );
    return 6 - dayDiff; // 6 corresponds to the first day, 0 to the last day
  }
  getLast7DaysAsString(): string[] {
    const last7Days: string[] = [];
    const today = new Date();

    for (let i = 6; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(today.getDate() - i);
      const formattedDate = formatDate(date, 'yyyy-MM-dd', 'en-US');
      last7Days.push(formattedDate);
    }

    return last7Days;
  }
}
