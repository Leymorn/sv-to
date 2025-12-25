import { ProductCard } from '@/entities/product';
import { MANEKENY_TORSY_PRODUCTS } from '../model/torsy';

export default function TorsyGrid() {
    return (
        <div className="grid-cols-2-xs-3-lg-4 gap-5">
            {MANEKENY_TORSY_PRODUCTS.map((product) => (
                <ProductCard
                    key={`${product.title}-${product.description}`}
                    {...product}
                />
            ))}
        </div>
    );
}
