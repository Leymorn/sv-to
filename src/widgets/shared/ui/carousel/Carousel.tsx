import React from 'react';
import type { EmblaOptionsType } from 'embla-carousel';
import { PrevButton, NextButton, usePrevNextButtons } from './CarouselButtons';
import useEmblaCarousel from 'embla-carousel-react';

type PropType = {
    slides: string[];
    options?: EmblaOptionsType;
    slideSize: string;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
    const { slides, options, slideSize } = props;
    const [emblaRef, emblaApi] = useEmblaCarousel(options);

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick,
    } = usePrevNextButtons(emblaApi);

    return (
        <section className="embla">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {slides.map((slide: string) => (
                        <img
                            className="embla__slide"
                            style={{ flex: `0 0 ${slideSize}` }}
                            src={slide}
                            key={slide}
                        />
                    ))}
                </div>
            </div>

            <PrevButton
                onClick={onPrevButtonClick}
                disabled={prevBtnDisabled}
            />
            <NextButton
                onClick={onNextButtonClick}
                disabled={nextBtnDisabled}
            />
        </section>
    );
};

export default EmblaCarousel;
