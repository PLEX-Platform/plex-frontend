import { Component, OnInit } from '@angular/core';

import { Project } from '../projectEntity';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  
  projects: Project[] = [];
  page: number = 1;
  totalpages: number = 0;
  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.getProjectsByPage();
  }

  getProjectsByPage(): void {
    this.projectService.getProjectsByPage(this.page)
    .subscribe((data) => {
      this.projects = data.results;
      this.totalpages = data.totalPages;
    })
  }

  onNext(): void{
    this.page++;
    this.getProjectsByPage();
  }

  onPrevious(): void{
    this.page--;
    this.getProjectsByPage();
  }
}