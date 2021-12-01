import { Component, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProjectService } from 'src/services/project.service';
import { Project } from 'src/models/Project';
import { ProjectsComponent } from '../project-overview/projects/projects.component';
import { play } from 'ngx-bootstrap-icons';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})

@Injectable({
  providedIn: 'root'
})
export class ProjectDetailComponent implements OnInit {

  project = {} as Project;
  status: number = 0;


  constructor(private projectService: ProjectService, private route: ActivatedRoute, private location: Location,
    private router: Router, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getProjectById();
  }

  getProjectByIdFromUrl(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.projectService.getProjectById(id)
      .subscribe((data) => {
        this.project = data;
        console.log(this.project);
      })
  }

  getProjectById(): void {
    this.projectService.getProjectById(this.status)
      .subscribe((data) => {
        this.project = data;
        console.log(this.project);
      })
  }

  modalClose(): void {
    this.modalService.dismissAll();
  }
}
