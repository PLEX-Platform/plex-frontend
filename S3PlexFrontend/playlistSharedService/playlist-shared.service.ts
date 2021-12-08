import { Injectable } from '@angular/core';
import { Project } from 'src/models/Project';

@Injectable({
  providedIn: 'root'
})
export class PlaylistSharedService {

  constructor() { }

  playlist: Project[] = []

}
