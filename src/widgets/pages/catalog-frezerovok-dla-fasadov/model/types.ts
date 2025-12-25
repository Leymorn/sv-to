export interface FasadCard {
    imageSrc: string;
    text: string;
}

export interface FasadCategory {
    id: string;
    label: string;
    items: FasadCard[];
}
