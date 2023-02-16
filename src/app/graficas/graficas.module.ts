import { GraficasRoutingModule } from './graficas-routing.module';
import { NgModule } from '@angular/core';

import { NgChartsModule, NgChartsConfiguration } from 'ng2-charts';

import { BarrasComponent } from './pages/barras/barras.component';
import { BarrasDobleComponent } from './pages/barras-doble/barras-doble.component';
import { CommonModule } from '@angular/common';
import { DonaComponent } from './pages/dona/dona.component';
import { DonaHTTPComponent } from './pages/dona-http/dona-http.component';
import { GraficaBarraComponent } from './components/grafica-barra/grafica-barra.component';
import { GraficaDonaComponent } from './components/grafica-dona/grafica-dona.component';
import { GraficaDonaHttpComponent } from './components/grafica-dona-http/grafica-dona-http.component';


@NgModule({
  declarations: [
    BarrasComponent,
    BarrasDobleComponent,
    DonaComponent,
    DonaHTTPComponent,
    GraficaBarraComponent,
    GraficaDonaComponent,
    GraficaDonaHttpComponent
  ],
  imports: [
    CommonModule,
    GraficasRoutingModule,
    NgChartsModule,
  ],
  providers: [
    { provide: NgChartsConfiguration, useValue: { generateColors: false }}
  ]
})
export class GraficasModule { }
