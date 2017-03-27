import { HotelSummary } from './hotel-summary';

/**
 * Search results class, including HotelSummary type object and search request timestamp
 */
export class Search {
    RequestTime: string;
    HotelPricingSummaries: HotelSummary[];
}