import { ProductCard } from '@/entities/product';
import { BASIS_PRODUCTS } from '../model/basis';

export default function BasisGrid() {
    return (
        <div className="grid-cols-2-xs-3-lg-4 gap-6">
            {BASIS_PRODUCTS.map((product) => (
                <ProductCard
                    key={`${product.title}-${product.description}`}
                    {...product}
                    imageClassList="object-contain w-full h-full"
                />
            ))}
        </div>
    );
}
