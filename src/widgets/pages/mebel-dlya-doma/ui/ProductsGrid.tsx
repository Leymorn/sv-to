import { ProductCard } from '@/entities/product';
import { MEBEL_DLYA_DOMA_PRODUCTS } from '../model/products';

export default function MebelDlyaDomaProductsGrid() {
    return (
        <section className="flex flex-col gap-6 mb-10 md:mb-20">
            <h2 className="text-lg md:text-2xl font-semibold text-center">
                Каталог мебели для дома
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {MEBEL_DLYA_DOMA_PRODUCTS.map((product) => (
                    <ProductCard
                        key={`${product.title}-${product.description}`}
                        {...product}
                    />
                ))}
            </div>
        </section>
    );
}

