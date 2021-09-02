import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { formatDateFormData } from '../utilities/utils';
import { ActorCreationDTO } from './actors.model';

@Injectable({
  providedIn: 'root'
})
export class ActorsService {

  constructor(private http: HttpClient) { }

  private apiURL = environment.apiURL + '/actors'

  create(actor: ActorCreationDTO) {
    const formData = this.buildFormData(actor);
    return this.http.post(this.apiURL, formData);
  }

  private buildFormData(actor: ActorCreationDTO): FormData {
    const formData = new FormData();

    formData.append('name', actor.name);

    if (actor.biography) {
      formData.append('biography', actor.biography);
    }
    else // Workaround for bug in 'input-markdown.component.html'
    {
      formData.append('biography', "Dummy-data actor biography");
    }
    if (actor.dateOfBirth) {
      formData.append('dateOfBirth', formatDateFormData(actor.dateOfBirth));
    }
    if (actor.picture) {
      formData.append('picture', actor.picture);
    }

    return formData;
  }
}
