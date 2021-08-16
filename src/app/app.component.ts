import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
      this.moviesInTheaters = [{
        title: 'The Matrix',
        releaseDate: new Date('2021-01-01'),
        price: 10.99
      },
      {
        title: 'Star Wars',
        releaseDate: new Date('2021-01-02'),
        price: 11.99
      }];

      this.moviesFutureReleases = [];
      // this.moviesFutureReleases = [{
      //   title: 'Ironman',
      //   releaseDate: new Date('2021-01-03'),
      //   price: 12.99
      // },
      // {
      //   title: 'Star Trek',
      //   releaseDate: new Date('2021-01-04'),
      //   price: 13.99
      // }];
  }

  moviesInTheaters;
  moviesFutureReleases;
  title = 'my angular-movies';
}
