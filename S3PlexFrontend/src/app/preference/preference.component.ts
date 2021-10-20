import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-preference',
  templateUrl: './preference.component.html',
  styleUrls: ['./preference.component.scss']
})
export class PreferenceComponent implements OnInit {
  movies = [
    'PLEX',
    'EasyFlex',
    'NxtApps',
    'CM',
    'Episode V - The Empire Strikes Back',
    'Episode VI - Return of the Jedi',
    'Episode VII - The Force Awakens',
    'Episode VIII - The Last Jedi',
    'Episode IX – The Rise of Skywalker'
  ];


  constructor() { }

  ngOnInit(): void {
  }
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
    console.log(this.movies)
  }

  onSubmit(data: CdkDragDrop<any>) {
    console.warn(data);
  }
}

