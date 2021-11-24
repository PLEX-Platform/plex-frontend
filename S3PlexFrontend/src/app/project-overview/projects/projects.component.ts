import { Component, OnInit } from '@angular/core';
import { ProjectDetailComponent } from '../../project-detail/project-detail.component';
import { NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import { ProjectService } from '../../../services/project.service';
import { ProjectList } from '../../../models/ProjectList';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  
  projectslist = {} as ProjectList;
  page: number = 1;
  numbers: number[] = [];
  
  constructor(private projectService: ProjectService, private modalService: NgbModal) { }

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

  toPage(pageNo: number): void{
    this.page = pageNo;
    this.getProjectsByPage();
  }

  openModal(id: number): void{

    const modal: NgbModalRef = this.modalService.open(ProjectDetailComponent, {size : 'lg'});

    (<ProjectDetailComponent>modal.componentInstance).status = id;
  }
}