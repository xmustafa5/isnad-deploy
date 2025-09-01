export interface RealEstateResponse {
    items: RealEstateItem[];
    total: number;
    page: number;
    number_page: number;
}

export interface RealEstateItem {
    geoid: string;
    number: number;
    name: LangText;
    description: LangText;
    offer_type: string;
    add_type: string;
    is_special: string;
    sale_type: string;
    location: string;
    address: LangText;
    area: number;
    interface_width: number | null;
    ownership_type: string;
    status: string;
    payment_method: string;
    is_visible: string;
    price: number;
    rent_price: number | null;
    rent_period: string;
    created_at: string; // ISO date string
    governorate: {
        geoid: string;
        name: LangText;
    };
    realEstateFiles: RealEstateFile[];
    real_estate_category: {
        geoid: string;
        name: LangText;
    };
    real_estate_type: {
        geoid: string;
        name: LangText;
    };
    house: null;
    apartment: null;
}

export interface RealEstateFile {
    geoid: string;
    path: string;
}

export interface LangText {
    en: string;
    ar: string;
}
