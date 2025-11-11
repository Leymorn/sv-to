interface Props {
    src: string;
    alt?: string;
    objectFit?: string;
    imageClassList?: string;
    classList?: string;
}

export default function Image({
    src,
    alt = 'image',
    objectFit = 'contain',
    imageClassList = '',
    classList = '',
}: Props) {
    return (
        <div
            className={`flex items-center justify-center overflow-hidden ${classList}`}
        >
            <img
                className={`${objectFit} ${imageClassList}`}
                src={src}
                alt={alt}
            />
        </div>
    );
}
