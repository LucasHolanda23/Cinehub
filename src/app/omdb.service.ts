import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


// O 'providedIn: root' registra este serviço na raiz da aplicação
// e permite que seja injetado em qualquer lugar.

@Injectable({
  providedIn: 'root'
})
export class OmdbService {
  // Sua chave de API está definida aqui
  private readonly API_KEY = 'a5bacd94'; 
  private readonly BASE_URL = 'https://www.omdbapi.com/';

  // Injeção do HttpClient: ESSA LINHA É O REQUISITO PRINCIPAL
  // Ela agora está no Service, e não no Componente.
  constructor(private http: HttpClient) { }

  /**
   * Realiza uma requisição GET na API da OMDB pelo título do filme.
   * A lógica de conexão (HttpClient) está alocada aqui, no Service.
   * @param title O título do filme a ser buscado.
   * @returns Um Observable com a resposta da API.
   */
  buscarFilmePorTitulo(title: string): Observable<any> {
    const url = `${this.BASE_URL}?t=${encodeURIComponent(title)}&apikey=${this.API_KEY}`;
    
    // O Service RETORNA o Observable.
    return this.http.get(url);
  }
}