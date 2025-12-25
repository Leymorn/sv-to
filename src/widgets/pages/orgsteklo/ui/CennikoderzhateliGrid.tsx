import { ProductCard } from '@/entities/product';
import { CENNIKODERZHATELI_PRODUCTS } from '../model/cennikoderzhateli';

export default function CennikoderzhateliGrid() {
    return (
        <section className="flex flex-col gap-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {CENNIKODERZHATELI_PRODUCTS.map((product) => (
                    <ProductCard
                        key={`${product.title}-${product.description}`}
                        {...product}
                    />
                ))}
            </div>
        </section>
    );
}

