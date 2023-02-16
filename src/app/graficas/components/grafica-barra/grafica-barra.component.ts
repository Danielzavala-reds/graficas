import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartData, ChartOptions, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styleUrls: ['./grafica-barra.component.scss']
})


export class GraficaBarraComponent implements OnInit {
  
  @Input() bubble: boolean = false;
  @Input() labels: string[] = [];
  
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
 
  public barChartOptions: ChartOptions = {
    responsive: true,
    
  };


public barChartType: ChartType = 'bar';

@Input () barChartData: ChartData<'bar'> = {
  labels: this.labels,
  datasets: [
    { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A', backgroundColor: '#3AFCFB', hoverBackgroundColor: 'red' },
    { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B', backgroundColor: '#5032D9', hoverBackgroundColor: 'red' },
    { data: [ 23, 8, 40, 110, 86, 27, 70 ], label: 'Series C', backgroundColor: '#F0436E', hoverBackgroundColor: 'red' },
  ],
};

constructor(){
}

ngOnInit(): void {
  // console.log(this.pie)
  
  (this.bubble) ? this.barChartType = 'bubble' : '';
  
}

public randomize(): void {
  // Only Change 3 values
  this.barChartData.datasets[0].data = [
    Math.round(Math.random() * 100),
    Math.round(Math.random() * 100),
    Math.round(Math.random() * 100),
    Math.round(Math.random() * 100),
    Math.round(Math.random() * 100),
    Math.round(Math.random() * 100),
    Math.round(Math.random() * 100),
    ];
   
    this.chart?.update();

    this.barChartData.datasets[1].data = [
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      ];
      
      this.chart?.update();

      this.barChartData.datasets[2].data = [
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        ];
        
        this.chart?.update();
  }

}
