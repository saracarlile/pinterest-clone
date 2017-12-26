import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/operator/filter';
import * as auth0 from 'auth0-js';
import { HttpClient,  HttpHeaders, HttpParams } from '@angular/common/http';

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
  

}
