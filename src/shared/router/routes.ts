export const ROUTES = {
    INDEX: '/',
    KONTAKTY: '/kontakty',
    ABOUT: '/about',
    PROIZVODSTVO: '/proizvodstvo',
    CATALOG: {
        INDEX: '/catalog',
        OFISNYE_PEREGORODKI: '/catalog/ofisnye-peregorodki',
        STROITELSTVO_VYSTAVOCHNYX_STENDOV:
            '/catalog/stroitelstvo-vystavochnyx-stendov',
        ORGSTEKLO: {
            INDEX: '/catalog/orgsteklo',
            CENNIKODERZHATELI: '/catalog/orgsteklo/cennikoderzhateli',
            MENUHOLDERY: '/catalog/orgsteklo/menuholdery',
            PODSTAVKI_POD_REKLAMNUYU_PRODUKCIYU:
                '/catalog/orgsteklo/podstavki-pod-reklamnuyu-produkciyu',
            PODSTAVKI_POD_KOSHELKI: '/catalog/orgsteklo/podstavki-pod-koshelki',
            PODSTAVKI_POD_KOSMETIKU:
                '/catalog/orgsteklo/podstavki-pod-kosmetiku',
            PODSTAVKI_POD_KANCELYARIU:
                '/catalog/orgsteklo/podstavki-pod-kancelyariu',
            PODSTAVKI_DLYA_TELEFONOV:
                '/catalog/orgsteklo/podstavki-dlya-telefonov',
            PODSTAVKI_POD_BIZUTERIYU:
                '/catalog/orgsteklo/podstavki-pod-bizuteriu',
            PODSTAVKI_UNIVERSALNYE: '/catalog/orgsteklo/podstavki-unversalnye',
            PODSTAVKI_DLYA_OBUVI: '/catalog/orgsteklo/podstavki-dlya-obuvi',
            PODSTAVKI_POD_OCHKI: '/catalog/orgsteklo/podstavki-pod-ochki',
            PODSTAVKI_P_OBRAZNIE: '/catalog/orgsteklo/podstavki-p-obraznie',
            DEMONSTRAZIONNIE_FORMY: '/catalog/orgsteklo/demonstrazionnie-formy',
            VIZITNIZY: '/catalog/orgsteklo/vizitnizy',
            KOROBA: '/catalog/orgsteklo/koroba',
        },
        TORGOVAYA_MEBEL: {
            INDEX: '/catalog/torgovaya-mebel',
            BANKETKI: '/catalog/torgovaya-mebel/banketki',
            PRIMEROCHNIE: '/catalog/torgovaya-mebel/primerochnie',
            ZERKALA: '/catalog/torgovaya-mebel/zerkala',
            VESHALA: '/catalog/torgovaya-mebel/veshala',
            PRILAVKI_IZ_LDSP: '/catalog/torgovaya-mebel/prilavki-iz-ldsp',
            STELAZHI_IZ_LDSP: '/catalog/torgovaya-mebel/stelazhi-iz-ldsp',
            STEKLYANNYE_VITRINY: '/catalog/torgovaya-mebel/steklyannye-vitriny',
            STOYKI_RESEPSHN: '/catalog/torgovaya-mebel/stoyki-resepshn',
            TORGOVYE_OSTROVA: '/catalog/torgovaya-mebel/torgovye-ostrova',
            OSTROVNOE_OBORUDOVANIE:
                '/catalog/torgovaya-mebel/ostrovnoe-oborudovanie',
            TORGOVOE_OBORUDOVANIE_S_EKONOMPANELYAMI:
                '/catalog/torgovaya-mebel/torgovoe-oborudovanie-s-ekonompanelyami',
            PRILAVKI_I_VITRINY_IZ_ALYUMINIEVOGO_PROFILYA:
                '/catalog/torgovaya-mebel/prilavki-i-vitriny-iz-alyuminievogo-profilya',
            MUZEYNOE_OBORUDOVANIE:
                '/catalog/torgovaya-mebel/muzeynoe-oborudovanie',
        },
        MANEKENY: {
            INDEX: '/catalog/manekeny',
            MANEKENY_PORTNOVSKIE: '/catalog/manekeny/manekeny-portnovskie',
            MANEKENY_ANATOMICHESKIE:
                '/catalog/manekeny/manekeny-anatomicheskie',
            GOLOVI: '/catalog/manekeny/golovi',
            TORSY: '/catalog/manekeny/manekeny-torsy',
        },
        MEBEL_DLYA_DOMA: '/catalog/mebel-dlya-doma',
        TRUBY_I_STOYKI: {
            INDEX: '/catalog/trubi-i-stoyki',
            SISTEMA_JOKER: '/catalog/trubi-i-stoyki/sistema-joker',
            SISTEMA_MASTER: '/catalog/trubi-i-stoyki/sistema-master',
            OSTROVNYE_KONSTRUKTSII:
                '/catalog/trubi-i-stoyki/ostrovnye-konstrukcii-sistemy-master',
            SISTEMA_VERTIKAL: '/catalog/trubi-i-stoyki/sistema-vertikal',
            SISTEMA_BS: '/catalog/trubi-i-stoyki/sistema-bs',
            SISTEMA_GLOBAL: '/catalog/trubi-i-stoyki/sistema-global',
            SISTEMY_BASIS_I_SLIM:
                '/catalog/trubi-i-stoyki/sistemy-basis-i-slim',
            OSTROVNYE_KONSTRUKCII_BASIS:
                '/catalog/trubi-i-stoyki/ostrovnye-konstrukcii-basis',
        },
        EKONOMPANELI: {
            INDEX: '/catalog/ekonompaneli',
            AKSESSUARY: '/catalog/ekonompaneli/aksessuary',
        },
    },
    MEBELNYE_FASADY: {
        INDEX: '/mebelnye-fasady',
        CATALOG: '/mebelnye-fasady/catalog-frezerovok-dla-fasadov',
        FASAD_CALCULATOR: '/mebelnye-fasady/fasad-calculator',
        PLENKI_PVH: '/mebelnye-fasady/plenki-pvh',
        CATALOG_RAL: '/mebelnye-fasady/catalog-ral',
        KUHONNYE_FASADY: '/mebelnye-fasady/kuhonnye-fasady',
    },
    USLUGI: {
        INDEX: '/uslugi',
        LAZERNAYA_REZKA_I_GRAVIROVKA: '/uslugi/lazernaya-rezka-i-gravirovka',
        RASPIL_DSP: '/uslugi/raspil-dsp',
        TORGOVOE_OBORUDOVANIE: '/uslugi/torgovoe-oborudovanie',
        DIZAYN_MAGAZINA: '/uslugi/dizayn-magazina',
    },
} as const;
