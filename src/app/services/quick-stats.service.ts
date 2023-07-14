import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { QuickStatblock } from '../models/quickstatblock';
import { Boop } from '../models/boop';

@Injectable({
  providedIn: 'root'
})
export class QuickStatsService {

  authUrl: string = `${environment.baseUrl}/quick-stats`;

  constructor(private http: HttpClient) { }
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  process(statValues:QuickStatblock): Observable<QuickStatblock>{
    // console.log("Service CR: " + statValues.CR);
    return this.http.post<QuickStatblock>(`${this.authUrl}/process`, statValues, this.httpOptions);
  }

  beep(beeped:Boop): Observable<Boop>{
    return this.http.post<Boop>(`${this.authUrl}/beep`, beeped, this.httpOptions);
  }
}
