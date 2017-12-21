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

       this.auth0.client.userInfo(authResult.accessToken, (err, user) => {
        // Now you have the user's information
        //https://pinterest-clone.auth0.com/api/v2/users/twitter%7C17258519
        //https://auth0.com/docs/api/management/v2/tokens
        

        console.log(user);
        console.log(encodeURIComponent(user["sub"]));
        this.userid = encodeURIComponent(user["sub"]);

        this.http.post("/auth/user-info/",
        {
            "id": this.userid
        })
        .subscribe(
            data => {
                console.log("POST Request is successful ", data);
                console.log(data["access_token"]);
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
    console.log(params);
    console.log(token);
    console.log(this.userid);

    this.http.get("/auth/use-token/",
      {
        params
      })
      .subscribe(
      data => {
        console.log("GET Request is successful ", data);
        var x = document.cookie;  //this is just for testing purposes
        console.log(x);

        function getCookie(cname) { //we create a function that returns the value of a specified cookie
          var name = cname + "=";
          var decodedCookie = decodeURIComponent(document.cookie);
          var ca = decodedCookie.split(';');
          for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
              c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
              return c.substring(name.length, c.length);
            }
          }
          return "";
        }

        console.log(getCookie(x));

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

    var x = document.cookie;
    console.log(x);

    this.http.post('/auth/logout', {
      login: 'foo',
      password: 'bar'
    }).subscribe();

    this.router.navigate(['/']);
  }

  public isAuthenticated(): boolean {
    // Check whether the current time is past the
    // access token's expiry time
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }

}



