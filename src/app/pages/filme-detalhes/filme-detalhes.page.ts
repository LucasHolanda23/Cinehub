import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { CapitalizePipe } from '../../pipes/capitalize.pipe';
import { OmdbService } from '../../omdb.service';

@Component({
  selector: 'app-filme-detalhes',
  templateUrl: './filme-detalhes.page.html',
  styleUrls: ['./filme-detalhes.page.css'],
  standalone: true,
  imports: [IonicModule, RouterLink, CommonModule,]
})
export class FilmeDetalhesPage implements OnInit {

  movieTitle: string = '';
  movie: any = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private omdbService: OmdbService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.movieTitle = params['id']; 

      if (!this.movieTitle) {
        this.router.navigate(['/filmes']);
      }

      this.buscarFilmeAPI(this.movieTitle);
    });
  }

  buscarFilmeAPI(title: string) {
    this.omdbService.buscarFilmePorTitulo(title).subscribe({
      next: (response) => {
        console.log('Filme vindo da API:', response);
        this.movie = response;
      },
      error: (error) => {
        console.error('Erro ao carregar filme da API:', error);
      }
    });
  }
}
