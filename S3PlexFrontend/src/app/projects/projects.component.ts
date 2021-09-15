import { Component, OnInit } from '@angular/core';
import { Projects } from '../mock-projects';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  
  projects = Projects
  constructor() { }

  ngOnInit(): void {
    
  }

}
