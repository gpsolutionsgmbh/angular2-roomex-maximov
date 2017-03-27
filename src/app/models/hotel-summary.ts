import { LatLong } from './lat-long';

export class HotelSummary {
    HotelId: number;
    HotelName: string;
    Address: string;
    StarRating: number;
    GeoCode: LatLong;
    CountryCode: string;
    ThumbnailUrl: string;
    CurrencyCode: string;
    Price: number;
    BreakfastAvailable: boolean;
    DinnerAvailable: boolean;
}