import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class GraficasService {

  url = 'http://localhost:3000/grafica'
 

  constructor( private http: HttpClient ) { }

  getUsuariosRedesSociales() {
    delay(3000)
    return this.http.get(this.url)
  }


}
