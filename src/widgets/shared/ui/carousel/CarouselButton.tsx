import React, {
    type ComponentPropsWithRef,
    useCallback,
    useEffect,
    useState,
} from 'react';
import type { EmblaCarouselType } from 'embla-carousel';

type UsePrevNextButtonsType = {
    prevBtnDisabled: boolean;
    nextBtnDisabled: boolean;
    onPrevButtonClick: () => void;
    onNextButtonClick: () => void;
};

export const usePrevNextButtons = (
    emblaApi: EmblaCarouselType | undefined
): UsePrevNextButtonsType => {
    const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
    const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

    const onPrevButtonClick = useCallback(() => {
        if (!emblaApi) return;
        emblaApi.scrollPrev();
    }, [emblaApi]);

    const onNextButtonClick = useCallback(() => {
        if (!emblaApi) return;
        emblaApi.scrollNext();
    }, [emblaApi]);

    const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
        setPrevBtnDisabled(!emblaApi.canScrollPrev());
        setNextBtnDisabled(!emblaApi.canScrollNext());
    }, []);

    useEffect(() => {
        if (!emblaApi) return;

        onSelect(emblaApi);
        emblaApi.on('reInit', onSelect).on('select', onSelect);
    }, [emblaApi, onSelect]);

    return {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick,
    };
};

type PropType = ComponentPropsWithRef<'button'> & {
    direction: 'left' | 'right';
};

export const CarouselButton: React.FC<PropType> = (props) => {
    const { direction, disabled, onClick } = props;

    return (
        <button
            className={`items-center justify-center absolute top-1/2 -translate-y-1/2 
                bg-grey-color rounded-full w-[68px] h-[68px] hidden md:flex cursor-pointer
                ${
                    direction === 'right'
                        ? 'rotate-180 right-[-20px] shadow-[0px_-4px_4px_0px_#00000040]'
                        : 'left-[-20px] shadow-[0px_4px_4px_0px_#00000040]'
                }`}
            type="button"
            disabled={disabled}
            onClick={onClick}
        >
            <img
                src={'/arrow-left-main-color.svg'}
                alt="Previous"
                className={`w-[15px] h-[26px] text-main-color ${disabled ? 'opacity-50' : ''}`}
            />
        </button>
    );
};
