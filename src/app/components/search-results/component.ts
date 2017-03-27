import { Component, OnInit } from '@angular/core';

import { FilterOptions } from '../../models/filter-options';
import { HotelSummary} from '../../models/hotel-summary';
import { SearchService } from '../../services/search.service';

import { SearchFilterPipe } from '../../pipes/search-filter.pipe';

@Component({
  templateUrl: './component.html'
})
export class SearchResultsComponent implements OnInit{

  results: HotelSummary[];
  filtered: HotelSummary[];
  
  filters: FilterOptions = {
    BreakfastAvailable: false,
    DinnerAvailable: false
  };

  constructor(private searchService: SearchService) {}

  ngOnInit(): Promise<any> {
    // retrieve search results
    let scope = this;
    return this.searchService.doSearch().then(function(response) {
      scope.results = response.HotelPricingSummaries;
      scope.applyFilters();     
    });
  }

  
  applyFilters(): void {
      this.filtered = new SearchFilterPipe().transform(this.results, this.filters);
  }   

}