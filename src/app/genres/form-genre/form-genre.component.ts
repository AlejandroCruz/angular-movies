import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { genreCreationDTO } from '../genre.models';

@Component({
  selector: 'app-form-genre',
  templateUrl: './form-genre.component.html',
  styleUrls: ['./form-genre.component.css']
})
export class FormGenreComponent {

  constructor(private formBuilder: FormBuilder) { }

  @Input() model: genreCreationDTO;
  form: FormGroup;

  @Output()
  onSaveChanges: EventEmitter<genreCreationDTO> = new EventEmitter<genreCreationDTO>();

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', {
        validators: [Validators.required, Validators.minLength(3)]
      }]
    });

    if(this.model !== undefined){
      this.form.patchValue(this.model);
    }
  }

  saveChanges(){
    this.onSaveChanges.emit(this.form.value)
  }

  getErrorFieldName(){
    const field = this.form.get('name');
    
    if (field.hasError('required')){
      return 'The name field is required'
    }

    if (field.hasError('minlength')){
      return 'The minimum length is 3';
    }
    
    return '';
  }
}
