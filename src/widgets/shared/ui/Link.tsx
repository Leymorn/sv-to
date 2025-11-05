interface Props {
    href: string;
    text: string;
    classList?: string;
    type?: 'default' | 'outline' | 'grey' | 'underline' | 'flat';
}

export default function Link({
    href,
    text,
    classList,
    type = 'default',
}: Props): React.ReactNode {
    return (
        <a
            href={href}
            className={`w-fit  rounded-[20px] md:text-base text-sm font-montserrat cursor-pointer
            ${type === 'default' && 'bg-main-color text-white md:px-[30px] px-[15px] md:py-[20px] py-[10px]'}
            ${type === 'outline' && 'bg-transparent border border-main-color md:px-[30px] px-[15px] md:py-[20px] py-[10px]'}
            ${type === 'grey' && 'bg-grey-color md:px-[45px] px-[20px] md:py-[10px] py-[5px]'}
            ${type === 'underline' && 'underline'}
            ${type === 'flat' && ''}
            ${classList}`}
        >
            {text}
        </a>
    );
}
