import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { MatchMakingResult } from './matchmaking-result.model';

@Injectable({
  providedIn: 'root'
})
export class MatchmakingService {

  constructor() { }

  // sendRequestForMatchmaking: Observable<MatchMakingResult>(private http: HttpClient){
  }

