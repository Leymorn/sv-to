import LinkWithImage from '@/widgets/shared/ui/LinkWithImage';
import { CATALOG_LINKS_WITH_IMAGES } from '../../../shared/model/CatalogLinksWithImages';
import Link from '@/widgets/shared/ui/Link';
import { ROUTES } from '@/widgets/shared/router/routes';

export default function CatalogsAndPrices() {
    return (
        <div className="w-full flex flex-col gap-5 py-10 font-montserrat">
            <div className="flex justify-between">
                <span className="text-2xl font-semibold">Каталоги и цены</span>
                <Link
                    type="grey"
                    href={ROUTES.CATALOG_I_CENY}
                    text="Все каталоги"
                />
            </div>
            <div className="flex gap-5 justify-between">
                {CATALOG_LINKS_WITH_IMAGES.slice(0, 4).map((catalog, index) => {
                    return <LinkWithImage {...catalog} key={index} />;
                })}
            </div>
        </div>
    );
}
