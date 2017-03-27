import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Hotel } from '../../models/hotel';

import { HotelService } from '../../services/hotel.service';

import {
  SebmGoogleMap,
  SebmGoogleMapMarker,
  SebmGoogleMapInfoWindow
} from 'angular2-google-maps/core';

@Component({
  templateUrl: './component.html',
  styles: [
    '.thumb { width: 100px; height: 100px; margin: 5px; object-fit: cover; display: inline-block;  }',
    '.sebm-google-map-container { height: 450px; }'
  ]
})
export class HotelComponent{

  hotel: Hotel;

  constructor(private hotelService: HotelService, private route: ActivatedRoute) {}

  ngOnInit(): Promise<any> {
    return this.hotelService.getHotel(+this.route.snapshot.params['id']).then(response => this.hotel = response);
  }  

}