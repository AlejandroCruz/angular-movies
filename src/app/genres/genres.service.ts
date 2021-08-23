import { Injectable } from '@angular/core';
import { genreDTO } from './genre.models';

@Injectable({
  providedIn: 'root'
})
export class GenresService {

  constructor() { }

  getAll(): genreDTO[]{
    return [{id: 999, name: 'My Test Genre'}];
  }
}
