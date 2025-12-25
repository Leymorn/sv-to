import LinkWithImage from '@/shared/ui/LinkWithImage';
import { SISTEMI_TRUB } from '../model/sistemi-trub';

export default function SistemiTrubBlock() {
    return (
        <>
            <h2 className="md:text-xl text-lg font-semibold md:mb-8 mb-4">
                Системы труб
            </h2>
            <p className="md:mb-6 mb-3">
                Системы Joker и Master — это металлические трубы длиной 3 метра
                с набором крепежей и навесных элементов в ассортименте. Joker –
                хромированные трубы круглого сечения, Master – квадратного (хром
                или сатин).
            </p>
            <div className="grid-cols-2-xs-3-lg-4 gap-6 mb-10 md:mb-20">
                {/* TODO: add links */}
                {SISTEMI_TRUB.map((system) => (
                    <LinkWithImage
                        key={system.href}
                        {...system}
                        classList="text-left leading-[120%] text-lg md:text-xl font-medium"
                    />
                ))}
            </div>
        </>
    );
}
