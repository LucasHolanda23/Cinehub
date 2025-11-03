import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { CapitalizePipe } from '../../pipes/capitalize.pipe';

@Component({
  selector: 'app-filme-detalhes',
  templateUrl: './filme-detalhes.page.html',
  styleUrls: ['./filme-detalhes.page.css'],
  standalone: true,
  imports: [IonicModule, RouterLink, CommonModule, CapitalizePipe]
})
export class FilmeDetalhesPage implements OnInit {
  movieId: number = 0;
  movie: any = null;

  movies = [
    {
      id: 1,
      title: 'o poderoso chefão',
      year: 1972,
      rating: 9.2,
      genre: 'Crime, Drama',
      description: 'A história épica de uma família de crime organizado na Itália durante os anos 40 e 50. O filme narra a passagem do controle do império da família Corleone do pai envelhecido para seu filho mais jovem e relutante.',
      director: 'Francis Ford Coppola',
      duration: '175 min'
    },
    {
      id: 2,
      title: 'pulp fiction',
      year: 1994,
      rating: 8.9,
      genre: 'Crime, Drama',
      description: 'Histórias interconectadas de crime e redenção em Los Angeles. O filme apresenta múltiplas narrativas não lineares que se entrelaçam.',
      director: 'Quentin Tarantino',
      duration: '154 min'
    },
    {
      id: 3,
      title: 'o cavaleiro das trevas',
      year: 2008,
      rating: 9.0,
      genre: 'Ação, Crime',
      description: 'Batman enfrenta o Coringa em Gotham City. O filme explora temas de moralidade, caos e heroísmo em um mundo corrompido.',
      director: 'Christopher Nolan',
      duration: '152 min'
    },
    {
      id: 4,
      title: 'a lista de schindler',
      year: 1993,
      rating: 9.0,
      genre: 'Drama, História',
      description: 'História verdadeira de um empresário alemão que salvou a vida de mais de mil refugiados judeus durante o Holocausto.',
      director: 'Steven Spielberg',
      duration: '195 min'
    },
    {
      id: 5,
      title: 'forrest gump',
      year: 1994,
      rating: 8.8,
      genre: 'Drama, Romance',
      description: 'A vida extraordinária de Forrest Gump, um homem simples que presencia e participa de alguns dos eventos mais importantes da história americana.',
      director: 'Robert Zemeckis',
      duration: '142 min'
    },
    {
      id: 6,
      title: 'inception',
      year: 2010,
      rating: 8.8,
      genre: 'Ficção Científica, Ação',
      description: 'Um ladrão especializado em extrair segredos do subconsciente através dos sonhos é contratado para realizar a tarefa inversa: implantar uma ideia.',
      director: 'Christopher Nolan',
      duration: '148 min'
    },
    {
      id: 7,
      title: 'matrix',
      year: 1999,
      rating: 8.7,
      genre: 'Ficção Científica, Ação',
      description: 'Um hacker descobre a verdade sobre a realidade e seu papel na guerra contra os seus controladores. Uma experiência revolucionária em cinema de ação.',
      director: 'Lana Wachowski, Lilly Wachowski',
      duration: '136 min'
    },
    {
      id: 8,
      title: 'clube da luta',
      year: 1999,
      rating: 8.8,
      genre: 'Drama, Thriller',
      description: 'Um funcionário de escritório insone e um fabricante de sabonetes formam um clube de luta clandestino que evolui para algo muito maior.',
      director: 'David Fincher',
      duration: '139 min'
    },
    {
      id: 9,
      title: 'interestelar',
      year: 2014,
      rating: 8.6,
      genre: 'Ficção Científica, Drama',
      description: 'Um grupo de exploradores viaja através de um buraco de minhoca no espaço em uma tentativa de garantir a sobrevivência da humanidade.',
      director: 'Christopher Nolan',
      duration: '169 min'
    },
    {
      id: 10,
      title: 'a origem',
      year: 2010,
      rating: 8.8,
      genre: 'Ficção Científica, Ação',
      description: 'Dom Cobb é um especialista em extração de informações. Ele é contratado para realizar a tarefa inversa: plantar uma ideia na mente de alguém.',
      director: 'Christopher Nolan',
      duration: '148 min'
    },
    {
      id: 11,
      title: 'gladiador',
      year: 2000,
      rating: 8.5,
      genre: 'Ação, Drama',
      description: 'Um general romano é traído e busca vingança contra o imperador corrupto que assassinou sua família e o condenou à escravidão.',
      director: 'Ridley Scott',
      duration: '155 min'
    },
    {
      id: 12,
      title: 'o rei leão',
      year: 1994,
      rating: 8.5,
      genre: 'Animação, Drama',
      description: 'A jornada de Simba para se tornar rei da savana africana. Um clássico atemporal sobre crescimento, responsabilidade e destino.',
      director: 'Roger Allers, Rob Minkoff',
      duration: '88 min'
    }
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.movieId = +params['id'];
      this.movie = this.movies.find(m => m.id === this.movieId);
      
      if (!this.movie) {
        this.router.navigate(['/filmes']);
      }
    });
  }
}

