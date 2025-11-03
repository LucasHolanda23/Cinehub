import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { CapitalizePipe } from '../../pipes/capitalize.pipe';
import { HoverHighlightDirective } from '../../directives/hover-highlight.directive';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.page.html',
  styleUrls: ['./filmes.page.css'],
  standalone: true,
  imports: [IonicModule, RouterLink, CommonModule, CapitalizePipe, HoverHighlightDirective]
})
export class FilmesPage {
  movies = [
    {
      id: 1,
      title: 'o poderoso chefão',
      year: 1972,
      rating: 9.2,
      genre: 'Crime, Drama',
      description: 'A história épica de uma família de crime organizado.',
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAY2xsJVIZxm3K0gNtOMr9CSCvLdr5kdo3V3pv2HMuUkTBhFzRe5-b8NDRmO1mt5S5Xp_YyQ&s=10',
    },
    {
      id: 2,
      title: 'pulp fiction',
      year: 1994,
      rating: 8.9,
      genre: 'Crime, Drama',
      description: 'Histórias interconectadas de crime e redenção.'
    },
    {
      id: 3,
      title: 'o cavaleiro das trevas',
      year: 2008,
      rating: 9.0,
      genre: 'Ação, Crime',
      description: 'Batman enfrenta o Coringa em Gotham City.'
    },
    {
      id: 4,
      title: 'a lista de schindler',
      year: 1993,
      rating: 9.0,
      genre: 'Drama, História',
      description: 'História verdadeira de um empresário que salvou vidas.'
    },
    {
      id: 5,
      title: 'forrest gump',
      year: 1994,
      rating: 8.8,
      genre: 'Drama, Romance',
      description: 'A vida extraordinária de Forrest Gump.'
    },
    {
      id: 6,
      title: 'inception',
      year: 2010,
      rating: 8.8,
      genre: 'Ficção Científica, Ação',
      description: 'Um ladrão especializado em extrair segredos do subconsciente.'
    },
    {
      id: 7,
      title: 'matrix',
      year: 1999,
      rating: 8.7,
      genre: 'Ficção Científica, Ação',
      description: 'Um hacker descobre a verdade sobre a realidade.'
    },
    {
      id: 8,
      title: 'clube da luta',
      year: 1999,
      rating: 8.8,
      genre: 'Drama, Thriller',
      description: 'Um funcionário de escritório forma um clube de luta clandestino.'
    },
    {
      id: 9,
      title: 'interestelar',
      year: 2014,
      rating: 8.6,
      genre: 'Ficção Científica, Drama',
      description: 'Um grupo de exploradores viaja através de um buraco de minhoca.'
    },
    {
      id: 10,
      title: 'a origem',
      year: 2010,
      rating: 8.8,
      genre: 'Ficção Científica, Ação',
      description: 'Dom Cobb é um especialista em extração de informações.'
    },
    {
      id: 11,
      title: 'gladiador',
      year: 2000,
      rating: 8.5,
      genre: 'Ação, Drama',
      description: 'Um general romano busca vingança contra o imperador corrupto.'
    },
    {
      id: 12,
      title: 'o rei leão',
      year: 1994,
      rating: 8.5,
      genre: 'Animação, Drama',
      description: 'A jornada de Simba para se tornar rei da savana.'
    }
  ];

  popularMovies = this.movies.filter(m => m.rating >= 8.8);
  allMovies = this.movies;
}

