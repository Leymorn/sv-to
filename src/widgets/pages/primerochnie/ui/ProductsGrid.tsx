import { ProductCard } from '@/entities/product';
import { PRIMEROCHNYE_PRODUCTS } from '../model/products';

export default function PrimerochnieProductsGrid() {
    return (
        <div className="gap-5 grid-cols-2-xs-3-lg-4 mb-10 md:mb-20">
            {PRIMEROCHNYE_PRODUCTS.map((product) => (
                <ProductCard
                    key={`${product.title}-${product.description}`}
                    {...product}
                />
            ))}
        </div>
    );
}
