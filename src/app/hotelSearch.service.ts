import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class HotelSearchService {

    constructor(private http:HttpClient) {
        console.log(JSON.stringify(httpOptions));
    }
   
    initRequest : {
        "currency": "USD",
        "posId": "hbg3h7rf28",
        "orderBy": "price asc, rating desc",
        "roomOccupancies": [
           {
              "occupants": [
                 {
                    "type": "Adult",
                    "age": 25
                 }
              ]
           }
        ],
        "stayPeriod": {
           "start": "05/22/2018",
           "end": "05/24/2018"
        },
           "bounds": {
           "circle": {
              "center": {
                 "lat": 49.0097,
                 "long": 2.5479
              },
              "radiusKm": 50.5
           }
        }
    }     

    init(){
        console.log(JSON.stringify(httpOptions));
        let body = JSON.stringify(this.initRequest);
        return this.http.post('https://public-be.oski.io/hotel/v1.0/search/init', body, {headers: new HttpHeaders({ 'oski-tenantId': 'Demo','Content-Type': 'application/json' })});
    }
}