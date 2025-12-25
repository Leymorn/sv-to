import { useMemo, useState } from 'react';
import { ProductCard } from '@/entities/product';
import Button from '@/shared/ui/Button';
import { VESHALA_CATEGORIES } from '../model/categories';
import HomeDecorList from './DecorList';

export default function VeshalaProductsSwitch() {
    const [activeCategoryId, setActiveCategoryId] = useState(
        VESHALA_CATEGORIES[0]?.id || ''
    );

    const activeCategory = useMemo(() => {
        return (
            VESHALA_CATEGORIES.find(
                (category) => category.id === activeCategoryId
            ) || VESHALA_CATEGORIES[0]
        );
    }, [activeCategoryId]);

    if (!activeCategory) {
        return null;
    }

    return (
        <section className="flex flex-col gap-8 mb-10 md:mb-16">
            <div className="flex flex-wrap justify-center gap-3">
                {VESHALA_CATEGORIES.map((category) => {
                    const isActive = category.id === activeCategory.id;
                    return (
                        <Button
                            key={category.id}
                            text={category.label}
                            onClick={() => setActiveCategoryId(category.id)}
                            type={isActive ? 'default' : 'outline'}
                            ariaPressed={isActive}
                        />
                    );
                })}
            </div>
            <div className="gap-5 grid-cols-2-xs-3-lg-4">
                {activeCategory.items.map((product) => (
                    <ProductCard
                        key={`${product.title}-${product.description}`}
                        {...product}
                    />
                ))}
            </div>
            {activeCategory.hasDecor ? <HomeDecorList /> : null}
        </section>
    );
}
