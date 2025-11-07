import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OmdbService {
 
  private readonly API_KEY = 'a5bacd94'; 
  private readonly BASE_URL = 'https://www.omdbapi.com/';

  constructor(private http: HttpClient) { }


  buscarFilmePorTitulo(title: string): Observable<any> {
    const url = `${this.BASE_URL}?t=${encodeURIComponent(title)}&apikey=${this.API_KEY}`;
    
    // O Service RETORNA o Observable.
    return this.http.get(url);
  }
}