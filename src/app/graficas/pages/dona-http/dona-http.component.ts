import { Component } from '@angular/core';
import { GraficasService } from '../../services/graficas.service';
import { ChartData, ChartEvent, ChartType } from 'chart.js';


@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styleUrls: ['./dona-http.component.scss']
})
export class DonaHTTPComponent {
  
  constructor( private graficasService: GraficasService ){}

  ngOnInit(): void {
    this.graficasService.getUsuariosRedesSociales()
      .subscribe(res => {

        // const labels = Object.keys( res );
        // const values = Object.values( res );
        
        this.doughnutChartData={
          labels:Object.keys(res),
          datasets:[{data:Object.values(res)}]
        };
        

        // console.log(labels)
        // console.log(values)
      });

    
  }

  public doughnutChartLabels: string[] = [  ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      // { data: [ 350, 450, 100 ] },
    ]
  };
  public doughnutChartType: ChartType = 'doughnut';
 
 

  // events
  public chartClicked({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }
}
