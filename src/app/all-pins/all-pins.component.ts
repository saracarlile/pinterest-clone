import { Component, OnInit } from '@angular/core';
import { PinsService } from '../pins.service';

@Component({
  selector: 'app-all-pins',
  templateUrl: './all-pins.component.html',
  styleUrls: ['./all-pins.component.css']
})
export class AllPinsComponent implements OnInit {

  constructor(public pins: PinsService) { }

  public allPins = [];


  ngOnInit() {

    this.pins.getAllPins().subscribe(
      data => {
        console.log("Get all pins is successful ", data);
        console.log(data[0]["pins"].length);
        for(let i = 0; i < data[0]["pins"].length; i++){
          this.allPins.push(data[0]["pins"][i]);
        }
        console.log(this.allPins);
      },
      error => {
        console.log("Error", error);
      }
    );
  }

}
