import { PlaylistProjectModel } from "./PlaylistProjectModel";

export interface Playlist
{
  Projects: PlaylistProjectModel[];
  Name : string;
  MaximumNumberOfStudentsPerProject : number;
}
