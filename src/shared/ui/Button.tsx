export enum ButtonVariant {
    DEFAULT = 'default',
    OUTLINE = 'outline',
}

interface Props {
    text: string;
    onClick?: () => void;
    classList?: string;
    htmlType?: 'button' | 'submit' | 'reset';
    type?: ButtonVariant | 'default' | 'outline';
    ariaPressed?: boolean;
}

export default function Button({
    text,
    onClick,
    classList = '',
    htmlType = 'button',
    type = ButtonVariant.DEFAULT,
    ariaPressed,
}: Props) {
    const variantClass =
        type === ButtonVariant.OUTLINE
            ? 'bg-white text-[var(--color-main-color)] border-main-color'
            : 'bg-main-color border-main-color text-white hover:text-white';

    return (
        <button
            type={htmlType}
            aria-pressed={ariaPressed}
            className={`rounded-[20px] md:text-xl text-base font-montserrat cursor-pointer hover:translate-y-0.5 active:translate-y-1
                 transition-all duration-300 active:translate-y-0.5 border md:py-[15px] py-[10px] px-[15px] md:px-[30px]
                 ${variantClass} ${classList}`}
            onClick={onClick}
        >
            {text}
        </button>
    );
}
