import { Component,OnInit } from '@angular/core';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-overview-page',
  templateUrl: './overview-page.component.html',
  styleUrl: './overview-page.component.scss'
})
export class OverviewPageComponent implements OnInit{

products = [
  {id: 1, name: 'aze', price: 100},
  {id: 2, name: 'zae', price: 200},
  {id: 3, name: 'Product 3', price: 300},
  {id: 4, name: 'Product 4', price: 400},
  {id: 5, name: 'Product 5', price: 500},
  {id: 6, name: 'Product 6', price: 600},
  {id: 7, name: 'Product 7', price: 700},
  {id: 8, name: 'Product 8', price: 800},
  {id: 9, name: 'Product 9', price: 900},
  {id: 10, name: 'Product 10', price: 1000},
  {id: 11, name: 'Product 11', price: 1100},
  {id: 12, name: 'Product 12', price: 1200},
  {id: 13, name: 'Product 13', price: 1300},
  {id: 14, name: 'Product 14', price: 1400},
  {id: 15, name: 'Product 15', price: 1500},
  {id: 16, name: 'Product 16', price: 1600},
  {id: 17, name: 'Product 17', price: 1700},
  {id: 18, name: 'Product 18', price: 1800},
  {id: 19, name: 'Product 19', price: 1900},
  {id: 20, name: 'Product 20', price: 2000},
  {id: 21, name: 'Product 21', price: 2100},
  {id: 22, name: 'Product 22', price: 2200},
  {id: 23, name: 'Product 23', price: 2300},
  {id: 24, name: 'Product 24', price: 2400},

];
first = 0;

rows = 10;
data: any;
options: any;

ngOnInit() {
  const documentStyle = getComputedStyle(document.documentElement);
  const textColor = documentStyle.getPropertyValue('--text-color');

  this.data = {
      labels: [],
      datasets: [
          {
              data: [50],
              backgroundColor: ["transparent"],
              hoverBackgroundColor: ["#bec2be"]
          }
      ]
  };


  this.options = {
      cutout: '60%',
      plugins: {
          legend: {
           
              labels: {
                  color: textColor
              }
          }
      }
  };
  console.log(this.data['datasets'][0]['data']);
}
next() {
  this.first = this.first + this.rows;
}

prev() {
  this.first = this.first - this.rows;
}

reset() {
  this.first = 0;
}

pageChange(event: { first: number; rows: number; }) {
  this.first = event.first;
  this.rows = event.rows;
}

isLastPage(): boolean {
  return this.products ? this.first === this.products.length - this.rows : true;
}

isFirstPage(): boolean {
  return this.products ? this.first === 0 : true;
}

}
