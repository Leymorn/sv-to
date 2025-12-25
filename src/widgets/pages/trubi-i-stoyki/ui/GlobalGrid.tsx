import { ProductCard } from '@/entities/product';
import { GLOBAL_PRODUCTS } from '../model/global';

export default function GlobalGrid() {
    return (
        <div className="grid-cols-2-xs-3-lg-4 gap-6">
            {GLOBAL_PRODUCTS.map((product) => (
                <ProductCard
                    key={`${product.title}-${product.description}`}
                    {...product}
                    imageClassList="object-none"
                />
            ))}
        </div>
    );
}

