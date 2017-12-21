import { Component, OnInit } from '@angular/core';
import { PinsService } from '../pins.service';



@Component({
  selector: 'app-my-pins',
  templateUrl: './my-pins.component.html',
  styleUrls: ['./my-pins.component.css']
})
export class MyPinsComponent implements OnInit {

  constructor(public pins: PinsService) { }

  public hideAdd = false;
  public pinUrl = '';  // pin url from input box
  public pinName= '';  //pin url from input box
  public myPins = [];

  public showAddPin(): void {
    this.hideAdd = true;
    console.log('Add Pin')!
  } 

  public addPin(): void {
    let name = this.pinName;
    let url = this.pinUrl;

    this.myPins.push({"name": this.pinName, "url" : this.pinUrl});
    
    this.pinUrl = '';
    this.pinName = '';
    this.hideAdd = false;
    console.log(this.myPins);

  }

  ngOnInit() {
  }

}
