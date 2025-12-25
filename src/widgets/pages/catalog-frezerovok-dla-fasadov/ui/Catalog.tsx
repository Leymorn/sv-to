import { useMemo, useState } from 'react';
import { FasadItem } from '@/entities/fasad';
import Button from '@/shared/ui/Button';
import { FASAD_CATEGORIES } from '../model/categories';

export default function FasadCatalog() {
    const [activeCategoryId, setActiveCategoryId] = useState(
        FASAD_CATEGORIES[0]?.id || ''
    );

    const activeCategory = useMemo(() => {
        return (
            FASAD_CATEGORIES.find(
                (category) => category.id === activeCategoryId
            ) || FASAD_CATEGORIES[0]
        );
    }, [activeCategoryId]);

    if (!activeCategory) {
        return null;
    }

    return (
        <section className="flex flex-col gap-8">
            <div className="flex flex-wrap w-full lg:justify-between justify-center items-center gap-3">
                {FASAD_CATEGORIES.map((category) => {
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

            <div className="grid gap-8 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
                {activeCategory.items.map((item) => (
                    <FasadItem
                        key={`${activeCategory.id}-${item.text}`}
                        {...item}
                    />
                ))}
            </div>
        </section>
    );
}
