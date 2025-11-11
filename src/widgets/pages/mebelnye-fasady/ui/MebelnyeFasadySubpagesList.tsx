import LinkWithImage from '@/widgets/shared/ui/LinkWithImage';
import { MEBELNYE_FASADY_ROUTES_AND_IMAGES } from '../model/subpages-rotes-and-images';

export default function MebelnyeFasadySubpagesList() {
    return (
        <div className="grid-cols-1-xs-2-lg-4 gap-5 mb-10 md:mb-20">
            {MEBELNYE_FASADY_ROUTES_AND_IMAGES.map((subpage) => (
                <LinkWithImage key={subpage.href} {...subpage} />
            ))}
        </div>
    );
}
