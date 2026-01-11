export interface Product {
    title?: string;
    size?: string;
    description?: string;
    price?: number | string | null;
    priceLabel?: string;
    imageSrc?: string;
    imageClassList?: string;
    variants?: {
        price?: number | string | null;
        size?: string;
        description?: string;
    }[];
}
