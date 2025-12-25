import { ProductCard } from '@/entities/product';
import { STEKLYANNYE_VITRINY } from '../model/steklyannye-vitriny';

export default function SteklyannyeVitrinyGrid() {
    return (
        <div className="grid-cols-2-xs-3-lg-4 gap-5 mb-6 md:mb-12">
            {STEKLYANNYE_VITRINY.map((item) => (
                <ProductCard
                    key={`${item.title}-${item.description}`}
                    {...item}
                    imageClassList="object-contain w-full h-full"
                />
            ))}
        </div>
    );
}

