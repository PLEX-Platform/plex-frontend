import { Component, OnInit, Input } from '@angular/core';
import { Playlist } from 'src/models/Playlist.model';
import { ProjectDetailComponent } from '../project-detail/project-detail.component';
import { Project } from 'src/models/Project';
import { PlaylistSharedService } from 'playlistSharedService/playlist-shared.service';
import { ProjectService } from 'src/services/project.service';
import { HttpClient } from '@angular/common/http';
import { PlaylistProjectModel } from 'src/models/PlaylistProjectModel';

@Component({
  selector: 'app-playlist-sidebar',
  templateUrl: './playlist-sidebar.component.html',
  styleUrls: ['./playlist-sidebar.component.scss']
})
export class PlaylistSidebarComponent implements OnInit {
  // @Input() playlistProjects!: Playlist;

  constructor(private sharedService: PlaylistSharedService, private http: HttpClient) { }

  playlist: Project[] = [];
  ToPost = {} as Playlist;
  url = `https://localhost:3001/api/playlist`;

  ngOnInit(): void {
    this.sharedService.sharedPlaylist.subscribe(playlist => this.playlist = playlist)
  }

  deleteProject(i: number) {
    this.playlist.splice(i,1)
  }

  postPlaylist() {
    this.ToPost.Name = "test";
    this.ToPost.MaximumNumberOfStudentsPerProject = 5;
    this.ToPost.Projects = [];
   
    for (let index = 0; index < this.playlist.length; index++) {
      let model = {} as PlaylistProjectModel;
      model.DEXId = this.playlist[index].id;
      model.Title = this.playlist[index].name;
      this.ToPost.Projects.push(model)  
    }
    
    console.log(this.ToPost);
    this.http.post(this.url, this.ToPost).toPromise().then((data: any) => {
      console.log(data)
      if(data.id > 0){
        alert("Playlist succesfully saved")
      }
      else{
        alert("Error saving playlist")
      }
    })
  }
}
