import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActorCreationDTO, ActorDTO } from '../actors.model';

@Component({
  selector: 'app-form-actor',
  templateUrl: './form-actor.component.html',
  styleUrls: ['./form-actor.component.css']
})
export class FormActorComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  form: FormGroup;

  @Input() model: ActorDTO;
  @Output() onSaveChanges = new EventEmitter<ActorCreationDTO>();

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name:['', {
        validators: [Validators.required]
      }],
      dateOfBirth: '',
      picture: '',
      biography: ''
    })

    if(this.model !== undefined){
      this.form.patchValue(this.model);
    }
  }

  changeMarkdown(content){
    this.form.get('biography').setValue(content);
  }

  onImageSelected(image){
    this.form.get('picture').setValue(image);
  }

  saveChanges(){
    this.onSaveChanges.emit(this.form.value);
  }

}
