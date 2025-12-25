interface Props {
    src: string;
    alt?: string;
    objectFit?: string;
    imageClassList?: string;
    classList?: string;
    style?: React.CSSProperties;
    imageStyle?: React.CSSProperties;
}

export default function Image({
    src,
    alt = 'image',
    objectFit = 'contain',
    imageClassList = '',
    classList = '',
    style,
    imageStyle,
}: Props) {
    return (
        <div
            className={`flex items-center justify-center overflow-hidden ${classList}`}
            style={style}
        >
            <img
                className={`object-${objectFit} h-full ${imageClassList}`}
                src={src}
                alt={alt}
                style={imageStyle}
            />
        </div>
    );
}
