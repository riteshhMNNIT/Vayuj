import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainserviceService {
  data = {};
  getData() : Observable<any>{ 
    return this.http.get("http://localhost:4000/getData");
  }
  constructor(private http: HttpClient) { }
}

