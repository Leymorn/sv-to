import LinkWithImage from '@/shared/ui/LinkWithImage';
import { MEBELNYE_FASADY_ROUTES_AND_IMAGES } from '../model/subpages-rotes-and-images';

export default function MebelnyeFasadySubpagesList() {
    return (
        <div className="grid-cols-2-xs-3-lg-4 gap-5 mb-10 md:mb-20">
            {MEBELNYE_FASADY_ROUTES_AND_IMAGES.map((subpage) => (
                <LinkWithImage key={subpage.href} {...subpage} />
            ))}
        </div>
    );
}
