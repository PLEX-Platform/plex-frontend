import { Component, OnInit, ViewChild } from '@angular/core';
import { ProjectsComponent } from './projects/projects.component';
import { FilterMenuComponent } from './filter-menu/filter-menu.component';
import { ProjectList } from '../ProjectList';
import { Project } from '../Project';

@Component({
  selector: 'app-project-overview',
  templateUrl: './project-overview.component.html',
  styleUrls: ['./project-overview.component.scss']
})
export class ProjectOverviewComponent implements OnInit {
  @ViewChild(FilterMenuComponent) filterMenu!: FilterMenuComponent;
  @ViewChild(ProjectsComponent) projects!: ProjectsComponent;

  constructor() { }

  ngOnInit(): void {
  }

}
