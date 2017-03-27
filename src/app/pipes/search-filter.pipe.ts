import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { FilterOptions } from '../models/filter-options';

@Pipe({
 name: 'searchfilter'
})

@Injectable()
export class SearchFilterPipe implements PipeTransform {
 transform(items: any[], flags: FilterOptions): any[] {
   if (!items) return [];
   return items.filter(function(item) {
     let allowed = true;
     let trueValues = 0;

     for (let key in flags) {
        let value = flags[key];
        if (value) trueValues++;
        if (item[key] != value) allowed = false;
     }

     return trueValues != 0 ? allowed : true;
   });
 }
}