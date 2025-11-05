import { CATALOG_LINKS_WITH_IMAGES } from '@/widgets/shared/model/CatalogLinksWithImages';
import LinkWithImage from '@/widgets/shared/ui/LinkWithImage';

export default function CatalogList() {
    return (
        <div className="grid-cols-1-xs-2-lg-4 gap-6 lg:gap-y-30">
            {CATALOG_LINKS_WITH_IMAGES.map((catalog, index) => {
                return <LinkWithImage key={index} {...catalog} />;
            })}
        </div>
    );
}
