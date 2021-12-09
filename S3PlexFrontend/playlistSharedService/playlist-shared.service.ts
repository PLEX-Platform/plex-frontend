import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Project } from 'src/models/Project';

@Injectable()
export class PlaylistSharedService {

  private playlist = new BehaviorSubject<Array<any>>([]);
  sharedPlaylist = this.playlist.asObservable();

  constructor() { }

  


}
