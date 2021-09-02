import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActorCreationDTO, ActorDTO } from '../actors.model';

@Component({
  selector: 'app-edit-actor',
  templateUrl: './edit-actor.component.html',
  styleUrls: ['./edit-actor.component.css']
})
export class EditActorComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  model: ActorDTO = {
    id: 1,
    name: 'Keanu',
    dateOfBirth: new Date(),
    biography: 'default value',
    picture: 'https://m.media-amazon.com/images/M/MV5BYTkzODI4MDMtNDNmZC00NDZlLWFmNTktNDRhOWE2YzhlZTQ2XkEyXkFqcGdeQXVyMTE1MTYxNDAw._V1_FMjpg_UX736_.jpg'
  };

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      alert(params.id);
    });
  }

  saveChanges(actorCreationDTO: ActorCreationDTO){
    console.log(actorCreationDTO);
  }
}
