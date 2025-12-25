import Image from '@/shared/ui/Image';
import { HOME_DECOR_VARIANTS } from '../model/decor';

export default function HomeDecorList() {
    return (
        <section className="flex flex-col gap-6">
            <h2 className="text-lg md:text-2xl font-semibold text-center">
                Вариации декора ЛДСП для вешал HOME
            </h2>
            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-6">
                {HOME_DECOR_VARIANTS.map((variant) => (
                    <div
                        key={variant.title}
                        className="flex flex-col items-center gap-3"
                    >
                        <Image
                            src={variant.imageSrc}
                            alt={variant.title}
                            classList="w-full h-[160px] border border-[var(--color-gray-color)] rounded-[16px]"
                            imageClassList="w-full object-cover"
                        />
                        <span className="font-medium text-sm md:text-base">
                            {variant.title}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
}
