import { ProductCard } from '@/entities/product';
import { OSTROVNYE_KONSTRUKTSII } from '../model/ostrovnye-konstrukcii';

export default function OstrovnyeKonstrukciiGrid() {
    return (
        <div className="grid-cols-2-xs-3-lg-4 gap-6">
            {OSTROVNYE_KONSTRUKTSII.map((product) => (
                <ProductCard
                    key={`${product.title}-${product.size}`}
                    {...product}
                    imageClassList="object-none"
                />
            ))}
        </div>
    );
}
