import { ProductCard } from '@/entities/product';
import { PODSTAVKI_POD_KANCELYARIU_PRODUCTS } from '../model/podstavki-pod-kancelyariu';

export default function PodstavkiPodKancelyariuGrid() {
    return (
        <section className="flex flex-col gap-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {PODSTAVKI_POD_KANCELYARIU_PRODUCTS.map((product) => (
                    <ProductCard
                        key={`${product.title}-${product.description}`}
                        {...product}
                    />
                ))}
            </div>
        </section>
    );
}

