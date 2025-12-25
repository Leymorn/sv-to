import type { FasadCategory } from './types';
import { NEW_COLLECTION } from './NewCollection';
import { CHANGEABLE_MILLING } from './ChangeableMilling';
import { CLASSIC_FACADES } from './Classic';
import { COUNTRY_FACADES } from './Country';
import { MODERN_FACADES } from './Modern';
import { KIDS_FACADES } from './Kids';

export const FASAD_CATEGORIES: FasadCategory[] = [
    {
        id: 'new',
        label: 'Новая коллекция',
        items: NEW_COLLECTION,
    },
    {
        id: 'changeable',
        label: 'С изменяемой фрезой',
        items: CHANGEABLE_MILLING,
    },
    {
        id: 'classic',
        label: 'Классика',
        items: CLASSIC_FACADES,
    },
    {
        id: 'country',
        label: 'Кантри',
        items: COUNTRY_FACADES,
    },
    {
        id: 'modern',
        label: 'Модерн',
        items: MODERN_FACADES,
    },
    {
        id: 'kids',
        label: 'Детские',
        items: KIDS_FACADES,
    },
];
