import { ProductCard } from '@/entities/product';
import { AKSESSUARY_RAZNYE } from '../model/raznye';

interface Props {
    show: boolean;
}

export default function RaznyePanel({ show }: Props) {
    return (
        <section className={show ? 'block' : 'hidden'}>
            <h2 className="text-lg md:text-xl text-center font-medium mb-6 md:mb-12">
                Аксессуары для эконом-панели разные
            </h2>
            <div className="grid-cols-2-xs-3-lg-4 gap-2 mb-6 md:mb-12">
                {AKSESSUARY_RAZNYE.map((item) => (
                    <ProductCard
                        key={`${item.title}-${item.description}`}
                        {...item}
                    />
                ))}
            </div>
        </section>
    );
}
