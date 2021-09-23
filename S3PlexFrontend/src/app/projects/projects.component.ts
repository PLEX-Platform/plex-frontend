import { Component, OnInit } from '@angular/core';

import { ProjectService } from '../project.service';
import { ProjectList } from '../ProjectList';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  
  projectslist = {} as ProjectList;
  page: number = 1;
  
  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.getProjectsByPage();
  }

  getProjectsByPage(): void {
    this.projectService.getProjectsByPage(this.page)
    .subscribe((data) => {
      this.projectslist = data;
      console.log(this.projectslist);
    })
  }

  // getProjectsBySearchQuery(): void{
  //   this.projectService.getProjectsBySearchQuery()
  //   .subscribe((data) =>{
  //     this.projects = data.results;
  //   })
  // }

  onNext(): void{
    this.page++;
    this.getProjectsByPage();
  }

  onPrevious(): void{
    this.page--;
    this.getProjectsByPage();
  }
}