import { ProductCard } from '@/entities/product';
import { DEMONSTRAZIONNIE_FORMY_PRODUCTS } from '../model/demonstrazionnie-formy';

export default function DemonstrazionnieFormyGrid() {
    return (
        <section className="flex flex-col gap-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {DEMONSTRAZIONNIE_FORMY_PRODUCTS.map((product) => (
                    <ProductCard
                        key={`${product.title}-${product.description}`}
                        {...product}
                    />
                ))}
            </div>
        </section>
    );
}

