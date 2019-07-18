import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private apiKey: string = "95f4d2069e080ef182561c61de0360b5";
  private urlMoviedb: string = "https://api.themoviedb.org/3";

  constructor( private httpClient: HttpClient ) {}

  getCartelera() {
    let fechaDesde = new Date();
    let fechaHasta = new Date();
    fechaHasta.setDate( fechaHasta.getDate() + 7 );

    let desdeStr = `${ fechaDesde.getFullYear() }-${ fechaDesde.getMonth()+1 }-${ fechaDesde.getDay() }`;
    let hastaStr = `${ fechaHasta.getFullYear() }-${ fechaHasta.getMonth()+1 }-${ fechaHasta.getDay() }`;
    let url = `${ this.urlMoviedb }/discover/movie?primary_release_date.gte=${ desdeStr }&primary_release_date.lte=${ hastaStr }&api_key=${ this.apiKey }&language=es`;
    
    return this.httpClient.jsonp( url, 'callback' ).pipe( map( (response: any) => response.results) );
  }

  getPopulares() {
    let url = `${ this.urlMoviedb }/discover/movie?sort_by=popularity.desc&api_key=${ this.apiKey }&language=es`;

    return this.httpClient.jsonp( url, 'callback' ).pipe( map( (response: any) => response.results) );
  }

  getPopularesNinos() {
    let url = `${ this.urlMoviedb }/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${ this.apiKey }&language=es`

    return this.httpClient.jsonp( url, 'callback' ).pipe( map( (response: any) => response.results) );
  }

  buscarPelicula( texto:string ){
    let url = `${ this.urlMoviedb }/search/movie?query=${ texto }&sort_by=popularity.desc&api_key=${ this.apiKey }&language=es`;

    return this.httpClient.jsonp( url, 'callback' ).pipe( map( (response: any) => response.results ) );
  }

  getPelicula( id: string ) {
    let url = `${ this.urlMoviedb }/movie/${ id }?api_key=${ this.apiKey }&language=es`;

    return this.httpClient.jsonp( url, 'callback' ).pipe( map( (response: any) => response) );
  }

}
