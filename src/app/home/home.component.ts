import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private loginSerivce : LoginService) { }

  public login() {
    console.log('login test!');
    this.loginSerivce.twitterLogin();
  }

  ngOnInit() {
  }

}
