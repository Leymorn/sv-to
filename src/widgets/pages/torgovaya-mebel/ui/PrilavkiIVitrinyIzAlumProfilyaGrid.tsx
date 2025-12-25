import { ProductCard } from '@/entities/product';
import { PRILAVKI_I_VITRINY_IZ_ALUM_PROFILYA } from '../model/prilavki-i-vitriny-iz-alum-profilya';

export default function PrilavkiIVitrinyIzAlumProfilyaGrid() {
    return (
        <div className="grid-cols-2-xs-3-lg-4 gap-5 mb-6 md:mb-12">
            {PRILAVKI_I_VITRINY_IZ_ALUM_PROFILYA.map((item) => (
                <ProductCard
                    key={`${item.title}-${item.description}`}
                    {...item}
                    imageClassList="object-contain w-full h-full"
                />
            ))}
        </div>
    );
}


