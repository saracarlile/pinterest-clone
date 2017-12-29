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
  public newPinUrl = '';  // pin url from input box
  public newPinName= '';  //pin url from input box
  public myPins = [];

  public showAddPin(): void {
    this.hideAdd = true;
  } 

  public addPin(): void {
    let name = this.newPinName;
    let url = this.newPinUrl;

    this.myPins.push({ "pinName": name, "pinUrl": url });
    this.pins.addPin({ "name": name, "url": url });

    this.newPinUrl = '';
    this.newPinName = '';
    this.hideAdd = false;

  }

  public cancelAddPin(): void {
    this.newPinUrl = '';
    this.newPinName = '';
    this.hideAdd = false;
  }

  public deletePin(i): void {

    let name = this.myPins[i]["pinName"];

    let url = this.myPins[i]["pinUrl"];

    this.myPins.splice(i, 1);

    this.pins.deletePin({"name": name, "url" : url});   
  }

  ngOnInit() {

    this.pins.getMyPins().subscribe(
      data => {

        for(let i = 0; i < data[0]["pins"].length; i++){
          this.myPins.push(data[0]["pins"][i]);
        }

      },
      error => {
        console.log("Error", error);
      }
    );

  }

  }


