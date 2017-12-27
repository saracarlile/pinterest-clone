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
            let userName = data[j].name;
            let picture = data[j].picture;
            let id = data[j].id;
            for(let i = 0; i < data[j]["pins"].length; i++) {
              let custPinObject = {
                pinName: data[j]["pins"][i]["pinName"],
                pinUrl: data[j]["pins"][i]["pinUrl"],
                pinUser: data[j]["pins"][i]["pinUser"],
                pinUserName: userName,
                userId: id, 
                userPicture: picture 
              }

              this.allPins.push(custPinObject);
            }

            
        }

        console.log(this.allPins);
      },
      error => {
        console.log("Error", error);
      }
    );
  }

}
