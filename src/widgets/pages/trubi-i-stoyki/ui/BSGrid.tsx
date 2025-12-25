import { ProductCard } from '@/entities/product';
import { BS_PRODUCTS } from '../model/bs';

export default function BSGrid() {
    return (
        <div className="grid-cols-2-xs-3-lg-4 gap-6">
            {BS_PRODUCTS.map((product) => (
                <ProductCard
                    key={`${product.title}-${product.description}`}
                    {...product}
                    imageClassList="object-none"
                />
            ))}
        </div>
    );
}

