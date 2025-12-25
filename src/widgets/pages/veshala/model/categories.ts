import type { Product } from '@/entities/product';
import {
    HOME_VESHALA_PRODUCTS,
    HOME_STELLAZH_PRODUCTS,
    FLOOR_VESHALA_PRODUCTS,
} from './products';

export interface VeshalaCategory {
    id: string;
    label: string;
    items: Product[];
    hasDecor?: boolean;
}

export const VESHALA_CATEGORIES: VeshalaCategory[] = [
    {
        id: 'home-rails',
        label: 'Вешала напольные серии «Home»',
        items: HOME_VESHALA_PRODUCTS,
        hasDecor: true,
    },
    {
        id: 'home-shelves',
        label: 'Стеллажи серии «Home»',
        items: HOME_STELLAZH_PRODUCTS,
        hasDecor: true,
    },
    {
        id: 'floor-rails',
        label: 'Вешала напольные',
        items: FLOOR_VESHALA_PRODUCTS,
    },
];
