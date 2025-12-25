export interface Product {
    title?: string;
    size?: string;
    description?: string;
    price?: number;
    priceLabel?: string;
    imageSrc?: string;
    imageClassList?: string;
    variants?: {
        price?: number;
        size?: string;
        description?: string;
    }[];
}
