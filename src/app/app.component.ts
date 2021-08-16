import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  moviesInTheaters;
  moviesFutureReleases;
  title = 'my angular-movies';

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
      }];  

      this.moviesFutureReleases = [];
  }

  handleRating(rate:number){
    alert(`The user selected ${rate}`);
  }
}
/*
Tron: 'https://m.media-amazon.com/images/M/MV5BMTk4NTk4MTk1OF5BMl5BanBnXkFtZTcwNTE2MDIwNA@@._V1_QL75_UX380_CR0,0,380,562_.jpg'
300: 'https://m.media-amazon.com/images/M/MV5BNWMxYTZlOTUtZDExMi00YzZmLTkwYTMtZmM2MmRjZmQ3OGY4XkEyXkFqcGdeQXVyMTAwMzUyMzUy._V1_QL75_UY562_CR1,0,380,562_.jpg'
 */