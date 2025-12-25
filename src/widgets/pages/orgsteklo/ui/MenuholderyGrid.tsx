import { ProductCard } from '@/entities/product';
import { MENUHOLDERY_PRODUCTS } from '../model/menuholdery';

export default function MenuholderyGrid() {
    return (
        <section className="flex flex-col gap-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {MENUHOLDERY_PRODUCTS.map((product) => (
                    <ProductCard
                        key={`${product.title}-${product.description}`}
                        {...product}
                    />
                ))}
            </div>
        </section>
    );
}

