import Image from './Image';

interface Props {
    imageSrc?: string;
    text?: string;
    classList?: string;
    href: string;
    animate?: boolean;
    imageClassList?: string;
    imageWrapperClassList?: string;
}

export default function LinkWithImage({
    imageSrc,
    text,
    href,
    classList,
    animate = true,
    imageClassList,
    imageWrapperClassList,
}: Props) {
    return (
        <a
            href={href}
            className={`flex flex-col gap-5 md:gap-8 text-center leading-[100%] ${classList}`}
        >
            {imageSrc && (
                <Image
                    src={imageSrc}
                    objectFit="cover"
                    imageClassList={`${imageClassList} ${
                        animate
                            ? 'scale-110 hover:scale-101 transition-all duration-700'
                            : ''
                    }`}
                    classList={`rounded-[20px] max-h-[202px] ${imageWrapperClassList}`}
                />
            )}
            {text}
        </a>
    );
}
