import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my angular-movies';

  handleRating(rate:number){
    alert(`The user selected ${rate}`);
  }
}
