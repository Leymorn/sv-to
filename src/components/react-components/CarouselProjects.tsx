import CarouselButton from './CarouselButton';
import { useState } from 'react';

interface Props {
    banners: string[];
}

export default function CarouselProjects({ banners }: Props): ReactElement {
    const [mainBannerIndex, setMainBannerIndex] = useState(0);

    function previuosBanner() {
        setMainBannerIndex(
            mainBannerIndex === 0 ? banners.length - 1 : mainBannerIndex - 1
        );
    }

    function nextBanner() {
        setMainBannerIndex(
            mainBannerIndex === banners.length - 1 ? 0 : mainBannerIndex + 1
        );
    }

    return (
        <div className="carousel-projects">
            <CarouselButton
                direction="left"
                onClickFunction={previuosBanner}
            ></CarouselButton>
            <a className="carousel-projects__link" href="/">
                Все проекты
            </a>
            <img src={banners[mainBannerIndex]} />
            <CarouselButton
                direction="right"
                onClickFunction={nextBanner}
            ></CarouselButton>
        </div>
    );
}
