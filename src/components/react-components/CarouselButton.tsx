import { Icon } from 'astro-icon/components';
import { mdiChevronLeft, mdiChevronRight } from '@mdi/js';

interface Props {
    direction: 'right' | 'left';
    onClickFunction: () => void;
}

export default function CarouselButton({
    direction,
    onClickFunction,
}: Props): React.ReactElement {
    return (
        <button
            className={`carousel-button ${direction}`}
            onClick={onClickFunction}
        >
            <Icon
                name={direction === 'left' ? mdiChevronLeft : mdiChevronRight}
                size="48px"
                color="#51993D"
            ></Icon>
        </button>
    );
}
