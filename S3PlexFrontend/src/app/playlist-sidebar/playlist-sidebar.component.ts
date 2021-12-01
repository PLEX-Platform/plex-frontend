import { Component, OnInit,Input } from '@angular/core';
import { Playlist } from 'src/models/Playlist.model';
import { ProjectDetailComponent } from '../project-detail/project-detail.component';
import { Project } from 'src/models/Project';

@Component({
  selector: 'app-playlist-sidebar',
  templateUrl: './playlist-sidebar.component.html',
  styleUrls: ['./playlist-sidebar.component.scss']
})
export class PlaylistSidebarComponent implements OnInit {
  @Input() playlistProjects!: Playlist;

  constructor()
  {

  }

  ngOnInit(): void {
  }

}
