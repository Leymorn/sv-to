interface Props {
    path: string;
    size?: string;
    color?: string;
    class?: string;
    viewBox?: string;
}

export default function SvgIcon({
    path,
    size = '16px',
    color = '#121212',
    viewBox = '0 0 24 24',
}: Props) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox={viewBox}
            width={size}
            height={size}
            fill="none"
        >
            <path d={path} fill={color} />
        </svg>
    );
}
