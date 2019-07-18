import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/providers/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  cartelera: any;
  populares: any;
  popularesNinos: any;

  constructor( public _ps: PeliculasService ) {
    this._ps.getCartelera().subscribe( (data: any) => this.cartelera = data );
    this._ps.getPopulares().subscribe( (data: any) => this.populares = data );
    this._ps.getPopularesNinos().subscribe( (data: any) => this.popularesNinos = data );
  }

  ngOnInit() {
  }

}
