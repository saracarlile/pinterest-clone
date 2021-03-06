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
  public filtered = false;
  public filteredPins = [];

  public filterPins(index): void {

    let userId = this.allPins[index]["userId"];
    this.filteredPins = this.allPins.filter(pin => pin["userId"] == userId);
    this.filtered = true;
  }

  public clearFilter(): void {
    this.filtered = false;
    this.filteredPins = [];
  }


  ngOnInit() {

    this.pins.getAllPins().subscribe(
      data => {

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

      },
      error => {
        console.log("Error", error);
      }
    );
  }

}
