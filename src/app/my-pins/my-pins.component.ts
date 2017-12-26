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
    console.log(name);
    console.log(url);

    this.myPins.push({"name": name, "url" : url});

    this.pins.addPin({"name": name, "url" : url});
    
    this.pinUrl = '';
    this.pinName = '';
    this.hideAdd = false;
    console.log(this.myPins);

  }

  public deletePin(i): void {

    let name = this.myPins[i]["name"];

    let url = this.myPins[i]["url"];
    console.log(name);
    console.log(url);

    this.myPins.slice(i, 1);

    this.pins.deletePin({"name": name, "url" : url});
    
    console.log(this.myPins);

  }

  ngOnInit() {
  }

}
