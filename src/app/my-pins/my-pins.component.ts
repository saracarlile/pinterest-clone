import { Component, OnInit } from '@angular/core';
import { PinsService } from '../pins.service';


declare var jquery:any;
declare var $ :any;


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



    $("#target").click(function () {
      // Looping through all image elements from http://makitweb.com/check-broken-image-jquery-ajax/
      $("img").each(function () {
        var element = $(this);

        $.ajax({
          url: $(this).attr('src'),
          type: 'get',
          async: false,
          error: function (response) {

            var replace_src = "https://www.mylessonplanner.com/images/icons/DefaultIcon/png/256x256/MD-picture-broken-link.png";
            // Again check the default image
            $.ajax({
              url: replace_src,
              type: 'get',
              async: false,
              success: function () {
                $(element).attr('src', replace_src);
              },
              error: function (response) {
                $(element).hide();
              }
            });
          }
        });
      });

    });

    $("#target").trigger("click");  // target 'hidden' button for click event to trigger jquery broken image link check (above)

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


