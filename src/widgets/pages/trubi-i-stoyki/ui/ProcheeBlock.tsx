import LinkWithImage from '@/shared/ui/LinkWithImage';
import { PROCHEE } from '../model/prochee';

export default function ProcheeBlock() {
    return (
        <>
            <span className="md:mb-6 mb-3 text-lg md:text-xl font-medium border border-main-color py-2 px-7 rounded-[20px] w-fit">
                Смотрите также:
            </span>
            <div className="grid-cols-2-xs-3-lg-4 gap-6 mb-10 md:mb-20">
                {PROCHEE.map((catalog) => (
                    <LinkWithImage
                        key={catalog.href}
                        {...catalog}
                        classList="text-left leading-[120%] text-lg md:text-xl font-medium"
                    />
                ))}
            </div>
        </>
    );
}
