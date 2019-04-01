export class Movie {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    genres: string;
    cast: string;
    year: number;
    country: string;
    runtime: number;
    age_rating: string;
    tags: string;
    streams: {
        [key: string]: MovieStreams
    };
    licensing: {
        [key: string]: MovieLicensing
    };
}

export interface MovieStreams {
    name: string;
    url: string;
}

export interface MovieLicensing {
    name?: any;
    subscription: boolean;
    ad: boolean;
    transaction: boolean;
    valid_from?: number;
    valid_till?: number 
}