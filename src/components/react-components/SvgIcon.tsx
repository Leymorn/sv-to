interface Props {
    path: string;
    size?: string;
    color?: string;
    class?: string;
}

export default function SvgIcon({
    path,
    size = '16px',
    color = '#121212',
}: Props) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={size}
            height={size}
            fill={color}
        >
            <path d={path} />
        </svg>
    );
}
