interface Props {
    text: string;
    onClick?: () => void;
    classList?: string;
    type?: 'button' | 'submit' | 'reset';
}

export default function Button({
    text,
    onClick,
    classList,
    type = 'button',
}: Props) {
    return (
        <button
            type={type}
            className={`rounded-[20px] md:text-xl text-base font-montserrat cursor-pointer
                 transition-all duration-300 active:translate-y-0.5
               border bg-main-color border-main-color text-white md:py-[15px] py-[10px] ${classList}`}
            onClick={onClick}
        >
            {text}
        </button>
    );
}
