import React from 'react';
import type { EmblaOptionsType } from 'embla-carousel';
import { usePrevNextButtons, CarouselButton } from './CarouselButton';
import useEmblaCarousel from 'embla-carousel-react';
import Link from '../Link';
import { CarouselSlideArticle, type Article } from './CarouselSlideArticle';

type PropType = {
    slideWidth: string;
    images?: string[];
    options?: EmblaOptionsType;
    showLink?: boolean;
    articles?: Article[];
    gap?: string;
    carouselClassList?: string;
};

const Carousel: React.FC<PropType> = (props) => {
    const {
        options,
        slideWidth,
        images,
        showLink,
        articles,
        gap = '5',
        carouselClassList = '',
    } = props;

    const [emblaRef, emblaApi] = useEmblaCarousel(options);

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick,
    } = usePrevNextButtons(emblaApi);

    return (
        <section
            className={`max-w-[var(--breakpoint-xl)] w-full relative mx-auto ${carouselClassList}`}
        >
            <div className="overflow-hidden h-full" ref={emblaRef}>
                <div
                    className={`flex touch-pinch-zoom touch-pan-y h-full ${!options?.loop ? `gap-${gap}` : ''}`}
                >
                    {images && images.length > 0 ? (
                        images.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`Slide ${index + 1}`}
                                className={`w-full h-full object-cover min-w-0 transform-[translate3d(0, 0, 0)] ${options?.loop ? `pl-${gap}` : ''}`}
                                style={{ flex: `0 0 ${slideWidth}` }}
                            />
                        ))
                    ) : articles && articles.length > 0 ? (
                        <CarouselSlideArticle
                            articles={articles}
                            width={slideWidth}
                        />
                    ) : null}
                </div>
            </div>
            {showLink && (
                <Link
                    href="/"
                    type="gray"
                    text="Все проекты"
                    classList="absolute bottom-[10%] left-[50%] translate-x-[-50%] opacity-80"
                />
            )}
            <CarouselButton
                onClick={onPrevButtonClick}
                direction="left"
                disabled={prevBtnDisabled}
            />
            <CarouselButton
                direction="right"
                onClick={onNextButtonClick}
                disabled={nextBtnDisabled}
            />
        </section>
    );
};

export default Carousel;
