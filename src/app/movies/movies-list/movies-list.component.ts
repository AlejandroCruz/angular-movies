import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.movies = [{
        title: 'The Matrix',
        releaseDate: new Date(),
        price: 1400.99
      },
      {
        title: 'Star Wars',
        releaseDate: new Date('2016-11-14'),
        price: 300.99
      }];
    }, 3000);
  }

  movies;
}
