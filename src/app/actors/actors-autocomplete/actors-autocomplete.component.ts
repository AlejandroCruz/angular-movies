import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-actors-autocomplete',
  templateUrl: './actors-autocomplete.component.html',
  styleUrls: ['./actors-autocomplete.component.css']
})
export class ActorsAutocompleteComponent implements OnInit {
  actors = [
    {name: 'Keannu Reeves', picture: 'https://m.media-amazon.com/images/M/MV5BYTkzODI4MDMtNDNmZC00NDZlLWFmNTktNDRhOWE2YzhlZTQ2XkEyXkFqcGdeQXVyMTE1MTYxNDAw._V1_UY317_CR19,0,214,317_AL_.jpg'},
    {name: 'Mark Hamill', picture: 'https://m.media-amazon.com/images/M/MV5BOGY2MjI5MDQtOThmMC00ZGIwLWFmYjgtYWU4MzcxOGEwMGVkXkEyXkFqcGdeQXVyMzM4MjM0Nzg@._V1_UY317_CR175,0,214,317_AL_.jpg'},
    {name: 'Tom Cruise', picture: 'https://m.media-amazon.com/images/M/MV5BMTk1MjM3NTU5M15BMl5BanBnXkFtZTcwMTMyMjAyMg@@._V1_UY317_CR14,0,214,317_AL_.jpg'}
  ];
  originalActors = this.actors;
  selectedActors = [];
  columnsToDisplay = ['picture', 'name', 'character', 'actions']

  constructor() { }

  control: FormControl = new FormControl();

  @ViewChild(MatTable) table: MatTable<any>;

  ngOnInit(): void {
    this.control.valueChanges.subscribe(value => {
      this.actors = this.originalActors;
      this.actors = this.actors.filter(actor => actor.name.indexOf(value) !== -1);
    })
  }

  optionSelected(event: MatAutocompleteSelectedEvent){
    console.log(event.option.value);
    this.selectedActors.push(event.option.value);
    this.control.patchValue('');
    if(this.table !== undefined){
      this.table.renderRows();
    }
  }

  remove(actor){
    const index = this.selectedActors.findIndex(a => a.name === actor.name);
    this.selectedActors.splice(index, 1);
    this.table.renderRows();
  }

  dropped(event: CdkDragDrop<any[]>){
    const previousIndex = this.selectedActors.findIndex(actor => actor === event.item.data);
    moveItemInArray(this.selectedActors, previousIndex, event.currentIndex);
    this.table.renderRows();
  }
}
