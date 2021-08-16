import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  moviesInTheaters;
  moviesFutureReleases;

  ngOnInit(): void {
      this.moviesInTheaters = [{
        title: 'The Matrix',
        releaseDate: new Date('2021-01-01'),
        price: 10.99,
        poster: 'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UX380_CR0,4,380,562_.jpg'
      },
      {
        title: 'Star Wars',
        releaseDate: new Date('2021-01-02'),
        price: 11.99,
        poster: 'https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UX380_CR0,14,380,562_.jpg'
      },
      {
        title: 'Tron',
        releaseDate: new Date('2021-01-03'),
        price: 12.99,
        poster: 'https://m.media-amazon.com/images/M/MV5BMTk4NTk4MTk1OF5BMl5BanBnXkFtZTcwNTE2MDIwNA@@._V1_QL75_UX380_CR0,0,380,562_.jpg'
      },
      {
        title: 'Dune',
        releaseDate: new Date('2021-01-03'),
        price: 12.99,
        poster: 'https://m.media-amazon.com/images/M/MV5BN2FjNmEyNWMtYzM0ZS00NjIyLTg5YzYtYThlMGVjNzE1OGViXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_QL75_UX380_CR0,1,380,562_.jpg'
      }];

      this.moviesFutureReleases = [];
  }
}
