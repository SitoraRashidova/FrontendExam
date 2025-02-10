export interface ProductType {
    id: number;
    title: string;
    price: number;
    rating: number;
    thumbnail: string;
    description?: string
}

export interface ProductResponse {
    products: ProductType[];
    total: number;
    skip: number;
    limit: number;
}

export interface LoginType {
    username: string;
    password: string;
}