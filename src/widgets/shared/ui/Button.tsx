export default function Button(
    classList: string,
    text: string,
    onClick: () => void,
    type?: 'link'
) {
    return (
        <button
            className={`${classList}
            ${type === 'link' ? 'text-main-color' : ''}`}
            onClick={onClick}
        >
            {text}
        </button>
    );
}
