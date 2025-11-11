import Link from './Link';

interface Props {
    href: string;
    text: string;
    imageSrc: string;
}

export default function LinkOverImage({ href, text, imageSrc }: Props) {
    return (
        <div
            className="relative flex items-end justify-center h-[202px] pb-5"
            style={{ backgroundImage: `url(${imageSrc})` }}
        >
            <Link
                href={href}
                text={text}
                type="grey"
                classList=" mx-2 text-center"
            />
        </div>
    );
}
