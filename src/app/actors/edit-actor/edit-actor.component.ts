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

  model: ActorDTO;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      alert(params.id);
    });
  }

  saveChanges(actorCreationDTO: ActorCreationDTO){
    console.log(actorCreationDTO);
  }
}
