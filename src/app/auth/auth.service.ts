import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/operator/filter';
import * as auth0 from 'auth0-js';
import { HttpClient,  HttpHeaders, HttpParams } from '@angular/common/http';

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

  constructor(public router: Router, private http: HttpClient) {}

  public userid: string;
  public cookie: string;


  public login(): void {
    this.auth0.authorize();
  }

  public handleAuthentication(): void {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {


        window.location.hash = '';
        this.setSession(authResult);
       this.router.navigate(['/home']);

       this.auth0.client.userInfo(authResult.accessToken, (err, user) => {
        // Now you have the user's information
        //https://auth0.com/docs/api/management/v2/tokens
        

      
        this.userid = encodeURIComponent(user["sub"]);

        this.http.post("/auth/user-info/",
        {
            "id": this.userid
        })
        .subscribe(
            data => {
                this.useToken(data["access_token"]);
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

  public useToken(token): void {

    var params = new HttpParams();
    params = params.append('token', token);
    params = params.append('id', this.userid);

    this.http.get("/auth/use-token/",
      {
        params
      })
      .subscribe(
      data => {
        console.log("GET Request is successful ", data);

      },
      error => {
        console.log("Error", error);
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


    this.http.post('/auth/logout', {}).subscribe();  //clear authenticated cookie server side

    document.cookie = "authenticated=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";  //delete authenticated cookie client side

    this.router.navigate(['/']);
  }

  public isAuthenticated(): boolean {
    // Check whether the current time is past the
    // access token's expiry time
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }

}



