import { useMemo, useState } from 'react';
import Button from '@/shared/ui/Button';
import { ProductCard } from '@/entities/product';
import { ANATOMICHESKIE_CATEGORIES } from '../model/anatomicheskie';

export default function AnatomicheskieSwitch() {
    const [activeCategoryId, setActiveCategoryId] = useState(
        ANATOMICHESKIE_CATEGORIES[0]?.id || ''
    );

    const activeCategory = useMemo(() => {
        return (
            ANATOMICHESKIE_CATEGORIES.find(
                (category) => category.id === activeCategoryId
            ) || ANATOMICHESKIE_CATEGORIES[0]
        );
    }, [activeCategoryId]);

    if (!activeCategory) {
        return null;
    }

    return (
        <section className="flex flex-col gap-6 md:gap-8">
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                {ANATOMICHESKIE_CATEGORIES.map((category) => {
                    const isActive = category.id === activeCategory.id;
                    return (
                        <Button
                            key={category.id}
                            text={category.label}
                            onClick={() => setActiveCategoryId(category.id)}
                            type={isActive ? 'default' : 'outline'}
                            ariaPressed={isActive}
                            classList="text-sm md:text-base"
                        />
                    );
                })}
            </div>

            <div className="grid-cols-2-xs-3-lg-4">
                {activeCategory.items.map((item) => (
                    <ProductCard key={item.title} {...item} />
                ))}
            </div>
        </section>
    );
}
