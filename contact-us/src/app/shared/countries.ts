interface country {
    name: {
        common: string;
        official: string;
        nativeName?: any
    };
    capital?: string[];
    region?: string;
    subregion?: string;
    population?: number;
    area?: number;
    flags?: {
        png?: string;
        svg?: string;
        alt?: string;
    };
}

interface countryList {
    [key: string]: country;
}