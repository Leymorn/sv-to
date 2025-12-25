import { ProductCard } from '@/entities/product';
import { OSTROVNOE_OBORUDOVANIE } from '../model/ostrovnoe-oborudovanie';

export default function OstrovnoeOborudovanieGrid() {
    return (
        <div className="grid-cols-2-xs-3-lg-4 gap-5 mb-6 md:mb-12">
            {OSTROVNOE_OBORUDOVANIE.map((item) => (
                <ProductCard
                    key={`${item.title}-${item.description}`}
                    {...item}
                    imageClassList="object-contain w-full h-full"
                />
            ))}
        </div>
    );
}

