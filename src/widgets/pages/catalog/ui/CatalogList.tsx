import { CATALOG_LINKS_WITH_IMAGES } from '@/shared/model/CatalogLinksWithImages';
import LinkWithImage from '@/shared/ui/LinkWithImage';

export default function CatalogList() {
    return (
        <div className="grid-cols-2-xs-3-lg-4 gap-6 lg:gap-y-30">
            {CATALOG_LINKS_WITH_IMAGES.map((catalog, index) => {
                return <LinkWithImage key={index} {...catalog} />;
            })}
        </div>
    );
}
