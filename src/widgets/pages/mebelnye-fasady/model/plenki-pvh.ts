export type PvhFilm = {
    code: string;
    name: string;
    imageSrc: string;
};

export type PvhFilmCategory = {
    id: string;
    label: string;
    items: PvhFilm[];
};

export const PVH_FILM_CATEGORIES: PvhFilmCategory[] = [
    {
        id: 'mat-wood',
        label: 'Матовые древесные',
        items: [
            {
                code: '13PG',
                name: 'Золотой ясень',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/13pg.jpg',
            },
            {
                code: '13PS',
                name: 'Серебряный ясень',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/13ps.jpg',
            },
            {
                code: '1998',
                name: 'Венге',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/1998-venge.jpg',
            },
            {
                code: '2093-7',
                name: 'Венге',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/2093-7-venge.jpg',
            },
            {
                code: '2601',
                name: 'Ирга',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/2601-irga.jpg',
            },
            {
                code: '2K055-06',
                name: 'Венге шоколад тёмный',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/2k055-06.jpg',
            },
            {
                code: '2K073-05',
                name: 'Вишня Оксфорд',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/2k073-05.jpg',
            },
            {
                code: '2K077-03',
                name: 'Дуб выбеленный',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/2k077-03.jpg',
            },
            {
                code: '2S079-05',
                name: 'Орех Гварнери',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/2s079-05.jpg',
            },
            {
                code: '2S093-01',
                name: 'Дуб сокальский',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/2s093-01.jpg',
            },
            {
                code: '3K103-01',
                name: 'Яблоня Толедо',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/3k103-01.jpg',
            },
            {
                code: '46103-23',
                name: 'Эвкалипт радужный',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/46103-23.jpg',
            },
            {
                code: '46304',
                name: 'Лимонное дерево',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/46304.jpg',
            },
            {
                code: '5F87-07',
                name: 'Сандал матовый',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/5f87-07.jpg',
            },
            {
                code: '6K0112-01',
                name: 'Орех итальянский',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/6k0112-01.jpg',
            },
            {
                code: '80701-7',
                name: 'Ясень Шимо',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/80701-7.jpg',
            },
            {
                code: '81818-8',
                name: 'Сапели тиснёный',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/81818-8.jpg',
            },
            {
                code: 'A2901-H9P',
                name: 'Алтайская лиственница тёмная',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/a2901-h9p.jpg',
            },
            {
                code: 'A3101-H9P',
                name: 'Алтайская лиственница светлая',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/a3101-h9p.jpg',
            },
            {
                code: 'BMV02G-48',
                name: 'Шёлк золотой',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/bmv02g-48.jpg',
            },
            {
                code: 'BVZ04G-39',
                name: 'Венге',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/bvz04g-39.jpg',
            },
            {
                code: 'BVZ05G-39',
                name: 'Дуб белёный',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/bvz05g-39.jpg',
            },
            {
                code: 'DA0402-3D',
                name: 'Клён',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/da0402-3d.jpg',
            },
            {
                code: 'DB0101-1',
                name: 'Клён белый жемчуг',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/db0101-1.jpg',
            },
            {
                code: 'DB0303-3D',
                name: 'Ольха',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/db0303-3d.jpg',
            },
            {
                code: 'DC0205-10',
                name: 'Лён светлый',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/dc0205-10.jpg',
            },
            {
                code: 'DC0206-10',
                name: 'Лён тёмный',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/dc0206-10.jpg',
            },
            {
                code: 'DC0209-10',
                name: 'Лён белый',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/dc0209-10.jpg',
            },
            {
                code: 'DC0210-10',
                name: 'Штрокс светлый',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/dc0210-10.jpg',
            },
            {
                code: 'DC0302-14',
                name: 'Тиковое дерево (2F101-08)',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/dc0302-14.jpg',
            },
            {
                code: 'DC0309-14',
                name: 'Лесной орех',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/dc0309-14.jpg',
            },
            {
                code: 'DE3901-38',
                name: 'Ясень дальневосточный',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/de3901-38.jpg',
            },
            {
                code: 'DE3902-38',
                name: 'Палисандр',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/de3902-38.jpg',
            },
            {
                code: 'DE3903-38',
                name: 'Тик текстурный',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/de3903-38.jpg',
            },
            {
                code: 'DH0512-10',
                name: 'Махагон',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/dh0512-10.jpg',
            },
            {
                code: 'DH1303-4',
                name: 'Венге светлый (85406-50)',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/dh1303-4.jpg',
            },
            {
                code: 'DH4301-38',
                name: 'Холст серый',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/dh4301-38.jpg',
            },
            {
                code: 'DH5301-41',
                name: 'Вяз текстурный',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/dh5301-41.jpg',
            },
            {
                code: 'DL0101-28',
                name: 'Светлый бамбук',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/dl0101-28.jpg',
            },
            {
                code: 'DL0102-28',
                name: 'Бамбук',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/dl0102-28.jpg',
            },
            {
                code: 'DL0103-28',
                name: 'Штрокс коричневый',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/dl0103-28.jpg',
            },
            {
                code: 'DL0104-29',
                name: 'Штрокс олива',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/dl0104-29.jpg',
            },
            {
                code: 'DM089-14-Y',
                name: 'Серебро чёрное',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/dm089-14-y.jpg',
            },
            {
                code: 'DM101-GW',
                name: 'Белое дерево (1155BD)',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/dm101-gw.jpg',
            },
            {
                code: 'DM677-GW',
                name: 'Ясень жемчужный матовый',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/dm677-gw.jpg',
            },
            {
                code: 'E1101-W10P',
                name: 'Сосна Карелия светлая',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/e1101-w10p.jpg',
            },
            {
                code: 'E1102-W10P',
                name: 'Сосна Карелия тёмная',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/e1102-w10p.jpg',
            },
            {
                code: 'E1201-H8P',
                name: 'Акация светлая',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/e1201-h8p.jpg',
            },
            {
                code: 'E1202-H8P',
                name: 'Акация тёмная',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/e1202-h8p.jpg',
            },
            {
                code: 'K020-05',
                name: 'Клён',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/k020-05.jpg',
            },
            {
                code: 'K021-26',
                name: 'Орех миланский',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/k021-26.jpg',
            },
            {
                code: 'MBP1421-27',
                name: 'Дуб рустикальный',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/mbp1421-27.jpg',
            },
            {
                code: 'MBP1421-28',
                name: 'Дуб натуральный',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/mbp1421-28.jpg',
            },
            {
                code: 'MBP1552-26',
                name: 'Орех',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/mbp1552-26.jpg',
            },
            {
                code: 'MBP2050-2',
                name: 'Бук натуральный',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/mbp2050-2.jpg',
            },
            {
                code: 'MBP4104-1',
                name: 'Каштан',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/mbp4104-1.jpg',
            },
            {
                code: 'MBP5000-2',
                name: 'Морёная берёза',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/mbp5000-2.jpg',
            },
            {
                code: 'MBP8051',
                name: 'Дуб выбеленный',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/mbp8051.jpg',
            },
            {
                code: 'TEB196-4W',
                name: 'Грецкий орех',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/teb196-4w.jpg',
            },
            {
                code: 'TJB159-1',
                name: 'Лиственница',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/tjb159-1.jpg',
            },
            {
                code: 'ZTE0008-19',
                name: 'Патина премиум',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/zte0008-19.jpg',
            },
            {
                code: 'ZTE1059-19',
                name: 'Венге премиум',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/zte1059-19.jpg',
            },
        ],
    },
    {
        id: 'mat-fantasy',
        label: 'Матовые фантазийные',
        items: [
            {
                code: '97002-45',
                name: 'Лаванда бежевая',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/97002-45.jpg',
            },
            {
                code: 'BS 2428-58',
                name: 'Галька бордо матовый',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/bs-2428-58.jpg',
            },
            {
                code: 'BS 2432-58',
                name: 'Галька чёрная матовый',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/bs-2432-58.jpg',
            },
            {
                code: 'BS 2615-58',
                name: 'Галька белая матовый',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/bs2615-58.jpg',
            },
            {
                code: 'DM105-11Y',
                name: 'Шёлк белый',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/dm105-11y.jpg',
            },
            {
                code: 'DM105-45',
                name: 'Техно бежевый',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/dm105-45.jpg',
            },
            {
                code: 'DM144-38',
                name: 'Нефрит белый',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/dm144-38.jpg',
            },
            {
                code: 'DM357-F6',
                name: 'Галька лайм',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/dm357-f6.jpg',
            },
            {
                code: 'DM538-38',
                name: 'Нефрит шампань',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/dm538-38.jpg',
            },
            {
                code: 'DM675-26',
                name: 'Кожа бежевая матовая',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/dm675-26.jpg',
            },
            {
                code: 'DM676-26',
                name: 'Кожа белая матовая',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/dm-676-26.jpg',
            },
            {
                code: 'DM811-45',
                name: 'Техно сталь',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/dm811-45.jpg',
            },
            {
                code: 'DN0715-26',
                name: 'Кожа коньяк матовый',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/dn0715-26.jpg',
            },
        ],
    },
    {
        id: 'gloss-solid',
        label: 'Глянцевые однотонные',
        items: [
            {
                code: 'BCK01-55',
                name: 'Ночная саванна',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/bck01-55.jpg',
            },
            {
                code: 'BCK11-55',
                name: 'Пески Сахары',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/bck11-55.jpg',
            },
            {
                code: 'BMG02-55',
                name: 'Лён золотой',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/bmg02-55.jpg',
            },
            {
                code: 'DL0901-6T',
                name: 'Страйп белый (BNA02-55)',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/dl0901-6t.jpg',
            },
            {
                code: 'DL0902-6T',
                name: 'Страйп чёрный (BNA01-55)',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/dl0902-6t.jpg',
            },
            {
                code: 'DM089-6T',
                name: 'Чёрный глянец',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/dm089-6t.jpg',
            },
            {
                code: 'DM101-6T',
                name: 'Белый глянец',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/dm101-6t.jpg',
            },
            {
                code: 'DM120-6T',
                name: 'Белый глянец',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/dm120-6t.jpg',
            },
            {
                code: 'DM201-6T',
                name: 'Лимон глянец',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/dm201-6t.jpg',
            },
            {
                code: 'DM203-6T',
                name: 'Ваниль',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/dm203-6t.jpg',
            },
            {
                code: 'DM305-6T',
                name: 'Салат глянец (BS2169-55)',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/DM305-6T.jpg',
            },
            {
                code: 'DM357-6T',
                name: 'Лайм глянец',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/DM357-6T.jpg',
            },
            {
                code: 'DM401-6T',
                name: 'Красный глянец (EFVC001)',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/DM401-6T.jpg',
            },
            {
                code: 'DM403-6T',
                name: 'Бордо глянец',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/DM403-6T.jpg',
            },
            {
                code: 'DM405-6T',
                name: 'Розовый глянец',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/DM405-6T.jpg',
            },
            {
                code: 'DM408-6T',
                name: 'Трава глянец',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/DM408-6T.jpg',
            },
            {
                code: 'DM501-6T',
                name: 'Кофе с молоком глянец',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/DM501-6T.jpg',
            },
            {
                code: 'DM503-6T',
                name: 'Кофе глянец',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/DM503-6T.jpg',
            },
            {
                code: 'DM535-6T',
                name: 'Какао глянец',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/DM535-6T.jpg',
            },
            {
                code: 'DM539-6T',
                name: 'Агат',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/DM539-6T.jpg',
            },
            {
                code: 'DM811-6T',
                name: 'Светло-серый глянец',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/DM811-6T.jpg',
            },
            {
                code: 'DM891-6T',
                name: 'Шоколад глянец',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/DM891-6T.jpg',
            },
            {
                code: 'DM895-6T',
                name: 'Тёмно-серый глянец',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/DM895-6T.jpg',
            },
            {
                code: 'EFVC006',
                name: 'Оранжевый',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/EFVC006.jpg',
            },
            {
                code: 'EFVC040',
                name: 'Ярко-жёлтый глянец',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/EFVC040.jpg',
            },
            {
                code: 'HG001',
                name: 'Белый глянец (DM101-6T)',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/HG001.jpg',
            },
            {
                code: 'HG002',
                name: 'Макиотти',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/HG002.jpg',
            },
            {
                code: 'HG003',
                name: 'Купуасу',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/HG003.jpg',
            },
            {
                code: 'HG004',
                name: 'Карамбола',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/HG004.jpg',
            },
            {
                code: 'HG005',
                name: 'Лонган',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/HG005.jpg',
            },
            {
                code: 'HG006',
                name: 'Кивано',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/HG006.jpg',
            },
            {
                code: 'HG007',
                name: 'Циан',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/HG007.jpg',
            },
            {
                code: 'HG008',
                name: 'Бонди',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/HG008.jpg',
            },
            {
                code: 'HG009',
                name: 'Личи',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/HG009.jpg',
            },
            {
                code: 'HG010',
                name: 'Инжир',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/HG010.jpg',
            },
            {
                code: 'JDL2003',
                name: 'Ваниль глянец',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/JDL2003.jpg',
            },
        ],
    },
    {
        id: 'gloss-wood',
        label: 'Глянцевые древесные',
        items: [
            {
                code: 'BMA 02-55',
                name: 'Махагон ретро',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/BMA-02-55.jpg',
            },
            {
                code: 'CW-3326A-LG',
                name: 'Красное дерево',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/CW-3326A-LG.jpg',
            },
            {
                code: 'L066-01',
                name: 'Кедр',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/L066-01.jpg',
            },
            {
                code: 'L167-05',
                name: 'Дуб выбеленный',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/L167-05.jpg',
            },
            {
                code: 'SMBP 5809-RG',
                name: 'Венге',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/SMBP-5809-RG.jpg',
            },
        ],
    },
    {
        id: 'metallic',
        label: 'Металлики',
        items: [
            {
                code: 'DW088-6T',
                name: 'Бордовый хамелеон металлик',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/DW088-6T.jpg',
            },
            {
                code: 'DW089-6T',
                name: 'Чёрный металлик',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/DW089-6T.jpg',
            },
            {
                code: 'DW101-6T',
                name: 'Белый металлик',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/DW101-6T.jpg',
            },
            {
                code: 'DW102-6T',
                name: 'Сирень металлик',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/DW102-6T.jpg',
            },
            {
                code: 'DW201-6T',
                name: 'Лимон металлик',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/DW201-6T.jpg',
            },
            {
                code: 'DW202-6T',
                name: 'Оранж металлик',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/DW202-6T.jpg',
            },
            {
                code: 'DW202B-6T',
                name: 'Оранжевый суперметаллик',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/DW202B-6T.jpg',
            },
            {
                code: 'DW203-6T',
                name: 'Апельсин металлик (SMBP 7500-22)',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/DW203-6T.jpg',
            },
            {
                code: 'DW204-6T',
                name: 'Тёмно-оранжевый металлик',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/DW204-6T.jpg',
            },
            {
                code: 'DW302-6T',
                name: 'Зелень металлик',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/DW302-6T.jpg',
            },
            {
                code: 'DW303-6T',
                name: 'Бирюза металлик',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/DW303-6T.jpg',
            },
            {
                code: 'DW304-6T',
                name: 'Небесный металлик (ВА 3102А)',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/DW304-6T.jpg',
            },
            {
                code: 'DW305-6T',
                name: 'Ночь металлик',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/DW305-6T.jpg',
            },
            {
                code: 'DW401-6T',
                name: 'Красный металлик',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/DW401-6T.jpg',
            },
            {
                code: 'DW402-6T',
                name: 'Розовый металлик',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/DW402-6T.jpg',
            },
            {
                code: 'DW402B-6T',
                name: 'Розовый суперметаллик',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/DW402B-6T.jpg',
            },
            {
                code: 'DW403-6T',
                name: 'Гранат металлик (EZVCB40)',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/DW403-6T.jpg',
            },
            {
                code: 'DW404-6T',
                name: 'Корица металлик (EZVCB45)',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/DW404-6T.jpg',
            },
            {
                code: 'DW405-6T',
                name: 'Лиловый металлик',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/DW405-6T.jpg',
            },
            {
                code: 'DW406-6T',
                name: 'Персик металлик',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/DW406-6T.jpg',
            },
            {
                code: 'DW408-6T',
                name: 'Алый металлик',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/DW408-6T.jpg',
            },
            {
                code: 'DW502-6T',
                name: 'Шампань металлик',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/DW502-6T.jpg',
            },
            {
                code: 'DW801-6T',
                name: 'Сталь металлик',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/DW801-6T.jpg',
            },
            {
                code: 'DW802-6T',
                name: 'Лазурь металлик',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/DW802-6T.jpg',
            },
            {
                code: 'DW803-6T',
                name: 'Серый металлик',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/DW803-6T.jpg',
            },
            {
                code: 'DW804-6T',
                name: 'Синий металлик (EZVC045)',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/DW804-6T.jpg',
            },
            {
                code: 'DW904-6T',
                name: 'Гламур металлик',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/DW904-6T.jpg',
            },
            {
                code: 'DW905-6T',
                name: 'Гиацинт металлик',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/DW905-6T.jpg',
            },
            {
                code: 'EZVCB17',
                name: 'Апельсин металлик',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/EZVCB17.jpg',
            },
            {
                code: 'EZVCB22',
                name: 'Лазурь металлик',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/EZVCB22.jpg',
            },
            {
                code: 'EZVCB40',
                name: 'Малина металлик',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/EZVCB40.jpg',
            },
            {
                code: 'EZVCB41',
                name: 'Олива металлик',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/EZVCB41.jpg',
            },
            {
                code: 'EZVC040',
                name: 'Глинтвейн металлик',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/EZVC040.jpg',
            },
            {
                code: 'ВА 7108А',
                name: 'Ярко-зелёный металлик',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/ВА-7108А.jpg',
            },
            {
                code: 'SG132',
                name: 'Омела металлик',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/SG132.jpg',
            },
            {
                code: 'SG182',
                name: 'Авокадо металлик',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/SG182.jpg',
            },
            {
                code: 'SG183',
                name: 'Борнео металлик',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/SG183.jpg',
            },
            {
                code: 'SG212',
                name: 'Орион металлик',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/SG212.jpg',
            },
            {
                code: 'SG223',
                name: 'Бонди металлик',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/SG223.jpg',
            },
            {
                code: 'SG225',
                name: 'Мангостин металлик',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/SG225.jpg',
            },
            {
                code: 'SG226',
                name: 'Маджента металлик',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/SG226.jpg',
            },
            {
                code: 'SG230',
                name: 'Лайм металлик',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/SG230.jpg',
            },
            {
                code: 'SG234',
                name: 'Макиотти металлик',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/SG234.jpg',
            },
            {
                code: 'SG236',
                name: 'Барбарис металлик',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/SG236.jpg',
            },
            {
                code: 'SG237',
                name: 'Лемато металлик',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/SG237.jpg',
            },
        ],
    },
    {
        id: 'metallic-fantasy',
        label: 'Металлики фантазийные',
        items: [
            {
                code: 'CW8007',
                name: 'Азалия',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/CW8007.jpg',
            },
            {
                code: 'DG401-6T',
                name: 'Микс красный',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/DG401-6T.jpg',
            },
            {
                code: 'DR114-6T',
                name: 'Джульетта',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/DR114-6T.jpg',
            },
            {
                code: 'DR403-6T',
                name: 'Азалия фиолетовая',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/DR403-6T.jpg',
            },
            {
                code: 'DR704-6T',
                name: 'Серебряный дождь (ATCPU01)',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/DR704-6T.jpg',
            },
            {
                code: 'DR705-6T',
                name: 'Огни Нью-Йорка (ATCPU02)',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/DR705-6T.jpg',
            },
            {
                code: 'DT087-6T',
                name: 'Микс чёрный',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/DT087-6T.jpg',
            },
            {
                code: 'DT107-6T',
                name: 'Микс белый',
                imageSrc: '/mebelnye-fasady/katalog-plenok-pvh/DT107-6T.jpg',
            },
        ],
    },
];


