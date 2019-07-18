import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/providers/peliculas.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styles: []
})
export class MovieComponent implements OnInit {

  pelicula: any;
  regresar: string;
  search: string;

  constructor( public _ps: PeliculasService, public activatedRoute: ActivatedRoute ) {
    this.activatedRoute.params.subscribe( (parametros: any) => {
      this.regresar = parametros.page;
      if ( parametros.search ) {
        this.search = parametros.search;
      }
      this._ps.getPelicula( parametros.id ).subscribe( pelicula => {
        this.pelicula = pelicula;
      });
    })
  }

  ngOnInit() {
  }

}
