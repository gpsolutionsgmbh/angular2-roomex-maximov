import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

import { Hotel } from '../models/hotel';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class HotelService {
    
    constructor(private http: Http) {};

    private apiUrl = 'http://roomex.mockable.io/hotel/';
    
    getHotel(id: number): Promise<Hotel> {
        return this.http.get(this.apiUrl + id)
            .toPromise()
            .then(response => response.json() as Hotel)
            .catch(this.reportError);
    }
    
    // handle error occured during API request
    reportError(error: any): Promise<any> {
        alert('An error occured');
        return Promise.reject(error.message || error);
    }

}