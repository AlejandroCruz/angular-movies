import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { multipleSelectorModel } from 'src/app/utilities/multiple-selector/multiple-selector.model';
import { MovieCreationDTO, MovieDTO } from '../movies.model';

@Component({
  selector: 'app-form-movie',
  templateUrl: './form-movie.component.html',
  styleUrls: ['./form-movie.component.css']
})
export class FormMovieComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  form: FormGroup;

  @Input() model: MovieDTO;

  @Output()
  onSaveChanges = new EventEmitter<MovieCreationDTO>();

  nonSelectedGenres: multipleSelectorModel[] = [
    {key: 1, value: 'Action'},
    {key: 2, value: 'Sci-Fi'},
    {key: 3, value: 'Fantasy'}
  ];

  selectedGenres: multipleSelectorModel[] = [];

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: ['',{
        validators: [Validators.required]
      }],
      summary: '',
      inTheaters: false,
      trailer: '',
      releaseDate: '',
      poster: '',
      genresIds: ''
    });

    if(this.model !== undefined){
      this.form.patchValue(this.model);
    }
  }
  onImageSelected(file: File){
    this.form.get('poster').setValue(file);
  }
  
    changeMarkdown(content: string){
      this.form.get('summary').setValue(content);
    }

  saveChanges(){
    const genresIds = this.selectedGenres.map(value => value.key);
    this.form.get('genresIds').setValue(genresIds);
    this.onSaveChanges.emit(this.form.value);
  }
}
