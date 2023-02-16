import { Component, Input } from '@angular/core';
import { ChartData } from 'chart.js';


type Theme = 'light-theme' | 'dark-theme';

@Component({
  selector: 'app-barras',
  templateUrl: './barras.component.html',
  styleUrls: ['./barras.component.scss']
})
export class BarrasComponent {

  
  

  barChartData: ChartData<'bar'> = {
    labels: [ '2021', '2022', '2023', '2024', '2025'],
    datasets: [
      { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A', backgroundColor: '#3AFCFB', hoverBackgroundColor: 'red' },
      { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B', backgroundColor: '#5032D9', hoverBackgroundColor: 'red' },
      { data: [ 23, 8, 40, 110, 86, 27, 70 ], label: 'Series C', backgroundColor: '#F0436E', hoverBackgroundColor: 'red' },
    ],
  };


}

