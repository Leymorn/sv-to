interface Props {
    src: string;
    alt?: string;
    width?: string;
    height?: string;
    objectFit?: string;
    imageWidth?: string;
    imageHeight?: string;
    imageClassList?: string;
    classList?: string;
}

export default function Image({
    src,
    alt = 'image',
    width = '100%',
    height = '100%',
    objectFit = 'contain',
    imageWidth = '100%',
    imageHeight = '100%',
    imageClassList,
    classList,
}: Props) {
    return (
        <div
            className={`flex items-center justify-center h-[${height}] w-[${width}] overflow-hidden ${classList}`}
        >
            <img
                className={`w-[${imageWidth}] h-[${imageHeight}] ${objectFit} ${imageClassList}`}
                src={src}
                alt={alt}
            />
        </div>
    );
}
