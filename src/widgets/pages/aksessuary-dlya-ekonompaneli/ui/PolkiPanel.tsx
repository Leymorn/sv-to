import { ProductCard } from '@/entities/product';
import { POLKI } from '../model/polki';

interface Props {
    show: boolean;
}

export default function PolkiPanel({ show }: Props) {
    return (
        <section className={show ? 'block' : 'hidden'}>
            <h2 className="text-lg md:text-xl text-center font-medium mb-6 md:mb-8">
                Держатели для полок на эконом-панель
            </h2>
            <div className="grid-cols-2-xs-3-lg-4 gap-5 mb-6 md:mb-12">
                {POLKI.map((item) => (
                    <ProductCard
                        key={`${item.title}-${item.description}`}
                        {...item}
                    />
                ))}
            </div>
        </section>
    );
}
