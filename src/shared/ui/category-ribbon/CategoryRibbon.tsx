import LinkWithImage from '@/shared/ui/LinkWithImage';
import Link from '@/shared/ui/Link';

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
                <Link
                    type="gray"
                    href={href}
                    text={`Перейти в ${title.toLowerCase()}`}
                />
            </div>
            <div className="grid grid-cols-4 gap-5">
                {items.slice(0, 4).map((catalog, index) => {
                    return <LinkWithImage {...catalog} key={index} />;
                })}
            </div>
        </div>
    );
}
