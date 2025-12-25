import { ProductCard } from '@/entities/product';
import { MASTER_PRODUCTS } from '../model/master';

export default function MasterGrid() {
    return (
        <div className="grid-cols-2-xs-3-lg-4 gap-6">
            {MASTER_PRODUCTS.map((product) => (
                <ProductCard
                    key={`${product.title}-${product.description}`}
                    {...product}
                    imageClassList="object-none"
                />
            ))}
        </div>
    );
}
