import { ProductCard } from '@/entities/product';
import { PODSTAVKI_P_OBRAZNIE_PRODUCTS } from '../model/podstavki-p-obraznie';

export default function PodstavkiPObraznieGrid() {
    return (
        <section className="flex flex-col gap-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {PODSTAVKI_P_OBRAZNIE_PRODUCTS.map((product) => (
                    <ProductCard
                        key={`${product.title}-${product.description}`}
                        {...product}
                    />
                ))}
            </div>
        </section>
    );
}

