import { ProductCard } from '@/entities/product';
import { TORGOVOE_OBORUDOVANIE_S_EP } from '../model/torgovoe-oborudovanie-s-ep';

export default function TorgovyeOstrovaGrid() {
    return (
        <div className="grid-cols-2-xs-3-lg-4 gap-5 mb-6 md:mb-12">
            {TORGOVOE_OBORUDOVANIE_S_EP.map((item) => (
                <ProductCard
                    key={`${item.title}-${item.description}`}
                    {...item}
                    imageClassList="object-contain w-full h-full"
                />
            ))}
        </div>
    );
}
