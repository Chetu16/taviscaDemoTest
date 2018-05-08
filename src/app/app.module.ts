import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { FilterPipeModule } from 'ngx-filter-pipe';
/* import { GooglePlaceModule } from "ngx-google-places-autocomplete"; */
import { HttpClientModule } from '@angular/common/http';
import {HotelSearchService} from './hotelSearch.service';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FilterPipeModule,
    /* GooglePlaceModule, */
    HttpClientModule
  ],
  providers: [HotelSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
