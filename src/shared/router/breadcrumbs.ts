import type { BreadCrumbItem } from '../model/BreadCrumb';
import { ROUTES } from './routes';

const HOME: BreadCrumbItem = { label: 'Главная', href: ROUTES.INDEX };
const ABOUT: BreadCrumbItem = { label: 'О компании', href: ROUTES.ABOUT };
const PROIZVODSTVO: BreadCrumbItem = {
    label: 'Производство',
    href: ROUTES.PROIZVODSTVO,
};
const KONTAKTY: BreadCrumbItem = {
    label: 'Контакты',
    href: ROUTES.KONTAKTY,
};
const CATALOG: BreadCrumbItem = {
    label: 'Каталог',
    href: ROUTES.CATALOG.INDEX,
};
const MANEKENY: BreadCrumbItem = {
    label: 'Манекены',
    href: ROUTES.CATALOG.MANEKENY.INDEX,
};
const ORGSTEKLO: BreadCrumbItem = {
    label: 'Изделия из оргстекла',
    href: ROUTES.CATALOG.ORGSTEKLO.INDEX,
};
const TORGOVAYA_MEBEL: BreadCrumbItem = {
    label: 'Торговая мебель',
    href: ROUTES.CATALOG.TORGOVAYA_MEBEL.INDEX,
};
const TRUBY_I_STOYKI: BreadCrumbItem = {
    label: 'Трубы и стойки',
    href: ROUTES.CATALOG.TRUBY_I_STOYKI.INDEX,
};
const EKONOMPANELI: BreadCrumbItem = {
    label: 'Экономпанели',
    href: ROUTES.CATALOG.EKONOMPANELI.INDEX,
};
const MEBEL_DLYA_DOMA: BreadCrumbItem = {
    label: 'Мебель для дома',
    href: ROUTES.CATALOG.MEBEL_DLYA_DOMA,
};
const FASADY: BreadCrumbItem = {
    label: 'Мебельные фасады',
    href: ROUTES.MEBELNYE_FASADY.INDEX,
};
const USLUGI: BreadCrumbItem = {
    label: 'Услуги',
    href: ROUTES.USLUGI.INDEX,
};

const withActive = (items: BreadCrumbItem[]): BreadCrumbItem[] =>
    items.map((item, index) => ({
        ...item,
        isActive: index === items.length - 1,
    }));

const rootTrail = (...items: BreadCrumbItem[]) => withActive([HOME, ...items]);
const catalogTrail = (...items: BreadCrumbItem[]) =>
    withActive([HOME, CATALOG, ...items]);
const orgTrail = (...items: BreadCrumbItem[]) =>
    catalogTrail(ORGSTEKLO, ...items);
const manekenyTrail = (...items: BreadCrumbItem[]) =>
    catalogTrail(MANEKENY, ...items);
const torgMebelTrail = (...items: BreadCrumbItem[]) =>
    catalogTrail(TORGOVAYA_MEBEL, ...items);
const trubyTrail = (...items: BreadCrumbItem[]) =>
    catalogTrail(TRUBY_I_STOYKI, ...items);
const ekonomTrail = (...items: BreadCrumbItem[]) =>
    catalogTrail(EKONOMPANELI, ...items);
const fasadyTrail = (...items: BreadCrumbItem[]) => rootTrail(FASADY, ...items);
const uslugiTrail = (...items: BreadCrumbItem[]) => rootTrail(USLUGI, ...items);

