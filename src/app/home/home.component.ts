import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { AuthService } from '../auth/auth.service';

import {HttpClient} from '@angular/common/http';
import * as auth0 from 'auth0-js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private loginSerivce : LoginService, private authService: AuthService) { }

  public login() {
    console.log('login test!');
    this.authService.login();
  }

  ngOnInit() {
  }

}
