import { useState } from 'react';
import Button from '@/shared/ui/Button';
import { ButtonVariant } from '@/shared/ui/Button';
import VstavkiTable from './VstavkiTable';
import StendyGrid from './StendyGrid';
import Link from '@/shared/ui/Link';
import { ROUTES } from '@/shared/router/routes';

interface Variant {
    name: string;
    id: string;
}

const VARIANTS: Variant[] = [
    { name: 'Вставки', id: 'vstavki' },
    { name: 'Стенды', id: 'stendy' },
];

export default function VstavkiStendyAksessuarySwitch() {
    const [activeTab, setActiveTab] = useState<Variant>(VARIANTS[0]);

    return (
        <section className="w-full">
            <div className="flex justify-center gap-4 mb-6 md:mb-8">
                {VARIANTS.map((variant) => (
                    <Button
                        text={variant.name}
                        onClick={() => setActiveTab(variant)}
                        type={
                            activeTab.id === variant.id
                                ? ButtonVariant.DEFAULT
                                : ButtonVariant.OUTLINE
                        }
                    ></Button>
                ))}
                <Link
                    text="Аксессуары"
                    type="outline"
                    classList="text-lg"
                    href={ROUTES.CATALOG.EKONOMPANELI.AKSESSUARY}
                ></Link>
            </div>
            <VstavkiTable show={activeTab.id === 'vstavki'} />
            <StendyGrid show={activeTab.id === 'stendy'} />
        </section>
    );
}
