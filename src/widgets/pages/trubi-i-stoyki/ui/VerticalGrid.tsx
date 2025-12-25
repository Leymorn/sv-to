import { ProductCard } from '@/entities/product';
import { VERTICAL_PRODUCTS } from '../model/vertical';

export default function VerticalGrid() {
    return (
        <div className="grid-cols-2-xs-3-lg-4 gap-6">
            {VERTICAL_PRODUCTS.map((product) => (
                <ProductCard
                    key={`${product.title}-${product.description}`}
                    {...product}
                    imageClassList="object-none"
                />
            ))}
        </div>
    );
}

