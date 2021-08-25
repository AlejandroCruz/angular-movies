import { Component, OnInit } from '@angular/core';
import { genreDTO } from '../genre.models';
import { GenresService } from '../genres.service';

@Component({
  selector: 'app-index-genres',
  templateUrl: './index-genres.component.html',
  styleUrls: ['./index-genres.component.css']
})
export class IndexGenresComponent implements OnInit {

  genres: genreDTO[];
  columnsToDisplay = ['name', 'actions']

  constructor(private genresService: GenresService) { }

  ngOnInit(): void {
    this.genresService.getAll().subscribe(genres => {
      this.genres = genres;
    });
  }

}
