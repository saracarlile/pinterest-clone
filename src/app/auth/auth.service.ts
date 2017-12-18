import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/operator/filter';
import * as auth0 from 'auth0-js';
import { HttpClient,  HttpHeaders  } from '@angular/common/http';

@Injectable()
export class AuthService {



  auth0 = new auth0.WebAuth({
    clientID: '2ckS5lR3W2a2yuJs5Fti5cbrKttmHiGf',
    domain: 'pinterest-clone.auth0.com',
    responseType: 'token id_token',
    audience: 'https://pinterest-clone.auth0.com/userinfo',
    redirectUri: 'https://shielded-crag-80225.herokuapp.com/all-pins',      
    scope: 'openid'
  });

  constructor(public router: Router, private httpClient: HttpClient) {}


  public login(): void {
    this.auth0.authorize();
  }

  public handleAuthentication(): void {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {

        console.log(authResult);

        window.location.hash = '';
        this.setSession(authResult);
       this.router.navigate(['/home']);

       this.auth0.client.userInfo(authResult.accessToken, function(err, user) {
        // Now you have the user's information
        //https://pinterest-clone.auth0.com/api/v2/users/twitter%7C17258519
        

        console.log(user);
        console.log(encodeURIComponent(user["sub"]));
        let userid = encodeURIComponent(user["sub"]);

        this.httpClient.post("/auth/user-info/",
        {
            "id": userid
        })
        .subscribe(
            data => {
                console.log("POST Request is successful ", data);
            },
            error => {
                console.log("Error", error);
            }
        );   
    
      });
    

      } else if (err) {
        this.router.navigate(['/home']);
        console.log(err);
      }
    }
  );
  }

  private setSession(authResult): void {
    // Set the time that the access token will expire at
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
  }

  public logout(): void {
    // Remove tokens and expiry time from localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    // Go back to the home route
    this.router.navigate(['/']);
  }

  public isAuthenticated(): boolean {
    // Check whether the current time is past the
    // access token's expiry time
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }

}



