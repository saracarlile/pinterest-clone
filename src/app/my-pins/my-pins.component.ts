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
    console.log('Add Pin')!
  } 

  public addPin(): void {
    let name = this.newPinName;
    let url = this.newPinUrl;
    console.log(name);
    console.log(url);

    this.myPins.push({ "pinName": name, "pinUrl": url });

    this.pins.addPin({ "name": name, "url": url });

    this.newPinUrl = '';
    this.newPinName = '';
    this.hideAdd = false;
    console.log(this.myPins);




  }

  public deletePin(i): void {

    let name = this.myPins[i]["pinName"];

    let url = this.myPins[i]["pinUrl"];
    console.log(name);
    console.log(url);

    this.myPins.splice(i, 1);

    this.pins.deletePin({"name": name, "url" : url});
    
    console.log(this.myPins);

  }

  ngOnInit() {

    this.pins.getAllPins().subscribe(
      data => {
        console.log("Get my pins is successful ", data);
        console.log(data[0]["pins"].length);
        for(let i = 0; i < data[0]["pins"].length; i++){
          this.myPins.push(data[0]["pins"][i]);
        }
        console.log(this.myPins);
      },
      error => {
        console.log("Error", error);
      }
    );

  }

  }


