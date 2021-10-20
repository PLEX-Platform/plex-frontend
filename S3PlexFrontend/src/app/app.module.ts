import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProjectsComponent } from './projects/projects.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PreferenceComponent } from './preference/preference.component';
import {DragDropModule} from '@angular/cdk/drag-drop';


@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    NavbarComponent,
    ProjectDetailComponent,
    PreferenceComponent,
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
