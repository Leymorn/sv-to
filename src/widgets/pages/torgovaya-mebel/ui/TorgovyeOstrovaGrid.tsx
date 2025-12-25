import { ProductCard } from '@/entities/product';
import { TORGOVYE_OSTROVA } from '../model/torgovye-ostrova';

export default function TorgovyeOstrovaGrid() {
    return (
        <div className="grid-cols-2-xs-3-lg-4 gap-5 mb-6 md:mb-12">
            {TORGOVYE_OSTROVA.map((item) => (
                <ProductCard
                    key={`${item.title}-${item.description}`}
                    {...item}
                    imageClassList="object-contain w-full h-full"
                />
            ))}
        </div>
    );
}

