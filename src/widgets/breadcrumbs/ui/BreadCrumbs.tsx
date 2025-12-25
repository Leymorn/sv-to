import type { BreadCrumbItem } from '@/shared/model/BreadCrumb';
import Link from '@/shared/ui/Link';
import LongArrow from '@/icons/long-arrow.svg';

interface Props {
    items?: BreadCrumbItem[];
}

const arrowIcon = LongArrow.src;

export default function BreadCrumbs({ items = [] }: Props) {
    if (!items.length) {
        return null;
    }

    return (
        <nav
            className="flex items-center gap-2 sm:gap-3 text-sm md:text-base"
            aria-label="Хлебные крошки"
        >
            {items.map((item, index) => {
                const isLast = index === items.length - 1 || item.isActive;
                const linkClasses = `p-0 border-0 rounded-none bg-transparent text-xs md:text-base leading-[120%]
                    ${
                        isLast
                            ? 'text-main-color font-semibold cursor-default pointer-events-none'
                            : 'text-black font-semibold'
                    }`;

                return (
                    <div
                        key={`${item.href}-${item.label}-${index}`}
                        className="flex items-center gap-2 sm:gap-3 whitespace-nowrap"
                    >
                        <Link
                            href={item.href}
                            text={item.label}
                            type="flat"
                            classList={linkClasses}
                        />
                        {index < items.length - 1 && (
                            <img
                                src={arrowIcon}
                                alt=""
                                className="md:h-4 md:w-10 w-4 h-2 hidden sm:block"
                                loading="lazy"
                            />
                        )}
                    </div>
                );
            })}
        </nav>
    );
}
