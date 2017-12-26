import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/operator/filter';
import * as auth0 from 'auth0-js';
import { HttpClient,  HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/forkJoin';

@Injectable()
export class PinsService {

  constructor(public router: Router, private http: HttpClient) { }

  public addPin(pinInfo): void {

    const body = pinInfo;
    
    
    this.http.post("/pin/add-pin",
        body)
        .subscribe(
            data => {
                console.log("POST Request is successful ", data);
            },
            error => {
                console.log("Error", error);
            }
        );  
  }

  public deletePin(pinInfo): void {

    const body = pinInfo;
    
    
    this.http.post("/pin/delete-pin",
        body)
        .subscribe(
            data => {
                console.log("POST Request is successful ", data);
            },
            error => {
                console.log("Error", error);
            }
        );  
  }


  public getAllPins(): Observable<any> {
      return this.http.get('pins/my-pins');

  }
}
