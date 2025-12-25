import { ProductCard } from '@/entities/product';
import { KRUCHKI } from '../model/kruchki';

interface Props {
    show: boolean;
}

export default function KruchkiPanel({ show }: Props) {
    return (
        <section className={show ? 'block' : 'hidden'}>
            <h2 className="text-lg md:text-xl text-center font-medium mb-6 md:mb-8">
                Крючки на эконом-панель
            </h2>
            <div className="grid-cols-2-xs-3-lg-4 gap-2 mb-6 md:mb-12">
                {KRUCHKI.map((item) => (
                    <ProductCard
                        key={`${item.title}-${item.description}`}
                        {...item}
                    />
                ))}
            </div>
        </section>
    );
}
