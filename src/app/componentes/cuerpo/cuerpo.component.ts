import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.css']
})
export class CuerpoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  public imagenes=[
    {
    url: '/assets/img/Halo.png',
    descripcion: "Cañon de largo calibre de potencia de rango 5, Solo es usado por robots de peso mayor."
    } , 
    {
    url: '/assets/img/Storm1.png',
    descripcion: "Cañon lacer de daño impresionante contra pequeñas unidades."
    } , 
    {
    url: '/assets/img/Thunder.png',
    descripcion: "Cañon que se asemeja a una escopeta pero más enorme y más potente."
    }, 
    {
    url: '/assets/img/Scourge.png',
    descripcion: "Arma lacer de avanza tecnologia que se usa para amenazas mayores de 5."
    }, 
    {
    url: '/assets/img/Redeemer.png',
    descripcion: "Cañon de rayo potente, si el enemigo se pone en su camino, este explotado."
    },
    {
    url:'/assets/img/Zeus.png',
    descripcion:"Un cañon de rayos que le hace honor asu nombre,bueno un poco pero no. Lanza rayos a los objetivos para  acabar con ellos."
    }                  
  ];
}