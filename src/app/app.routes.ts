import { Routes } from '@angular/router';
import { HomePage } from './pages/home/home.page';
import { FilmesPage } from './pages/filmes/filmes.page';
import { FilmeDetalhesPage } from './pages/filme-detalhes/filme-detalhes.page';

export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'filmes', component: FilmesPage },
  { path: 'filme/:id', component: FilmeDetalhesPage },
  { path: '**', redirectTo: '' }
];
