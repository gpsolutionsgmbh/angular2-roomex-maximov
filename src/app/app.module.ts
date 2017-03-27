import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AgmCoreModule } from '../../node_modules/angular2-google-maps/core';

import { AppComponent } from './app.component';
import { HotelComponent } from './components/hotel/component';
import { SearchResultsComponent } from './components/search-results/component';

import { SearchService } from './services/search.service';
import { HotelService } from './services/hotel.service';

import { SearchFilterPipe } from './pipes/search-filter.pipe';

const appRoutes: Routes = [
  { path: 'hotel/:id', component: HotelComponent },
  { path: '', component: SearchResultsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HotelComponent,
    SearchResultsComponent,
    SearchFilterPipe
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAAjp_EttQNrYdHA5kXTmqtF6Za33YVeAY'
    })
  ],
  providers: [
    HotelService,
    SearchService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
