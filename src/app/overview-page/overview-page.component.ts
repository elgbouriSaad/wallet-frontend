import { Component, OnInit } from '@angular/core';
import { Table } from 'primeng/table';
import { TransactionService } from '../service/transaction.service';
import { Transaction } from '../entitiy/transaction';

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
      labels: [],
      datasets: [
        {
          data: [50],
          backgroundColor: ['transparent'],
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
}
