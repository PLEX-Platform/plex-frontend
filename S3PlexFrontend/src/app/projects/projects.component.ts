import { Component, OnInit } from '@angular/core';
import { Projects } from '../mock-projects';

import { Project } from '../projectEntity';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  
  projects: Project[] = [];
  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.getProjects();
  }

  getProjects(): void {
    this.projectService.getProjects()
    .subscribe(data => this.projects = data.results);
  }
}