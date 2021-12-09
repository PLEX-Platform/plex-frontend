import { Component, OnInit, ViewChild } from '@angular/core';
import { ProjectsComponent } from './projects/projects.component';
import { FilterMenuComponent } from './filter-menu/filter-menu.component';
import { ProjectList } from '../../models/ProjectList';
import { Project } from '../../models/Project';
import { PlaylistSharedService } from 'playlistSharedService/playlist-shared.service';

@Component({
  selector: 'app-project-overview',
  templateUrl: './project-overview.component.html',
  styleUrls: ['./project-overview.component.scss']
})
export class ProjectOverviewComponent implements OnInit {
  @ViewChild(FilterMenuComponent) filterMenu!: FilterMenuComponent;
  @ViewChild(ProjectsComponent) projects!: ProjectsComponent;

playlist: Project[] = []

  constructor(private sharedService: PlaylistSharedService ) { }

  ngOnInit()
  {
    console.log(this.playlist)
    // this.sharedService.sharedPlaylist.subscribe(playlist => this.playlist = playlist)
  }

}
