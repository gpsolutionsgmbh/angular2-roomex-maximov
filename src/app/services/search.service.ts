import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

import { Search } from '../models/search';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class SearchService {
    
    constructor(private http: Http) {};

    private apiUrl = 'http://roomex.mockable.io/locationSearch';
    
    // retrieves spot details, by id provided
    doSearch(): Promise<Search> {
        return this.http.get(this.apiUrl)
            .toPromise()
            .then(response => response.json() as Search)
            .catch(this.reportError);
    }

    // handle error occured during API request
    reportError(error: any): Promise<any> {
        alert('An error occured');
        return Promise.reject(error.message || error);
    }

}