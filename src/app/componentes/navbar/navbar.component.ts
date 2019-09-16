import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  estado1 : boolean=false;
  estado2 : boolean=false;
  estado3 : boolean=false;
  public imagen = '/assets/img/descarga.jpg';
  public imagen2= '/assets/img/WarRobots_Cossack_Lookev_Front_001_WIP_JK.jpg';
  public imagen3= '/assets/img/WarRobots_Gepard_Lookev_Front_001_WIP_JK.jpg';
  public imagen4= '/assets/img/WarRobots_Raijin_Lookev_Front_003_WIP_JK.jpg';
  public imagen5= '/assets/img/robots.png';
    constructor() { }

    cambiarEstado1(){
      console.log();
      this.estado1 = !this.estado1;
    }
    cambiarEstado2(){
      console.log();
      this.estado2 = !this.estado2;
    }    cambiarEstado3(){
      console.log();
      this.estado3 = !this.estado3;
    }
  ngOnInit() {
  }  
}
