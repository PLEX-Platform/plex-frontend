import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import {ProjectList} from './ProjectList';


@Injectable({ providedIn: 'root' })
export class ProjectService {

  private DEXUrl = 'https://localhost:5001/api/project';  // URL to DEX web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getProjectsByPage(page : number): Observable<ProjectList> {
    return this.http.get<ProjectList>(this.DEXUrl + '?page=' + page.toString());
  }
}