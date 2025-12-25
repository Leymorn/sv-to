import LinkWithImage from '@/shared/ui/LinkWithImage';
import { SISTEMI_PERF_STOEK } from '../model/sistemi-perf-stoek';

export default function SistemiPerfStoek() {
    return (
        <>
            <h2 className="md:text-xl text-lg font-semibold md:mb-8 mb-4">
                Системы перфорированных стоек
            </h2>
            <p className="md:mb-6 mb-3">
                Системы Basis (в т.ч. Slim, PP, Light), Global, BS, Vertical –
                представляют собой перфорированные стойки высотой до 3-х метров,
                с навесными элементами: вешалами, кронштейнами, крепежами для
                ДСП/МДФ панелей, и прочими аксессуарами.
            </p>
            <div className="grid-cols-2-xs-3-lg-4 gap-6 mb-10 md:mb-20">
                {/* TODO: add links */}
                {SISTEMI_PERF_STOEK.map((system) => (
                    <LinkWithImage
                        key={system.href}
                        {...system}
                        classList="text-left leading-[120%] text-lg md:text-xl font-medium"
                        imageWrapperClassList="rounded-[0px]!"
                    />
                ))}
            </div>
        </>
    );
}
