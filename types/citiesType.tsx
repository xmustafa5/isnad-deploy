export interface CitiesResponse {
    items: CityItem[];
    total_pages: number;
    per_page: number;
    current_page: number;
}

export interface CityItem {
    id: string;
    name: string;
    description: string;
    type: {
        value: number;
        label: string;
    };
    total_units: number;
    background_img: string;
    logo: string;
    is_visible: {
        value: number;
        label: string;
    };
    built_status: {
        value: number;
        label: string;
    };
    location: string;
    max_price: number;
    min_price: number;
    payment_introduction: number;
    years: number;
    is_exclusive: {
        value: number;
        lable: string;
    };
    sort_order: number;
    added_by: string;
    advantages: Advantage[];
    governorate: {
        id: string;
        name: string;
    };
    phones: Phone[];
    files: any[];
    developer: {
        id: string;
        name: string;
        logo: string;
        is_visible: {
            value: number;
            label: string;
        };
    };
}

export interface Advantage {
    id: string;
    title: string;
    type: {
        value: number;
        label: string;
    };
}

export interface Phone {
    id: string;
    number: string;
    type: {
        value: number;
        label: string;
    };
}

