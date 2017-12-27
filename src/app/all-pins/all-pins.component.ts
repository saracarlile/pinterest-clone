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
        console.log(data.length);
        for(let j = 0; j < data.length; j++){
            this.allPins.push(data[j]);
        }

        console.log(this.allPins);
      },
      error => {
        console.log("Error", error);
      }
    );
  }

}
