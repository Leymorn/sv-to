import type { HTMLAttributeAnchorTarget, ReactElement } from 'react';

type LinkType = 'default' | 'outline' | 'grey' | 'underline' | 'flat';

interface Props {
    href: string;
    text: string;
    classList?: string;
    type?: LinkType;
    target?: HTMLAttributeAnchorTarget;
    children?: ReactElement;
}

export default function Link({
    href,
    text,
    classList,
    type = 'default',
    target,
    children,
}: Props): ReactElement {
    return (
        <a
            href={href}
            target={target}
            className={`rounded-[20px] cursor-pointer
                 hover:text-main-color transition-all duration-300 active:translate-y-0.5
                 leading-[100%] h-fit border
            ${type === 'default' && 'bg-main-color border-main-color text-white md:px-[30px] px-[15px] md:py-[20px] py-[10px] hover:text-white'}
            ${type === 'outline' && 'bg-transparent border-main-color md:px-[30px] px-[15px] md:py-[20px] py-[10px]'}
            ${type === 'grey' && 'bg-grey-color hover:text-black border-transparent md:px-[45px] px-[20px] md:py-[10px] py-[5px]'}
            ${type === 'underline' && 'underline border-transparent'}
            ${type === 'flat' && 'border-transparent'}
            ${classList}`}
        >
            {children}
            {text}
        </a>
    );
}
