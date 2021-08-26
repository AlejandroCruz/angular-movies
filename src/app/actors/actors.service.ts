import { Injectable } from '@angular/core';
import { ActorCreationDTO } from './actors.model';

@Injectable({
  providedIn: 'root'
})
export class ActorsService {

  constructor() { }

  create(actor: ActorCreationDTO) {}

  private buildFormData(actor: ActorCreationDTO): FormData {
    const formData = new FormData();

    formData.append('name', actor.name);

    // if field is not required verify and then append
    if (actor.biography) {
      formData.append('biography', actor.biography);
    }

    return formData;
  }
}
