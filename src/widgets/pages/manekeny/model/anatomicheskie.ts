import type { Product } from '@/entities/product';

export interface AnatomicalCategory {
    id: string;
    label: string;
    items: Product[];
}

export const ANATOMICHESKIE_CATEGORIES: AnatomicalCategory[] = [
    {
        id: 'individual',
        label: 'Манекены анатомические индивидуальные',
        items: [
            {
                title: 'Мужской манекен',
                imageSrc:
                    '/manekeny-anatomicheskie/manekeny-anatomicheskie-muzhskie.jpg',
                price: 9500,
            },
            {
                title: 'Женский манекен',
                imageSrc:
                    '/manekeny-anatomicheskie/manekeny-anatomicheskie-zhenskie.jpg',
                price: 8400,
            },
            {
                title: 'Детский манекен',
                imageSrc:
                    '/manekeny-anatomicheskie/manekeny-anatomicheskie-detskie.jpg',
                price: 4800,
            },
        ],
    },
    {
        id: 'male',
        label: 'Манекены мужские',
        items: [
            {
                title: 'CGE-11',
                imageSrc:
                    '/manekeny-anatomicheskie/manekeny-muzhskie-CGE-11.jpg',
                price: 12500,
            },
            {
                title: 'JL-10',
                imageSrc:
                    '/manekeny-anatomicheskie/manekeny-muzhskie-JL-10.jpg',
                price: 12500,
            },
            {
                title: 'YM-7 01',
                imageSrc:
                    '/manekeny-anatomicheskie/manekeny-muzhskie-YM-7 01.jpg',
                price: 12500,
            },
            {
                title: 'JM-36(K)',
                imageSrc:
                    '/manekeny-anatomicheskie/manekeny-muzhskie-JM-36.jpg',
                price: 12500,
            },
            {
                title: 'JM-34(K)',
                imageSrc:
                    '/manekeny-anatomicheskie/manekeny-muzhskie-JM-34(K).jpg',
                price: 12500,
            },
            {
                title: 'Манекен мужской 3',
                imageSrc: '/manekeny-anatomicheskie/manekeny-muzhskie-3.jpg',
                price: 12500,
            },
            {
                title: 'Манекен мужской',
                imageSrc: '/manekeny-anatomicheskie/manekeny-muzhskie-0.jpg',
                price: 12500,
            },
            {
                title: 'Манекен мужской 1',
                imageSrc: '/manekeny-anatomicheskie/manekeny-muzhskie-1.jpg',
                price: 12500,
            },
            {
                title: 'GM32',
                imageSrc: '/manekeny-anatomicheskie/manekeny-muzhskie-GM32.jpg',
                price: 12500,
            },
        ],
    },
    {
        id: 'kids',
        label: 'Манекены детские',
        items: [
            {
                title: 'JBL 3G',
                imageSrc:
                    '/manekeny-anatomicheskie/manekeny-detskie-JBL-3G.jpg',
                price: null,
            },
            {
                title: 'JBL 5G',
                imageSrc:
                    '/manekeny-anatomicheskie/manekeny-detskie-JBL-5G.jpg',
                price: null,
            },
        ],
    },
    {
        id: 'glossy',
        label: 'Манекены глянцевые',
        items: [
            {
                title: 'AB-48M',
                imageSrc:
                    '/manekeny-anatomicheskie/manekeny-glancecvye-AB-48M.jpg',
                price: 12500,
            },
            {
                title: 'FBMEAL2',
                imageSrc:
                    '/manekeny-anatomicheskie/manekeny-glancecvye-FBMEAL2.jpg',
                price: 12500,
            },
            {
                title: 'FBLA-YE1',
                imageSrc:
                    '/manekeny-anatomicheskie/manekeny-glancecvye-FBLA-YE1.jpg',
                price: 12500,
            },
            {
                title: 'CM-23M',
                description: 'Цвета: белый глянец, чёрный глянец',
                imageSrc:
                    '/manekeny-anatomicheskie/manekeny-glancecvye-CM-23M.jpg',
                price: 12500,
            },
            {
                title: 'CM-28M',
                description: 'Цвета: белый глянец, чёрный глянец',
                imageSrc:
                    '/manekeny-anatomicheskie/manekeny-glancecvye-CM-28M.jpg',
                price: 12500,
            },
            {
                title: 'J01',
                description: 'Цвета: белый глянец, чёрный глянец',
                imageSrc:
                    '/manekeny-anatomicheskie/manekeny-glancecvye-J01.jpg',
                price: 12500,
            },
            {
                title: 'J03',
                description: 'Цвета: белый глянец, чёрный глянец',
                imageSrc:
                    '/manekeny-anatomicheskie/manekeny-glancecvye-J03.jpg',
                price: 12500,
            },
            {
                title: 'J05',
                description: 'Цвета: белый глянец, чёрный глянец',
                imageSrc:
                    '/manekeny-anatomicheskie/manekeny-glancecvye-J05.jpg',
                price: 12500,
            },
        ],
    },
    {
        id: 'sitting',
        label: 'Манекены сидячие',
        items: [
            {
                title: 'JLN-16',
                imageSrc:
                    '/manekeny-anatomicheskie/manekeny-sidyachie-JLN-16.jpg',
                price: null,
            },
            {
                title: 'JMN-03',
                imageSrc:
                    '/manekeny-anatomicheskie/Jmanekeny-sidyachie-MN-03.jpg',
                price: null,
            },
        ],
    },
    {
        id: 'plastic',
        label: 'Манекены пластиковые',
        items: [
            {
                title: 'M-1 / MW-1',
                description: 'Мужской манекен',
                imageSrc:
                    '/manekeny-anatomicheskie/manekeny-plastikovye-m-1-mw-1.jpg',
                price: 12790,
            },
            {
                title: 'M-1 / MW-2',
                description: 'Мужской манекен',
                imageSrc:
                    '/manekeny-anatomicheskie/manekeny-plastikovye-m-1-mw-2.jpg',
                price: 12790,
            },
            {
                title: 'F02 / A01 / S21',
                description: 'Женский манекен',
                imageSrc:
                    '/manekeny-anatomicheskie/manekeny-plastikovye-f02-a01-s21.jpg',
                price: 12790,
            },
            {
                title: 'F04 / A03 / S25',
                description: 'Женский манекен',
                imageSrc:
                    '/manekeny-anatomicheskie/manekeny-plastikovye-f04-a03-s25.jpg',
                price: 12790,
            },
            {
                title: 'D02 / B5',
                description: 'Детский манекен',
                imageSrc:
                    '/manekeny-anatomicheskie/manekeny-plastikovye-d02-b5.jpg',
                price: 5100,
            },
            {
                title: 'D2 / B4',
                description: 'Детский манекен',
                imageSrc:
                    '/manekeny-anatomicheskie/manekeny-plastikovye-d2-b4.jpg',
                price: 5100,
            },
            {
                title: 'D01',
                description: 'Детский манекен',
                imageSrc:
                    '/manekeny-anatomicheskie/manekeny-plastikovye-d01.jpg',
                price: 5100,
            },
            {
                title: 'D02 / B3',
                description: 'Детский манекен',
                imageSrc:
                    '/manekeny-anatomicheskie/manekeny-plastikovye-d02-b3.jpg',
                price: 5100,
            },
        ],
    },
    {
        id: 'pregnant',
        label: 'Манекены беременные',
        items: [
            {
                title: 'JPG 1 - JL 34',
                imageSrc:
                    '/manekeny-anatomicheskie/manekeny-beremennye-JPG-1-JL-34.jpg',
                price: null,
            },
            {
                title: 'JPG 1 - JL 7',
                imageSrc:
                    '/manekeny-anatomicheskie/manekeny-beremennye-JPG-1-JL-7.jpg',
                price: null,
            },
        ],
    },
    {
        id: 'plus-size',
        label: 'Манекены полные',
        items: [
            {
                title: 'JPBIG 1-B',
                imageSrc:
                    '/manekeny-anatomicheskie/manekeny-polnye-JPBIG-1-B.jpg',
                price: null,
            },
            {
                title: 'JPBIG 1-C',
                imageSrc:
                    '/manekeny-anatomicheskie/manekeny-polnye-JPBIG-1-C.jpg',
                price: null,
            },
        ],
    },
    {
        id: 'lux',
        label: 'Манекены нестандартные класса LUX',
        items: [
            {
                title: 'YF-19',
                imageSrc: '/manekeny-anatomicheskie/manekeny-lux-YF-19.jpg',
                price: 12500,
            },
            {
                title: 'EVA01 / EVA02',
                imageSrc:
                    '/manekeny-anatomicheskie/manekeny-lux-EVA01-EVA02.jpg',
                price: 12500,
            },
            {
                title: 'LEM22',
                imageSrc: '/manekeny-anatomicheskie/manekeny-lux-LEM22.jpg',
                price: 12500,
            },
            {
                title: 'ROS3',
                imageSrc: '/manekeny-anatomicheskie/manekeny-lux-ROS3.jpg',
                price: 12500,
            },
            {
                title: 'CO-5',
                imageSrc: '/manekeny-anatomicheskie/manekeny-lux-CO-5.jpg',
                price: 12500,
            },
            {
                title: 'CO-17 light',
                imageSrc:
                    '/manekeny-anatomicheskie/manekeny-lux-CO-17-ligt.jpg',
                price: 12500,
            },
            {
                title: 'CO-19',
                imageSrc: '/manekeny-anatomicheskie/manekeny-lux-CO-19.jpg',
                price: 12500,
            },
            {
                title: 'RF-7',
                imageSrc: '/manekeny-anatomicheskie/manekeny-lux-RF-7.jpg',
                price: 12500,
            },
            {
                title: 'YF-8 / W-11',
                imageSrc: '/manekeny-anatomicheskie/manekeny-lux-YF-8-W-11.jpg',
                price: 12500,
            },
        ],
    },
];
