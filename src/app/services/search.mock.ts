import { Injectable } from '@angular/core';
import { Search } from '../models/search';

/**
 * Mock for SearchService, for use in unit-tests
 */
@Injectable()
export class SearchMock {
    
    constructor() {};

    doSearch(): Promise<Search> {
        
        return new Promise((resolve, reject) => {
            resolve(this.mockedResponse);
        });
    }    

    mockedResponse: Search = 
{
  "RequestTime": "2017-03-27 05:56:57.835510",
  "HotelPricingSummaries": [
    {
      "HotelId": 100468,
      "HotelName": "The Fitzwilliam Hotel ",
      "Address": "St Stephen's Green, Dublin, Ireland ",
      "CountryCode": "IE",
      "StarRating": 5,
      "GeoCode": {
        "Latitude": "53.33935285184444552442",
        "Longitude": "-6.26142382621765136719"
      },
      "ThumbnailUrl": "https://static-images.roomex.com/Image/HotelImage/the_fitzwilliam_hotel_dublin-100468-8e82db3b51df9a0a5296bbb2e3fc12f4-600-400-fill.jpg",
      "CurrencyCode": "EUR",
      "Price": 448,
      "BreakfastAvailable": false,
      "DinnerAvailable": true
    },
    {
      "HotelId": 48150,
      "HotelName": "Conrad Dublin Hotel",
      "Address": "Earlsfort Terrace, Dublin, Ireland ",
      "CountryCode": "IE",
      "StarRating": 5,
      "GeoCode": {
        "Latitude": "53.33495576701235307837",
        "Longitude": "-6.25777870416641235352"
      },
      "ThumbnailUrl": "https://static-images.roomex.com/Image/HotelImage/conrad_dublin_hotel-48150-341b2bbc75cac59c1422e7a968187163-600-400-fill.jpg",
      "CurrencyCode": "EUR",
      "Price": 400.51,
      "BreakfastAvailable": true,
      "DinnerAvailable": false
    },
    {
      "HotelId": 100437,
      "HotelName": "Radisson Blu St Helens Hotel ",
      "Address": "Stillorgan Road, Dublin, Ireland ",
      "CountryCode": "IE",
      "StarRating": 5,
      "GeoCode": {
        "Latitude": "53.30477013357828042217",
        "Longitude": "-6.20571300387382507324"
      },
      "ThumbnailUrl": "https://static-images.roomex.com/Image/HotelImage/radisson_blu_st_helens_hotel_dublin-100437-2cfedb7a735f1f48befe03c6c5ec638f-600-400-fill.jpg",
      "CurrencyCode": "EUR",
      "Price": 236.32,
      "BreakfastAvailable": true,
      "DinnerAvailable": true
    },
    {
      "HotelId": 48185,
      "HotelName": "Merrion Hotel",
      "Address": "21-24 Upper Merrion Street, Dublin, Ireland ",
      "CountryCode": "IE",
      "StarRating": 5,
      "GeoCode": {
        "Latitude": "53.338616000000000",
        "Longitude": "-6.252878000000000"
      },
      "ThumbnailUrl": "https://static-images.roomex.com/Image/HotelImage/merrion_hotel_dublin-48185-a6d88d8c932c9d58be3ff09729b61184-600-400-fill.jpg",
      "CurrencyCode": "EUR",
      "Price": 540,
      "BreakfastAvailable": false,
      "DinnerAvailable": false
    },
    {
      "HotelId": 296829,
      "HotelName": "The Marker Hotel",
      "Address": "Grand Canal Square,, Dublin, Ireland ",
      "CountryCode": "IE",
      "StarRating": 5,
      "GeoCode": {
        "Latitude": "53.34444914466651255225",
        "Longitude": "-6.23879858838336076587"
      },
      "ThumbnailUrl": "https://static-images.roomex.com/Image/HotelImage/the_marker_hotel_dublin-296829-f4806f24ba04d1bcbada30dfb6aa1128-600-400-fill.jpg",
      "CurrencyCode": "EUR",
      "Price": 518,
      "BreakfastAvailable": false,
      "DinnerAvailable": true
    },
    {
      "HotelId": 65925,
      "HotelName": "Westbury Hotel Dublin ",
      "Address": "Grafton Street, Dublin 2, Ireland ",
      "CountryCode": "IE",
      "StarRating": 5,
      "GeoCode": {
        "Latitude": "53.3421",
        "Longitude": "-6.2598"
      },
      "ThumbnailUrl": "https://static-images.roomex.com/Image/HotelImage/westbury_hotel_dublin_dublin_2-65925-9ac32d2dae31b4f4166ed3ab48e31283-600-400-fill.jpg",
      "CurrencyCode": "EUR",
      "Price": 456.82,
      "BreakfastAvailable": false,
      "DinnerAvailable": false
    },
    {
      "HotelId": 100263,
      "HotelName": "Intercontinental Dublin Hotel",
      "Address": "Simmonscourt Road,ballsbridge, Dublin, Ireland ",
      "CountryCode": "IE",
      "StarRating": 5,
      "GeoCode": {
        "Latitude": "53.32655752486942191126",
        "Longitude": "-6.22588187456130981445"
      },
      "ThumbnailUrl": "https://static-images.roomex.com/Image/HotelImage/intercontinental_dublin_hotel-100263-b9d4b4a7fc3af461d6a1b1b52cbe0b87-600-400-fill.jpg",
      "CurrencyCode": "EUR",
      "Price": 392,
      "BreakfastAvailable": true,
      "DinnerAvailable": true
    }
  ]
}
    ;
    


}