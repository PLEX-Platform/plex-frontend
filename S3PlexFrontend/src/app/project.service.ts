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
    return this.http.get<ProjectList>(this.DEXUrl + '?page=' + page.toString() + '&amountOnPage=12');
  }

  getProjectsWithAmountOnPage(page : number, amountOnPage: number): Observable<ProjectList> {
    return this.http.get<ProjectList>(this.DEXUrl + '?page=' + page.toString() + '&amountOnPage=' + amountOnPage.toString());
  }

  getProjectsByCategoryId(categoryId: number, amountOnPage: number): Observable<ProjectList>{
    return this.http.get<ProjectList>(this.DEXUrl + '?categories=' + categoryId.toString() + '&amountOnPage=' + amountOnPage.toString());
  }

  getProjectsBySearchQuery(query: string): Observable<ProjectList>{
    return this.http.get<ProjectList>('https://localhost:5001/api/Search/internal' + query);
  }
}