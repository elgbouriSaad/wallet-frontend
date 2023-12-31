import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-overview-page',
  templateUrl: './overview-page.component.html',
  styleUrl: './overview-page.component.scss'
})
export class OverviewPageComponent implements OnInit{
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
 

}
