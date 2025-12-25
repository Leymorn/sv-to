import { ProductCard } from '@/entities/product';
import { PODSTAVKI_POD_REKLAMU_PRODUCTS } from '../model/podstavki-pod-reklamu';

export default function PodstavkiPodReklamuGrid() {
    return (
        <section className="flex flex-col gap-6">
            <div className="grid gap-6 grid-cols-2-xs-3-lg-4">
                {PODSTAVKI_POD_REKLAMU_PRODUCTS.map((product) => (
                    <ProductCard
                        key={`${product.title}-${product.description}`}
                        {...product}
                    />
                ))}
            </div>
        </section>
    );
}
