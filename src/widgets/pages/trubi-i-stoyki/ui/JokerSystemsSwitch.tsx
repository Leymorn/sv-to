import { useMemo, useState } from 'react';
import Button from '@/shared/ui/Button';
import { JOKER_CATEGORIES } from '../model/joker';
import { ProductCard } from '@/entities/product';

export default function JokerSystemsSwitch() {
    const [activeCategoryId, setActiveCategoryId] = useState(
        JOKER_CATEGORIES[0]?.id ?? ''
    );

    const activeCategory = useMemo(() => {
        return (
            JOKER_CATEGORIES.find(
                (category) => category.id === activeCategoryId
            ) ?? JOKER_CATEGORIES[0]
        );
    }, [activeCategoryId]);

    if (!activeCategory) {
        return null;
    }

    return (
        <section className="flex flex-col gap-6 md:gap-8">
            <div className="flex flex-wrap gap-3 justify-center">
                {JOKER_CATEGORIES.map((category) => {
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

            {activeCategory.items.length === 0 ? (
                <p className="text-center text-gray-500 bg-white border border-gray-200 rounded-3xl p-6 md:p-10">
                    Товары для этого раздела появятся позже.
                </p>
            ) : (
                <div className="grid-cols-2-xs-3-lg-4 gap-6">
                    {activeCategory.items.map((item) => (
                        <ProductCard
                            key={`${activeCategory.id}-${item.title}`}
                            {...item}
                            imageClassList="object-none"
                        />
                    ))}
                </div>
            )}
        </section>
    );
}
