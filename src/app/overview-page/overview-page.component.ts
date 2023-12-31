import { Component, OnInit } from '@angular/core';
import { Category } from '../entitiy/category';
import { CategoryService } from '../service/category.service';

@Component({
  selector: 'app-overview-page',
  templateUrl: './overview-page.component.html',
  styleUrl: './overview-page.component.scss',
})
export class OverviewPageComponent implements OnInit {
  constructor(private httpservice: CategoryService) {}
  data: any;
  options: any;

  Category!: Category;
  ngOnInit() {
    let textColor;
    console.log('hello');
    this.httpservice.getCategoryById(1).subscribe((data) => {
      this.Category = data;
      textColor = this.Category.color;
    });

    // const documentStyle = getComputedStyle(document.documentElement);
    // const textColor = documentStyle.getPropertyValue('--text-color');
    this.data = {
      labels: [],
      datasets: [
        {
          data: [50],
          //   backgroundColor: ['transparent'],
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
}
