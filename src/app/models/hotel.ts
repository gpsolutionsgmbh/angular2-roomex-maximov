/**
 * Hotel class, as per API response structure
 */
export class Hotel {
    HotelId: number;
    HotelCode: string;
    HotelName: string;
    AddressLines: string[];
    PostalCode: string;
    Images: string[];
    CityName: string;
    CountryCode: string;
    CountryName: string;
    Phone: string;
    Fax: string;
    Latitude: number;
    Longitude: number;
    StarRating: number;
    HotelDescription: string;
}