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

type PropType = ComponentPropsWithRef<'button'>;

export const PrevButton: React.FC<PropType> = (props) => {
    const { children, ...restProps } = props;

    return (
        <button
            className="embla__button embla__button--prev"
            type="button"
            {...restProps}
        >
            <svg
                width="15"
                height="26"
                viewBox="0 0 15 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[15px] h-[26px] text-main-color"
            >
                <path
                    d="M14.9493 2.15998L12.7832 0.0399837L0.985122 11.594C0.794943 11.7791 0.644015 11.9993 0.541023 12.2418C0.438031 12.4843 0.38501 12.7443 0.38501 13.007C0.38501 13.2696 0.438031 13.5297 0.541023 13.7722C0.644015 14.0147 0.794943 14.2348 0.985122 14.42L12.7832 25.98L14.9472 23.86L3.87391 13.01L14.9493 2.15998Z"
                    fill="currentColor"
                />
            </svg>
            {children}
        </button>
    );
};

export const NextButton: React.FC<PropType> = (props) => {
    const { children, ...restProps } = props;

    return (
        <button
            className="bg-grey-color rounded-full w-[68px] h-[68px] rotate-180"
            type="button"
            {...restProps}
        >
            <svg
                width="15"
                height="26"
                viewBox="0 0 15 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[15px] h-[26px] text-main-color"
            >
                <path
                    d="M14.9493 2.15998L12.7832 0.0399837L0.985122 11.594C0.794943 11.7791 0.644015 11.9993 0.541023 12.2418C0.438031 12.4843 0.38501 12.7443 0.38501 13.007C0.38501 13.2696 0.438031 13.5297 0.541023 13.7722C0.644015 14.0147 0.794943 14.2348 0.985122 14.42L12.7832 25.98L14.9472 23.86L3.87391 13.01L14.9493 2.15998Z"
                    fill="currentColor"
                />
            </svg>
            {children}
        </button>
    );
};
