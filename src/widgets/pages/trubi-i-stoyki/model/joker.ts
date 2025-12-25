import type { Product } from '@/entities/product';

export interface JokerCategory {
    id: string;
    label: string;
    items: Product[];
}

export const JOKER_CATEGORIES: JokerCategory[] = [
    {
        id: 'joker',
        label: 'Система Joker',
        items: [
            {
                title: 'Type 1 DX',
                description: 'Краб на 3 трубы правый',
                imageSrc: '/trubi-i-stoyki/sistema-joker/type-1-dx.jpg',
                price: 92,
            },
            {
                title: 'Type 5',
                description: 'Соединитель внутренний',
                imageSrc: '/trubi-i-stoyki/sistema-joker/type-5.jpg',
                price: 60,
            },
            {
                title: 'Type 1 SX',
                description: 'Краб на 3 трубы левый',
                imageSrc: '/trubi-i-stoyki/sistema-joker/type-1-sx.jpg',
                price: 92,
            },
            {
                title: 'Type 18 (заглушка)',
                description: 'Заглушка для трубы',
                imageSrc: '/trubi-i-stoyki/sistema-joker/type-18-zaglushka.jpg',
                price: 15,
            },
            {
                title: 'Type 2',
                description: 'Труба, L=300 см. Черный цвет — 630 ₽',
                imageSrc: '/trubi-i-stoyki/sistema-joker/type-2.jpg',
                price: 530,
            },
            {
                title: 'Type 33',
                description: 'Наконечник — шар',
                imageSrc: '/trubi-i-stoyki/sistema-joker/type-33.jpg',
                price: 55,
            },
            {
                title: 'Type 3',
                description: 'Гайка — заглушка, металлическая',
                imageSrc: '/trubi-i-stoyki/sistema-joker/type-3.jpg',
                price: 30,
            },
            {
                title: 'Type 46A',
                description: 'Крепеж труб, Т-образный',
                imageSrc: '/trubi-i-stoyki/sistema-joker/type-46a.jpg',
                price: null,
            },
            {
                title: 'Type 4',
                description: 'Регулируемая ножка',
                imageSrc: '/trubi-i-stoyki/sistema-joker/type-4.jpg',
                price: 30,
            },
            {
                title: 'Type 15',
                description: 'Краб на 2 параллельные трубы',
                imageSrc: '/trubi-i-stoyki/sistema-joker/type-15.jpg',
                price: 85,
            },
            {
                title: 'Type 6',
                description: 'Пятак. Черный цвет — 40 ₽',
                imageSrc: '/trubi-i-stoyki/sistema-joker/type-6.jpg',
                price: 30,
            },
            {
                title: 'Type 54/1',
                description: 'Присоска',
                imageSrc: '/trubi-i-stoyki/sistema-joker/type-54-1.jpg',
                price: 10,
            },
            {
                title: 'Type 7',
                description: 'Резиновая ножка',
                imageSrc: '/trubi-i-stoyki/sistema-joker/type-7.jpg',
                price: 10,
            },
            {
                title: 'Вставка в тип 51 «крокодил»',
                description: 'Вставка «крокодил»',
                imageSrc: '/trubi-i-stoyki/sistema-joker/vstavka-v-tip-51.jpg',
                price: 10,
            },
            {
                title: 'Type 34A',
                description: 'Полуарка 360 мм',
                imageSrc: '/trubi-i-stoyki/sistema-joker/type-34a.jpg',
                price: 410,
            },
            {
                title: 'Type 9A',
                description: 'Опорное колесо',
                imageSrc: '/trubi-i-stoyki/sistema-joker/type-9a.jpg',
                price: null,
            },
            {
                title: 'Type 17',
                description: 'Арка d 550 мм',
                imageSrc: '/trubi-i-stoyki/sistema-joker/type-17.jpg',
                price: 670,
            },
            {
                title: 'Type 13B',
                description: 'Обруч для присоски',
                imageSrc: '/trubi-i-stoyki/sistema-joker/type-13b.jpg',
                price: 43,
            },
            {
                title: 'Type 18 (арка 960 мм)',
                description: 'Арка d 960 мм',
                imageSrc: '/trubi-i-stoyki/sistema-joker/type-18.jpg',
                price: 740,
            },
            {
                title: 'Type 29',
                description: 'Вешало с вращающимися крючками',
                imageSrc: '/trubi-i-stoyki/sistema-joker/type-29.jpg',
                price: null,
            },
            {
                title: 'Type 22',
                description: 'Труба П-образная L 550 мм',
                imageSrc: '/trubi-i-stoyki/sistema-joker/type-22.jpg',
                price: 520,
            },
            {
                title: 'Type 28A',
                description: 'Вешало 135°',
                imageSrc: '/trubi-i-stoyki/sistema-joker/type-28a.jpg',
                price: 330,
            },
            {
                title: 'Type 19',
                description: 'Труба П-образная L 1050 мм',
                imageSrc: '/trubi-i-stoyki/sistema-joker/type-19.jpg',
                price: 550,
            },
            {
                title: 'Type 28B',
                description: 'Вешало',
                imageSrc: '/trubi-i-stoyki/sistema-joker/type-28b.jpg',
                price: 347,
            },
            {
                title: 'Type 21',
                description: 'Уголок 200×200 мм',
                imageSrc: '/trubi-i-stoyki/sistema-joker/type-21.jpg',
                price: 270,
            },
            {
                title: 'Type 31 DX',
                description: 'Краб на 2 трубы правый',
                imageSrc: '/trubi-i-stoyki/sistema-joker/type-31-dx.jpg',
                price: 92,
            },
            {
                title: 'Type 20',
                description: 'Вешало',
                imageSrc: '/trubi-i-stoyki/sistema-joker/type-20.jpg',
                price: 384,
            },
            {
                title: 'Type 31 SX',
                description: 'Краб на 2 трубы левый',
                imageSrc: '/trubi-i-stoyki/sistema-joker/type-31-sx.jpg',
                price: 92,
            },
            {
                title: 'Type 27',
                description: 'Крепеж труб тройной параллельный',
                imageSrc: '/trubi-i-stoyki/sistema-joker/type-27.jpg',
                price: null,
            },
            {
                title: 'Type 48B',
                description: 'Полкодержатель',
                imageSrc: '/trubi-i-stoyki/sistema-joker/type-48b.jpg',
                price: null,
            },
            {
                title: 'Type 48A',
                description: 'Полкодержатель',
                imageSrc: '/trubi-i-stoyki/sistema-joker/type-48a.jpg',
                price: null,
            },
            {
                title: 'Соединитель труб параллельный «очки»',
                description: 'Соединитель труб параллельный «очки»',
                imageSrc:
                    '/trubi-i-stoyki/sistema-joker/soedinitel-trub-parallelniy.jpg',
                price: 90,
            },
            {
                title: 'Type 51',
                description: 'Соединитель для трубы и ДСП «крокодил»',
                imageSrc: '/trubi-i-stoyki/sistema-joker/type-51.jpg',
                price: 90,
            },
            {
                title: 'Соединитель внешний',
                description: 'Соединитель внешний',
                imageSrc:
                    '/trubi-i-stoyki/sistema-joker/soedinitel-vneshniy.jpg',
                price: 90,
            },
            {
                title: 'Type 57',
                description: 'Соединитель труб двойной',
                imageSrc: '/trubi-i-stoyki/sistema-joker/type-57.jpg',
                price: null,
            },
            {
                title: 'Type 62',
                description: 'Крепеж панелей регулируемый',
                imageSrc: '/trubi-i-stoyki/sistema-joker/type-62.jpg',
                price: 161,
            },
            {
                title: 'Type 59',
                description: 'Соединитель труб тройной',
                imageSrc: '/trubi-i-stoyki/sistema-joker/type-59.jpg',
                price: null,
            },
            {
                title: 'Type 80',
                description: 'Опора для полок',
                imageSrc: '/trubi-i-stoyki/sistema-joker/type-80.jpg',
                price: 140,
            },
            {
                title: 'Type 55',
                description: 'Консоль стендовая',
                imageSrc: '/trubi-i-stoyki/sistema-joker/type-55.jpg',
                price: 235,
            },
            {
                title: 'Type 81',
                description: 'Опора для полок двойная',
                imageSrc: '/trubi-i-stoyki/sistema-joker/type-81.jpg',
                price: 150,
            },
        ],
    },

    {
        id: 'uno',
        label: 'Система UNO',
        items: [
            {
                title: 'Type 21',
                description: 'Соединитель труб Т-образный. Черный цвет — 106 ₽',
                imageSrc: '/trubi-i-stoyki/sistema-uno/type-21-uno.jpg',
                price: 90,
            },
            {
                title: 'Type 22',
                description:
                    'Соединитель труб регулируемый. Черный цвет — 203 ₽',
                imageSrc: '/trubi-i-stoyki/sistema-uno/type-22-uno.jpg',
                price: 195,
            },
            {
                title: 'Type 23',
                description: 'Соединитель труб 5-лучевой',
                imageSrc: '/trubi-i-stoyki/sistema-uno/type-23-uno.jpg',
                price: 220,
            },
            {
                title: 'Type 24',
                description: 'Соединитель труб 6-лучевой',
                imageSrc: '/trubi-i-stoyki/sistema-uno/type-24-uno.jpg',
                price: 285,
            },
            {
                title: 'Type 535',
                description: 'Опора для полок',
                imageSrc: '/trubi-i-stoyki/sistema-uno/type-535-uno.jpg',
                price: null,
            },
        ],
    },

    {
        id: 'columns',
        label: 'Колонны',
        items: [
            {
                title: 'Колонна двойная',
                size: 'H = 2200 мм',
                imageSrc: '/trubi-i-stoyki/kolonni/kolonna-dvoynaya.jpg',
                price: null,
            },
            {
                title: 'Колонна тройная',
                size: 'H = 2200 мм',
                imageSrc: '/trubi-i-stoyki/kolonni/kolonna-troynaya.jpg',
                price: null,
            },
            {
                title: 'Колонна четверная',
                size: 'H = 2200 мм',
                imageSrc: '/trubi-i-stoyki/kolonni/kolonna-chetvertnaya.jpg',
                price: null,
            },
            {
                title: 'Угол вертикальный',
                imageSrc: '/trubi-i-stoyki/kolonni/ugol-vertikalniy.jpg',
                price: null,
            },
            {
                title: 'Угол тройной внешний',
                imageSrc: '/trubi-i-stoyki/kolonni/ugol-troynoy-vneshniy.jpg',
                price: null,
            },
            {
                title: 'Угол четверной',
                imageSrc: '/trubi-i-stoyki/kolonni/ugol-chetvertnoy.jpg',
                price: null,
            },
            {
                title: 'Угол горизонтальный',
                imageSrc: '/trubi-i-stoyki/kolonni/ugol-gorizontalniy.jpg',
                price: null,
            },
            {
                title: 'Угол тройной внутренний',
                imageSrc: '/trubi-i-stoyki/kolonni/ugol-troynoy-vnetrenniy.jpg',
                price: null,
            },
            {
                title: 'Полкодержатель на колонну',
                description: '1 шт.',
                imageSrc:
                    '/trubi-i-stoyki/kolonni/polkoderzhatel-na-odnu-kolonnu.jpg',
                price: null,
            },
            {
                title: 'Наконечник двойной',
                imageSrc: '/trubi-i-stoyki/kolonni/nakonechnik-dvoynoy.jpg',
                price: null,
            },
            {
                title: 'Наконечник тройной',
                imageSrc: '/trubi-i-stoyki/kolonni/nakonechnik-troynoy.jpg',
                price: null,
            },
            {
                title: 'Наконечник четверной',
                imageSrc: '/trubi-i-stoyki/kolonni/nakonechnik-chetvertnoy.jpg',
                price: null,
            },
        ],
    },
];
