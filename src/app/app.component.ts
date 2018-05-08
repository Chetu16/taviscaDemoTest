import { Component } from '@angular/core';
import { FilterPipe } from 'ngx-filter-pipe';
import {HotelSearchService} from './hotelSearch.service';

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
  ];

  hotelFilter: any = { location: '' };

  constructor(private filterPipe: FilterPipe, private hotelSearchService : HotelSearchService) {
    /* console.log(filterPipe.transform(this.hotelList, { location: 'M'})); */
  }

  searchHotels(){
    this.hotelSearchService.init().subscribe(
       data => {
         console.log(data);
       },
       error => {
         console.error("Error on initializing search");
       }
    );
  }
}
