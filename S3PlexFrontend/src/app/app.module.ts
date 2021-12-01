import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProjectsComponent } from './project-overview/projects/projects.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PreferenceComponent } from './preference/preference.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatchmakingGroupComponent } from './matchmaking/matchmaking-group/matchmaking-group.component';
import { FilterMenuComponent } from './project-overview/filter-menu/filter-menu.component';
import { ProjectOverviewComponent } from './project-overview/project-overview.component';
import { PlaylistSidebarComponent } from './playlist-sidebar/playlist-sidebar.component';



@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    NavbarComponent,
    ProjectDetailComponent,
    PreferenceComponent,
    MatchmakingGroupComponent,
    FilterMenuComponent,
    ProjectOverviewComponent,
    PlaylistSidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule,
    DragDropModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
