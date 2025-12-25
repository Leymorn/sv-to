import { ProductCard } from '@/entities/product';
import { MANEKENY_HEADS_PRODUCTS } from '../model/heads';

export default function HeadsGrid() {
    return (
        <div className="grid-cols-2-xs-3-lg-4 gap-6">
            {MANEKENY_HEADS_PRODUCTS.map((product) => (
                <ProductCard
                    key={`${product.title}-${product.description}`}
                    {...product}
                />
            ))}
        </div>
    );
}
