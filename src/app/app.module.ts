import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import {SweetAlert2Module} from '@sweetalert2/ngx-sweetalert2';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MarkdownModule } from 'ngx-markdown';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { ActorsAutocompleteComponent } from './actors/actors-autocomplete/actors-autocomplete.component';
import { CreateActorComponent } from './actors/create-actor/create-actor.component';
import { CreateGenreComponent } from './genres/create-genre/create-genre.component';
import { CreateMovieComponent } from './movies/create-movie/create-movie.component';
import { CreateMovieTheaterComponent } from './movie-theaters/create-movie-theater/create-movie-theater.component';
import { EditActorComponent } from './actors/edit-actor/edit-actor.component';
import { EditGenreComponent } from './genres/edit-genre/edit-genre.component';
import { EditMovieComponent } from './movies/edit-movie/edit-movie.component';
import { EditMovieTheaterComponent } from './movie-theaters/edit-movie-theater/edit-movie-theater.component';
import { FormActorComponent } from './actors/form-actor/form-actor.component';
import { FormGenreComponent } from './genres/form-genre/form-genre.component';
import { FormMovieComponent } from './movies/form-movie/form-movie.component';
import { GenericListComponent } from './utilities/generic-list/generic-list.component';
import { HomeComponent } from './home/home.component';
import { IndexActorsComponent } from './actors/index-actors/index-actors.component';
import { IndexGenresComponent } from './genres/index-genres/index-genres.component';
import { IndexMovieTheaterComponent } from './movie-theaters/index-movie-theater/index-movie-theater.component';
import { InputImgComponent } from './utilities/input-img/input-img.component';
import { InputMarkdownComponent } from './utilities/input-markdown/input-markdown.component';
import { MaterialModule } from './material/material.module';
import { MenuComponent } from './menu/menu.component';
import { MovieFilterComponent } from './movies/movie-filter/movie-filter.component';
import { MoviesListComponent } from './movies/movies-list/movies-list.component';
import { MultipleSelectorComponent } from './utilities/multiple-selector/multiple-selector.component';
import { RatingComponent } from './utilities/rating/rating.component';
import {DisplayErrorsComponent} from './utilities/display-errors/display-errors.component';

@NgModule({
  declarations: [
    ActorsAutocompleteComponent,
    AppComponent,
    CreateActorComponent,
    CreateGenreComponent,
    CreateMovieComponent,
    CreateMovieTheaterComponent,
    DisplayErrorsComponent,
    EditActorComponent,
    EditGenreComponent,
    EditMovieComponent,
    EditMovieTheaterComponent,
    FormActorComponent,
    FormGenreComponent,
    FormMovieComponent,
    GenericListComponent,
    HomeComponent,
    IndexActorsComponent,
    IndexGenresComponent,
    IndexMovieTheaterComponent,
    InputImgComponent,
    InputMarkdownComponent,
    MenuComponent,
    MovieFilterComponent,
    MoviesListComponent,
    MultipleSelectorComponent,
    RatingComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MarkdownModule.forRoot(),
    MaterialModule,
    ReactiveFormsModule,
    SweetAlert2Module.forRoot()
  ],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule { }
