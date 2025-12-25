import { ProductCard } from '@/entities/product';
import { STOYKI_RESEPSHN } from '../model/stoyki-resepshn';

export default function StoykiResepshnGrid() {
    return (
        <div className="grid-cols-2-xs-3-lg-4 gap-5 mb-6 md:mb-12">
            {STOYKI_RESEPSHN.map((item) => (
                <ProductCard
                    key={`${item.title}-${item.description}`}
                    {...item}
                    imageClassList="object-contain w-full h-full"
                />
            ))}
        </div>
    );
}

