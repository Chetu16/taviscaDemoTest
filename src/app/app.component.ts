import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  id = "";
  hotelList : any[] = 
  [
    {
      "name" : "HotelName1",
      "location" : "New York",
      "detailAddress" : "Road number 123 New York",
      "currency" : "$",
      "price" : 136,
    },
    {
      "name" : "HotelName2",
      "location" : "Washington",
      "detailAddress" : "Road number 123 Washington",
      "currency" : "$",
      "price" : 79,
    },
    {
      "name" : "HotelName3",
      "location" : "Las Vegas",
      "detailAddress" : "Road number 123 Las Vegas",
      "currency" : "$",
      "price" : 256,
    },
    {
      "name" : "HotelName4",
      "location" : "Texas",
      "detailAddress" : "Road number 123 Texas",
      "currency" : "$",
      "price" : 204,
    },
  ]
}
