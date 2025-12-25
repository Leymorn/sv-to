import { useMemo, useState } from 'react';
import Button from '@/shared/ui/Button';
import Image from '@/shared/ui/Image';
import { PVH_FILM_CATEGORIES } from '../model/plenki-pvh';

export default function PvhFilmsBlock() {
    const [activeCategoryId, setActiveCategoryId] = useState(
        PVH_FILM_CATEGORIES[0]?.id ?? ''
    );

    const activeCategory = useMemo(() => {
        return (
            PVH_FILM_CATEGORIES.find(
                (category) => category.id === activeCategoryId
            ) ?? PVH_FILM_CATEGORIES[0]
        );
    }, [activeCategoryId]);

    if (!activeCategory) {
        return null;
    }

    return (
        <section className="flex flex-col gap-6 md:gap-8">
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                {PVH_FILM_CATEGORIES.map((category) => {
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

            <div className="grid grid-cols-[repeat(auto-fill,minmax(130px,1fr))] gap-5">
                {activeCategory.items.map((item) => (
                    <div
                        key={item.code}
                        className="flex flex-col gap-2 items-stretch"
                    >
                        <Image
                            src={item.imageSrc}
                            alt={`${item.code} ${item.name}`}
                            classList="aspect-square w-full bg-white"
                            imageClassList="w-full"
                            objectFit="cover"
                        />
                        <div className="text-sm md:text-base text-center">
                            <div className="font-medium">{item.code}</div>
                            <div>{item.name}</div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
