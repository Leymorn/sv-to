import { ProductCard } from '@/entities/product';
import { PODSTAVKI_DLYA_OBUVI_PRODUCTS } from '../model/podstavki-dlya-obuvi';

export default function PodstavkiDlyaObuviGrid() {
    return (
        <section className="flex flex-col gap-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {PODSTAVKI_DLYA_OBUVI_PRODUCTS.map((product) => (
                    <ProductCard
                        key={`${product.title}-${product.description}`}
                        {...product}
                    />
                ))}
            </div>
        </section>
    );
}

