import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { CapitalizePipe } from '../../pipes/capitalize.pipe';
import { HoverHighlightDirective } from '../../directives/hover-highlight.directive';
import { OmdbService } from '../../omdb.service';



@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.page.html',
  styleUrls: ['./filmes.page.css'],
  standalone: true,
  imports: [IonicModule, RouterLink, CommonModule, CapitalizePipe, HoverHighlightDirective]
  

})
export class FilmesPage implements OnInit {

  constructor(private omdbService: OmdbService) {}

  movies: any[] = [
    { title: 'The Godfather' },
    { title: 'Pulp Fiction' },
    { title: 'The Dark Knight' },
    { title: 'Schindler\'s List' },
    { title: 'Forrest Gump' },
    { title: 'Inception' },
    { title: 'The Matrix' },
    { title: 'Fight Club' },
    { title: 'Interstellar' },
    { title: 'Gladiator' },
    { title: 'The Lion King' }
  ]; 

  ngOnInit() {
    this.atualizarFilmesComAPI();
  }

  atualizarFilmesComAPI() {
    this.movies.forEach((movie, index) => {
      this.omdbService.buscarFilmePorTitulo(movie.title).subscribe({
        next: (data: any) => {
          console.log(`Filme atualizado:`, data);

          
          this.movies[index] = {
            title: data.Title,
            year: data.Year,
            rating: data.imdbRating,
            genre: data.Genre,
            description: data.Plot,
            director: data.Director,
            poster: data.Poster
          };
        },
        error: () => {
          console.warn('Erro ao buscar filme:', movie.title);
        }
      });
    });
  }

  get allMovies() {
    return this.movies;
  }

}
