export interface LanguageField {
    en: string;
    ar: string;
}

interface Discount {
    id: string;
    discount: string;
    is_active: string;
}

export interface DepartmentType {
    id: string;
    name: LanguageField;
    img: string;
    is_active: string;
    discount: Discount;
}

interface Governorate {
    id: string;
    name: LanguageField;
}

interface Link {
    id: string;
    title: LanguageField;
    url: string;
}

export interface CompanyType {
    id: string;
    name: LanguageField;
    type: string;
    background_img: string | null;
    logo: string | null;
    address: LanguageField;
    location: string;
    specialization: LanguageField;
    isnad_invoice: number;
    is_active: string;
    departments: Department[];
    governorate: Governorate;
    links: Link[];
}

export interface CompaniesResponse {
    items: CompanyType[];
}

export interface companyTypeDetails {
    item: CompanyType;
}