import { VSTAVKI } from '../model/vstavki';
import { ProductCard } from '@/entities/product';

interface Props {
    show: boolean;
}

export default function VstavkiTable({ show }: Props) {
    return (
        <div className={`${show ? 'block' : 'hidden'}`}>
            <h2 className="text-lg md:text-xl text-center font-medium mb-6 md:mb-12">
                Вставки в экономпанели
            </h2>
            <div className={`grid-cols-2-xs-3-lg-4 gap-6 mb-6 md:mb-12`}>
                {VSTAVKI.map((vstavka) => (
                    <ProductCard key={vstavka.title} {...vstavka} />
                ))}
            </div>
        </div>
    );
}
