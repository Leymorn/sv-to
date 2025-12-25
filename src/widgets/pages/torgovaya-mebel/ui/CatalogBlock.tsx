import LinkOverImage from '@/shared/ui/LinkOverImage';
import { TOGROVOY_MEBEL_CATEGORIES } from '../model/togrovaya-mebel-categories';

export default function CatalogBlock() {
    return (
        <div className="grid-cols-2-xs-3-lg-4 gap-5 md:mb-14 mb-7">
            {TOGROVOY_MEBEL_CATEGORIES.map((category) => (
                <LinkOverImage
                    key={category.text}
                    href={category.href}
                    text={category.text}
                    imageSrc={category.imageSrc}
                />
            ))}
        </div>
    );
}
