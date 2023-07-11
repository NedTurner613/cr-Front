import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient,HttpHeaders } from '@angular/common/http';

import { GimmeMan } from '../models/gimmeMan';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GimmegimmeService {
  
  authUrl: string = `${environment.baseUrl}/gimme`;
  // gibTo?:GimmeMan

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  process(input:GimmeMan): Observable<GimmeMan> {
    return this.http.post<GimmeMan>(`${this.authUrl}/process`, input, this.httpOptions);
  }
}
