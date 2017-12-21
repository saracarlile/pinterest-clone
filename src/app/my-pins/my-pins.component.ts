import { Component, OnInit } from '@angular/core';
import { PinsService } from '../pins.service';



@Component({
  selector: 'app-my-pins',
  templateUrl: './my-pins.component.html',
  styleUrls: ['./my-pins.component.css']
})
export class MyPinsComponent implements OnInit {

  constructor(public pins: PinsService) { }

  public addPin(): void {
    console.log('Add Pin')!
  } 

  ngOnInit() {
  }

}
