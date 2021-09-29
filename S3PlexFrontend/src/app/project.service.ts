import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import {ProjectList} from './ProjectList';
import { Project } from './Project';


@Injectable({ providedIn: 'root' })
export class ProjectService {

  private DEXUrl = 'https://localhost:5001/api/';  // URL to DEX web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getProjectsByPage(page : number): Observable<ProjectList> {
    return this.http.get<ProjectList>(this.DEXUrl + 'project?page=' + page.toString() + '&amountOnPage=12');
  }

  getProjectById(id: number): Observable<Project> {
    return this.http.get<Project>(this.DEXUrl + "project/" + id.toString());
    }

  getProjectsWithAmountOnPage(page : number, amountOnPage: number): Observable<ProjectList> {
    return this.http.get<ProjectList>(this.DEXUrl + 'project?page=' + page.toString() + '&amountOnPage=' + amountOnPage.toString());
  }

  getProjectsByCategoryId(categoryId: number, amountOnPage: number): Observable<ProjectList>{
    return this.http.get<ProjectList>(this.DEXUrl + 'project?categories=' + categoryId.toString() + '&amountOnPage=' + amountOnPage.toString());
  }

  getProjectsBySearchQuery(query: string): Observable<ProjectList>{
    return this.http.get<ProjectList>(this.DEXUrl + 'Search/internal/' + query);
  }
}