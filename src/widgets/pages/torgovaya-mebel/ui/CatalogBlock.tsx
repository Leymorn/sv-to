import LinkOverImage from '@/widgets/shared/ui/LinkOverImage';
import { TOGROVOY_MEBEL_CATEGORIES } from '../model/togrovaya-mebel-categories';

export default function CatalogBlock() {
    return (
        <>
            <h2 className="text-lg md:text-2xl font-semibold md:mb-6 mb-3 text-center">
                Каталог
            </h2>
            <div className="grid-cols-1-xs-2-lg-4 gap-5 md:mb-14 mb-7">
                {TOGROVOY_MEBEL_CATEGORIES.map((category) => (
                    <LinkOverImage
                        key={category.text}
                        href={category.href}
                        text={category.text}
                        imageSrc={category.imageSrc}
                    />
                ))}
            </div>
        </>
    );
}
