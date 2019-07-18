import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/providers/peliculas.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  buscar: string;
  peliculas: any;

  constructor( private _ps: PeliculasService, private activatedRoute: ActivatedRoute ) {
    this.activatedRoute.params.subscribe( parametros => {
      if ( parametros['text'] ) {
        this.buscar = parametros['text'];
        this.buscarPelicula();
      }
    });
  }

  ngOnInit() {
  }

  buscarPelicula() {
    if ( this.buscar.length === 0 ) {
      return;
    }

    this._ps.buscarPelicula( this.buscar ).subscribe( response => this.peliculas = response );
  }

}
