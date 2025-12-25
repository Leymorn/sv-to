import { ProductCard } from '@/entities/product';
import { STELAZHI } from '../model/stelazhi';

export default function StelazhiGrid() {
    return (
        <div className="grid-cols-2-xs-3-lg-4 gap-5 mb-6 md:mb-12">
            {STELAZHI.map((item) => (
                <ProductCard
                    key={`${item.title}-${item.description}`}
                    {...item}
                    imageClassList="object-contain w-full h-full"
                />
            ))}
        </div>
    );
}

