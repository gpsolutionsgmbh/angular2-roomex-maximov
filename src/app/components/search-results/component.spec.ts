/* tslint:disable:no-unused-variable */

import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { TestBed, async } from '@angular/core/testing';
import { SearchResultsComponent } from './component';

import { SearchService } from '../../services/search.service';
import { SearchMock } from '../../services/search.mock';

describe('SearchResultsComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
          FormsModule,
          RouterModule
      ],
      declarations: [
        SearchResultsComponent
      ],
      providers: [
          { provide: SearchService, useClass: SearchMock }
      ]
    });
    TestBed.compileComponents();
  });

  it('should set default values for filters', async(() => {
    const fixture = TestBed.createComponent(SearchResultsComponent);
    const component = fixture.debugElement.componentInstance;

    expect(component.filters.BreakfastAvailable).toBeFalsy();
    expect(component.filters.DinnerAvailable).toBeFalsy();
  }));

  it('should not filter anything initially', async(() => {
    const fixture = TestBed.createComponent(SearchResultsComponent);
    const component = fixture.debugElement.componentInstance;

    component.ngOnInit().then(() => {
        expect(component.results.length).toEqual(component.filtered.length);
    });     
  }));

  it('should apply filters correctly', async(() => {
    const fixture = TestBed.createComponent(SearchResultsComponent);
    const component = fixture.debugElement.componentInstance;
    
    component.ngOnInit().then(() => {
        expect(component.filtered.length).toEqual(7);

        component.filters.BreakfastAvailable = true;
        component.applyFilters();
        expect(component.filtered.length).toEqual(1);

        component.filters.DinnerAvailable = true;
        component.applyFilters();
        expect(component.filtered.length).toEqual(2);

        component.filters.BreakfastAvailable = false;
        component.applyFilters();
        expect(component.filtered.length).toEqual(2);        
    });       
  }));  
  

  it('should not fail applying filters on empty result set ', async(() => {
    const fixture = TestBed.createComponent(SearchResultsComponent);
    const component = fixture.debugElement.componentInstance;
    
    component.ngOnInit().then(() => {
        component.results = [];
        component.applyFilters();
        expect(component.filtered.length).toEqual(0);
    });      
  })); 

  it('should not apply filters immediately after changing filter option', async(() => {
    const fixture = TestBed.createComponent(SearchResultsComponent);
    const component = fixture.debugElement.componentInstance;
    
    component.ngOnInit().then(() => {
        component.filters.BreakfastAvailable = true;
        component.filters.DinnerAvailable = true;
        expect(component.results.length).toEqual(component.filtered.length);
    });      
  }));  


});