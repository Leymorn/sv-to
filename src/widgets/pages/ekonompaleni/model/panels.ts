import type { Product } from '@/entities/product';
export interface SolidColorOption {
    id: string;
    label: string;
    color: string;
}

export interface TextureColorOption {
    id: string;
    label: string;
    imageSrc: string;
}

interface PanelColorOptions {
    solidColors: SolidColorOption[];
    textureColors: TextureColorOption[];
}

export interface PanelVariant {
    id: string;
    title: string;
    stepSize: number;
    pricing: Product[];
    colorOptions?: PanelColorOptions;
    description?: string;
}

const SOLID_COLORS: SolidColorOption[] = [
    { id: 'white', label: 'Белый', color: '#ffffff' },
    { id: 'black', label: 'Чёрный', color: '#2f2f2f' },
    { id: 'graphite', label: 'Графит', color: '#6e6f75' },
    { id: 'platinum', label: 'Платина', color: '#cfd0d4' },
    { id: 'gray', label: 'Серый', color: '#ececec' },
    { id: 'cream', label: 'Кремовый', color: '#f3f2c9' },
    { id: 'dusty-gray', label: 'Серый пыльный', color: '#dcdcde' },
    { id: 'olive', label: 'Оливковый', color: '#a3b344' },
    { id: 'yellow', label: 'Жёлтый', color: '#f6d75e' },
    { id: 'blue', label: 'Синий', color: '#0d49b3' },
    { id: 'red', label: 'Красный', color: '#ce1f10' },
];

const TEXTURE_COLORS: TextureColorOption[] = [
    {
        id: 'bianko-karra',
        label: 'Бьянко карра',
        imageSrc: '/ekonompaneli/bianko-karra.jpg',
    },
    {
        id: 'buk-nevskiy',
        label: 'Бук Невский',
        imageSrc: '/ekonompaneli/buk-nevskiy.jpg',
    },
    {
        id: 'cherniy-texture',
        label: 'Чёрный',
        imageSrc: '/ekonompaneli/cherniy.jpg',
    },
    {
        id: 'dub-delano',
        label: 'Дуб Делано',
        imageSrc: '/ekonompaneli/dub-delano.jpg',
    },
    {
        id: 'dub-sonoma',
        label: 'Дуб Сонома',
        imageSrc: '/ekonompaneli/dub-sonoma.jpg',
    },
    {
        id: 'dub-votan',
        label: 'Дуб Вотан',
        imageSrc: '/ekonompaneli/dub-votan.jpg',
    },
    {
        id: 'old-style',
        label: 'Олд Стайл',
        imageSrc: '/ekonompaneli/old-style.jpg',
    },
    { id: 'oreh', label: 'Орех', imageSrc: '/ekonompaneli/oreh-zakaz.jpg' },
    { id: 'venge', label: 'Венге', imageSrc: '/ekonompaneli/venge.jpg' },
    { id: 'vishnya', label: 'Вишня', imageSrc: '/ekonompaneli/vishnya.jpg' },
];

export const PANEL_VARIANTS: PanelVariant[] = [
    {
        id: 'colored',
        title: 'Экономпанель Цветная',
        stepSize: 100,
        colorOptions: {
            solidColors: SOLID_COLORS,
            textureColors: TEXTURE_COLORS,
        },
        pricing: [
            {
                size: '1200 × 2400 мм',
                description: 'Толщина: 18 мм',
                price: 3850,
                title: 'Чёрный, Серый, Серый пыльный, Графит, Венге, Дуб Сонома, Крем, Акация, Бук Невский, Платина, Олд Стайл, Дуб Вотан, Дуб Делано, Оливковый, Дуб белый',
            },
            {
                size: '1200 × 1800 мм',
                description: 'Толщина: 16 мм',
                price: 3100,
                title: 'Дуб Сонома, Серый, Чёрный',
            },
            {
                size: '1200 × 1800 мм',
                description: 'Толщина: 18 мм',
                price: 3190,
                title: 'Дуб Сонома, Серый',
            },
            {
                size: '1200 × 1800 мм',
                description: 'Толщина: 16, 18 мм',
                price: 3290,
                title: 'Чёрный',
            },
        ],
    },
    {
        id: 'white',
        title: 'Экономпанель Белая',
        stepSize: 100,
        colorOptions: {
            solidColors: SOLID_COLORS.filter((color) => color.id === 'white'),
            textureColors: [],
        },
        pricing: [
            {
                size: '1200 × 2400 мм',
                description: 'Толщина: 16 мм',
                price: 3440,
                title: 'Нано',
            },
            {
                size: '1200 × 1800 мм',
                description: 'Толщина: 16, 18 мм',
                price: 3080,
                title: 'Стандарт',
            },
            {
                size: '1200 × 2400 мм',
                description: 'Толщина: 18 мм',
                price: 3590,
                title: 'Стандарт',
            },
            {
                size: '1200 × 2400 мм',
                description: 'Толщина: 13,3 мм',
                price: 2950,
                title: 'Штрих',
            },
        ],
    },
    {
        id: 'step-50',
        title: 'Экономпанель (шаг пазов 50 мм)',
        stepSize: 50,
        colorOptions: {
            solidColors: SOLID_COLORS.filter(
                (color) => color.id === 'white' || color.id === 'black'
            ),
            textureColors: [],
        },
        pricing: [
            {
                size: '1200 × 2400 мм',
                description: 'Толщина: 16, 18 мм',
                price: 4050,
                title: 'Белая',
            },
            {
                size: '1200 × 1800 мм',
                description: 'Толщина: 18 мм',
                price: 3450,
                title: 'Белая',
            },
            {
                size: '1200 × 2400 мм',
                description: 'Толщина: 16, 18 мм',
                price: 4250,
                title: 'Чёрная',
            },
        ],
    },
    {
        id: 'horizontal',
        title: 'Экономпанель горизонтальная',
        stepSize: 100,
        colorOptions: {
            solidColors: SOLID_COLORS.filter(
                (color) => color.id === 'white' || color.id === 'black'
            ),
            textureColors: [],
        },
        pricing: [
            {
                size: '2400 × 1200 мм',
                description: 'Толщина: 16 мм',
                price: 3790,
                title: 'Белая',
            },
        ],
    },
    {
        id: 'half',
        title: 'Экономпанель 1/2',
        stepSize: 100,
        colorOptions: {
            solidColors: SOLID_COLORS.filter(
                (color) => color.id === 'white' || color.id === 'black'
            ),
            textureColors: [],
        },
        pricing: [
            {
                size: '1200 × 1200 мм',
                description: 'Толщина: 16, 18 мм',
                price: 2130,
                title: 'Белая',
            },
        ],
    },
    {
        id: 'plastic',
        title: 'Экономпанель пластиковая',
        stepSize: 100,
        colorOptions: {
            solidColors: SOLID_COLORS.filter(
                (color) => color.id === 'white' || color.id === 'black'
            ),
            textureColors: [],
        },
        pricing: [
            {
                size: '1200 × 2400 мм',
                price: 2950,
            },
        ],
    },
    {
        id: 'second',
        title: 'Э/П в ассортименте, 2й сорт',
        stepSize: 100,
        colorOptions: {
            solidColors: SOLID_COLORS.filter(
                (color) => color.id === 'white' || color.id === 'black'
            ),
            textureColors: [],
        },
        pricing: [
            {
                description:
                    'Распродажа со склада панелей с незначительными дефектами (сколы, царапины и пр.). Стандартный размер 1200×2400 мм. Цвета, наличие и размеры уточняйте у менеджеров. ',
                price: '1000 - 2600',
            },
        ],
    },
];
