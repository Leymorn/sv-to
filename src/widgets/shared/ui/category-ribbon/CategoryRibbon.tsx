import LinkWithImage from '@/widgets/shared/ui/LinkWithImage';
import { CATALOG_LINKS_WITH_IMAGES } from '../../model/CatalogLinksWithImages';
import Link from '@/widgets/shared/ui/Link';
import { ROUTES } from '@/widgets/shared/router/routes';

interface Props {
    title: string;
    href: string;
    items: {
        imageSrc: string;
        text: string;
        href: string;
    }[];
}

export default function CategoryRibbon({ title, href, items }: Props) {
    return (
        <div className="w-full flex flex-col gap-5 py-10 font-montserrat">
            <div className="flex justify-between">
                <span className="text-lg md:text-2xl font-semibold">
                    {title}
                </span>
                <Link type="grey" href={href} text="Все каталоги" />
            </div>
            <div className="flex gap-5 justify-between">
                {items.slice(0, 4).map((catalog, index) => {
                    return <LinkWithImage {...catalog} key={index} />;
                })}
            </div>
        </div>
    );
}
