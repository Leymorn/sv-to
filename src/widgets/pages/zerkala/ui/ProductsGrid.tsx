import { ProductCard } from '@/entities/product';
import { ZERKALA_PRODUCTS } from '../model/products';

export default function ZerkalaProductsGrid() {
    return (
        <div className="gap-6 grid-cols-2-xs-3-lg-4 mb-10 md:mb-20">
            {ZERKALA_PRODUCTS.map((product) => (
                <ProductCard
                    key={`${product.title}-${product.description}`}
                    {...product}
                />
            ))}
        </div>
    );
}