export const BREADCRUMBS: Record<string, BreadCrumbItem[]> = {
    [ROUTES.ABOUT]: rootTrail(ABOUT),
    [ROUTES.PROIZVODSTVO]: rootTrail(PROIZVODSTVO),
    [ROUTES.KONTAKTY]: rootTrail(KONTAKTY),

    [ROUTES.CATALOG.INDEX]: catalogTrail(),

    [ROUTES.CATALOG.MANEKENY.INDEX]: catalogTrail(MANEKENY),
    [ROUTES.CATALOG.MANEKENY.MANEKENY_PORTNOVSKIE]: manekenyTrail({
        label: 'Манекены портновские',
        href: ROUTES.CATALOG.MANEKENY.MANEKENY_PORTNOVSKIE,
    }),
    [ROUTES.CATALOG.MANEKENY.MANEKENY_ANATOMICHESKIE]: manekenyTrail({
        label: 'Манекены анатомические',
        href: ROUTES.CATALOG.MANEKENY.MANEKENY_ANATOMICHESKIE,
    }),
    [ROUTES.CATALOG.MANEKENY.GOLOVI]: manekenyTrail({
        label: 'Головы',
        href: ROUTES.CATALOG.MANEKENY.GOLOVI,
    }),
    [ROUTES.CATALOG.MANEKENY.TORSY]: manekenyTrail({
        label: 'Манекены портновские, торсы',
        href: ROUTES.CATALOG.MANEKENY.TORSY,
    }),

    [ROUTES.CATALOG.MEBEL_DLYA_DOMA]: catalogTrail(MEBEL_DLYA_DOMA),

    [ROUTES.CATALOG.OFISNYE_PEREGORODKI]: catalogTrail({
        label: 'Офисные перегородки',
        href: ROUTES.CATALOG.OFISNYE_PEREGORODKI,
    }),

    [ROUTES.CATALOG.STROITELSTVO_VYSTAVOCHNYX_STENDOV]: catalogTrail({
        label: 'Строительство выставочных стендов',
        href: ROUTES.CATALOG.STROITELSTVO_VYSTAVOCHNYX_STENDOV,
    }),

    [ROUTES.CATALOG.EKONOMPANELI.INDEX]: catalogTrail(EKONOMPANELI),
    [ROUTES.CATALOG.EKONOMPANELI.AKSESSUARY]: ekonomTrail({
        label: 'Аксессуары',
        href: ROUTES.CATALOG.EKONOMPANELI.AKSESSUARY,
    }),

    [ROUTES.CATALOG.ORGSTEKLO.INDEX]: orgTrail(),
    [ROUTES.CATALOG.ORGSTEKLO.CENNIKODERZHATELI]: orgTrail({
        label: 'Ценникодержатели',
        href: ROUTES.CATALOG.ORGSTEKLO.CENNIKODERZHATELI,
    }),
    [ROUTES.CATALOG.ORGSTEKLO.MENUHOLDERY]: orgTrail({
        label: 'Менюхолдеры',
        href: ROUTES.CATALOG.ORGSTEKLO.MENUHOLDERY,
    }),
    [ROUTES.CATALOG.ORGSTEKLO.PODSTAVKI_POD_REKLAMNUYU_PRODUKCIYU]: orgTrail({
        label: 'Подставки под рекламную продукцию',
        href: ROUTES.CATALOG.ORGSTEKLO.PODSTAVKI_POD_REKLAMNUYU_PRODUKCIYU,
    }),
    [ROUTES.CATALOG.ORGSTEKLO.PODSTAVKI_POD_KOSHELKI]: orgTrail({
        label: 'Подставки под кошельки',
        href: ROUTES.CATALOG.ORGSTEKLO.PODSTAVKI_POD_KOSHELKI,
    }),
    [ROUTES.CATALOG.ORGSTEKLO.PODSTAVKI_POD_KOSMETIKU]: orgTrail({
        label: 'Подставки под косметику',
        href: ROUTES.CATALOG.ORGSTEKLO.PODSTAVKI_POD_KOSMETIKU,
    }),
    [ROUTES.CATALOG.ORGSTEKLO.PODSTAVKI_POD_KANCELYARIU]: orgTrail({
        label: 'Подставки под канцелярию',
        href: ROUTES.CATALOG.ORGSTEKLO.PODSTAVKI_POD_KANCELYARIU,
    }),
    [ROUTES.CATALOG.ORGSTEKLO.PODSTAVKI_DLYA_TELEFONOV]: orgTrail({
        label: 'Подставки для телефонов',
        href: ROUTES.CATALOG.ORGSTEKLO.PODSTAVKI_DLYA_TELEFONOV,
    }),
    [ROUTES.CATALOG.ORGSTEKLO.PODSTAVKI_POD_BIZUTERIYU]: orgTrail({
        label: 'Подставки под бижутерию',
        href: ROUTES.CATALOG.ORGSTEKLO.PODSTAVKI_POD_BIZUTERIYU,
    }),
    [ROUTES.CATALOG.ORGSTEKLO.PODSTAVKI_UNIVERSALNYE]: orgTrail({
        label: 'Подставки универсальные',
        href: ROUTES.CATALOG.ORGSTEKLO.PODSTAVKI_UNIVERSALNYE,
    }),
    [ROUTES.CATALOG.ORGSTEKLO.PODSTAVKI_DLYA_OBUVI]: orgTrail({
        label: 'Подставки для обуви',
        href: ROUTES.CATALOG.ORGSTEKLO.PODSTAVKI_DLYA_OBUVI,
    }),
    [ROUTES.CATALOG.ORGSTEKLO.PODSTAVKI_POD_OCHKI]: orgTrail({
        label: 'Подставки под очки',
        href: ROUTES.CATALOG.ORGSTEKLO.PODSTAVKI_POD_OCHKI,
    }),
    [ROUTES.CATALOG.ORGSTEKLO.PODSTAVKI_P_OBRAZNIE]: orgTrail({
        label: 'Подставки П-образные',
        href: ROUTES.CATALOG.ORGSTEKLO.PODSTAVKI_P_OBRAZNIE,
    }),
    [ROUTES.CATALOG.ORGSTEKLO.DEMONSTRAZIONNIE_FORMY]: orgTrail({
        label: 'Демонстрационные формы',
        href: ROUTES.CATALOG.ORGSTEKLO.DEMONSTRAZIONNIE_FORMY,
    }),
    [ROUTES.CATALOG.ORGSTEKLO.VIZITNIZY]: orgTrail({
        label: 'Визитницы',
        href: ROUTES.CATALOG.ORGSTEKLO.VIZITNIZY,
    }),
    [ROUTES.CATALOG.ORGSTEKLO.KOROBA]: orgTrail({
        label: 'Короба',
        href: ROUTES.CATALOG.ORGSTEKLO.KOROBA,
    }),

    [ROUTES.CATALOG.TORGOVAYA_MEBEL.INDEX]: catalogTrail(TORGOVAYA_MEBEL),
    [ROUTES.CATALOG.TORGOVAYA_MEBEL.BANKETKI]: torgMebelTrail({
        label: 'Банкетки',
        href: ROUTES.CATALOG.TORGOVAYA_MEBEL.BANKETKI,
    }),
    [ROUTES.CATALOG.TORGOVAYA_MEBEL.PRIMEROCHNIE]: torgMebelTrail({
        label: 'Примерочные',
        href: ROUTES.CATALOG.TORGOVAYA_MEBEL.PRIMEROCHNIE,
    }),
    [ROUTES.CATALOG.TORGOVAYA_MEBEL.ZERKALA]: torgMebelTrail({
        label: 'Зеркала',
        href: ROUTES.CATALOG.TORGOVAYA_MEBEL.ZERKALA,
    }),
    [ROUTES.CATALOG.TORGOVAYA_MEBEL.VESHALA]: torgMebelTrail({
        label: 'Вешала',
        href: ROUTES.CATALOG.TORGOVAYA_MEBEL.VESHALA,
    }),
    [ROUTES.CATALOG.TORGOVAYA_MEBEL.PRILAVKI_IZ_LDSP]: torgMebelTrail({
        label: 'Прилавки из ЛДСП',
        href: ROUTES.CATALOG.TORGOVAYA_MEBEL.PRILAVKI_IZ_LDSP,
    }),
    [ROUTES.CATALOG.TORGOVAYA_MEBEL.STELAZHI_IZ_LDSP]: torgMebelTrail({
        label: 'Стеллажи из ЛДСП',
        href: ROUTES.CATALOG.TORGOVAYA_MEBEL.STELAZHI_IZ_LDSP,
    }),
    [ROUTES.CATALOG.TORGOVAYA_MEBEL.STEKLYANNYE_VITRINY]: torgMebelTrail({
        label: 'Стеклянные витрины',
        href: ROUTES.CATALOG.TORGOVAYA_MEBEL.STEKLYANNYE_VITRINY,
    }),
    [ROUTES.CATALOG.TORGOVAYA_MEBEL.STOYKI_RESEPSHN]: torgMebelTrail({
        label: 'Стойки ресепшн',
        href: ROUTES.CATALOG.TORGOVAYA_MEBEL.STOYKI_RESEPSHN,
    }),
    [ROUTES.CATALOG.TORGOVAYA_MEBEL.TORGOVYE_OSTROVA]: torgMebelTrail({
        label: 'Торговые острова',
        href: ROUTES.CATALOG.TORGOVAYA_MEBEL.TORGOVYE_OSTROVA,
    }),
    [ROUTES.CATALOG.TORGOVAYA_MEBEL.OSTROVNOE_OBORUDOVANIE]: torgMebelTrail({
        label: 'Островное оборудование',
        href: ROUTES.CATALOG.TORGOVAYA_MEBEL.OSTROVNOE_OBORUDOVANIE,
    }),
    [ROUTES.CATALOG.TORGOVAYA_MEBEL.TORGOVOE_OBORUDOVANIE_S_EKONOMPANELYAMI]:
        torgMebelTrail({
            label: 'Торговое оборудование с экономпанелями',
            href: ROUTES.CATALOG.TORGOVAYA_MEBEL
                .TORGOVOE_OBORUDOVANIE_S_EKONOMPANELYAMI,
        }),
    [ROUTES.CATALOG.TORGOVAYA_MEBEL
        .PRILAVKI_I_VITRINY_IZ_ALYUMINIEVOGO_PROFILYA]: torgMebelTrail({
        label: 'Прилавки и витрины из алюминиевого профиля',
        href: ROUTES.CATALOG.TORGOVAYA_MEBEL
            .PRILAVKI_I_VITRINY_IZ_ALYUMINIEVOGO_PROFILYA,
    }),
    [ROUTES.CATALOG.TORGOVAYA_MEBEL.MUZEYNOE_OBORUDOVANIE]: torgMebelTrail({
        label: 'Музейное оборудование',
        href: ROUTES.CATALOG.TORGOVAYA_MEBEL.MUZEYNOE_OBORUDOVANIE,
    }),

    [ROUTES.CATALOG.TRUBY_I_STOYKI.INDEX]: trubyTrail(),
    [ROUTES.CATALOG.TRUBY_I_STOYKI.SISTEMA_JOKER]: trubyTrail({
        label: 'Система JOKER',
        href: ROUTES.CATALOG.TRUBY_I_STOYKI.SISTEMA_JOKER,
    }),
    [ROUTES.CATALOG.TRUBY_I_STOYKI.SISTEMA_MASTER]: trubyTrail({
        label: 'Система MASTER',
        href: ROUTES.CATALOG.TRUBY_I_STOYKI.SISTEMA_MASTER,
    }),
    [ROUTES.CATALOG.TRUBY_I_STOYKI.OSTROVNYE_KONSTRUKTSII]: trubyTrail({
        label: 'Островные конструкции системы MASTER',
        href: ROUTES.CATALOG.TRUBY_I_STOYKI.OSTROVNYE_KONSTRUKTSII,
    }),
    [ROUTES.CATALOG.TRUBY_I_STOYKI.SISTEMA_VERTIKAL]: trubyTrail({
        label: 'Система VERTIKAL',
        href: ROUTES.CATALOG.TRUBY_I_STOYKI.SISTEMA_VERTIKAL,
    }),
    [ROUTES.CATALOG.TRUBY_I_STOYKI.SISTEMA_BS]: trubyTrail({
        label: 'Система BS',
        href: ROUTES.CATALOG.TRUBY_I_STOYKI.SISTEMA_BS,
    }),
    [ROUTES.CATALOG.TRUBY_I_STOYKI.SISTEMA_GLOBAL]: trubyTrail({
        label: 'Система GLOBAL',
        href: ROUTES.CATALOG.TRUBY_I_STOYKI.SISTEMA_GLOBAL,
    }),
    [ROUTES.CATALOG.TRUBY_I_STOYKI.SISTEMY_BASIS_I_SLIM]: trubyTrail({
        label: 'Системы BASIS и SLIM',
        href: ROUTES.CATALOG.TRUBY_I_STOYKI.SISTEMY_BASIS_I_SLIM,
    }),
    [ROUTES.CATALOG.TRUBY_I_STOYKI.OSTROVNYE_KONSTRUKCII_BASIS]: trubyTrail({
        label: 'Островные конструкции BASIS',
        href: ROUTES.CATALOG.TRUBY_I_STOYKI.OSTROVNYE_KONSTRUKCII_BASIS,
    }),

    [ROUTES.MEBELNYE_FASADY.INDEX]: fasadyTrail(),
    [ROUTES.MEBELNYE_FASADY.CATALOG]: fasadyTrail({
        label: 'Каталог фрезеровок для фасадов',
        href: ROUTES.MEBELNYE_FASADY.CATALOG,
    }),
    [ROUTES.MEBELNYE_FASADY.FASAD_CALCULATOR]: fasadyTrail({
        label: 'Калькулятор фасадов',
        href: ROUTES.MEBELNYE_FASADY.FASAD_CALCULATOR,
    }),
    [ROUTES.MEBELNYE_FASADY.PLENKI_PVH]: fasadyTrail({
        label: 'Пленки ПВХ',
        href: ROUTES.MEBELNYE_FASADY.PLENKI_PVH,
    }),
    [ROUTES.MEBELNYE_FASADY.CATALOG_RAL]: fasadyTrail({
        label: 'Каталог RAL',
        href: ROUTES.MEBELNYE_FASADY.CATALOG_RAL,
    }),
    [ROUTES.MEBELNYE_FASADY.KUHONNYE_FASADY]: fasadyTrail({
        label: 'Кухонные фасады',
        href: ROUTES.MEBELNYE_FASADY.KUHONNYE_FASADY,
    }),

    [ROUTES.USLUGI.INDEX]: uslugiTrail(),
    [ROUTES.USLUGI.LAZERNAYA_REZKA_I_GRAVIROVKA]: uslugiTrail({
        label: 'Лазерная резка и гравировка',
        href: ROUTES.USLUGI.LAZERNAYA_REZKA_I_GRAVIROVKA,
    }),
    [ROUTES.USLUGI.RASPIL_DSP]: uslugiTrail({
        label: 'Распил ДСП',
        href: ROUTES.USLUGI.RASPIL_DSP,
    }),
    [ROUTES.USLUGI.TORGOVOE_OBORUDOVANIE]: uslugiTrail({
        label: 'Торговое оборудование',
        href: ROUTES.USLUGI.TORGOVOE_OBORUDOVANIE,
    }),
    [ROUTES.USLUGI.DIZAYN_MAGAZINA]: uslugiTrail({
        label: 'Дизайн магазина',
        href: ROUTES.USLUGI.DIZAYN_MAGAZINA,
    }),
};
