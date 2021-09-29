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
  numbers: number[] = [];
  
  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.getProjectsByPage();
  }

  getProjectsByPage(): void {
    this.projectService.getProjectsByPage(this.page)
    .subscribe((data) => {
      this.projectslist = data;
      console.log(this.projectslist);
      if(this.numbers.length == 0)
      {
        for(let n = 1; n <= this.projectslist.totalPages; n++){
          this.numbers.push(n);
        }
      }
      console.log(this.numbers);
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

  toPage(pageNo: number): void{
    this.page = pageNo;
    this.getProjectsByPage();
  }
}