import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class LoginService {

  constructor(private http: HttpClient) { }



  public twitterLogin() {  //user login with TWitter
    this.http.get('/auth/twitter').subscribe(data => {
      console.log(data);
    });
  }

}
