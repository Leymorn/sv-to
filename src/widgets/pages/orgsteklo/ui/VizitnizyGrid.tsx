import { ProductCard } from '@/entities/product';
import { VIZITNIZY_PRODUCTS } from '../model/vizitnizy';

export default function VizitnizyGrid() {
    return (
        <section className="flex flex-col gap-6">
            <div className="grid gap-6 grid-cols-2-xs-3-lg-4">
                {VIZITNIZY_PRODUCTS.map((product) => (
                    <ProductCard
                        key={`${product.title}-${product.description}`}
                        {...product}
                    />
                ))}
            </div>
        </section>
    );
}
