import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProjectsComponent } from './project-overview/projects/projects.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { MatchmakingGroupComponent } from './matchmaking/matchmaking-group/matchmaking-group.component';
import { ProjectOverviewComponent } from './project-overview/project-overview.component'
//Do not capitalize any of the paths due to browser (in)compatibility
const routes: Routes = [
  { path: 'projects', component: ProjectsComponent },
  { path: 'project/:id', component: ProjectDetailComponent },
  { path: 'matchmaking', component: MatchmakingGroupComponent},
  { path: 'projectoverview', component:ProjectOverviewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
