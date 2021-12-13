import { Component, OnInit, Input } from '@angular/core';
import { Playlist } from 'src/models/Playlist.model';
import { ProjectDetailComponent } from '../project-detail/project-detail.component';
import { Project } from 'src/models/Project';
import { PlaylistSharedService } from 'playlistSharedService/playlist-shared.service';

@Component({
  selector: 'app-playlist-sidebar',
  templateUrl: './playlist-sidebar.component.html',
  styleUrls: ['./playlist-sidebar.component.scss']
})
export class PlaylistSidebarComponent implements OnInit {
  // @Input() playlistProjects!: Playlist;

  constructor(private sharedService: PlaylistSharedService) { }

  playlist: Project[] = [];

  ngOnInit(): void {
    this.sharedService.sharedPlaylist.subscribe(playlist => this.playlist = playlist)
  }

  deleteProject(i: number) {
    this.playlist.splice(i,1)
  }
}
