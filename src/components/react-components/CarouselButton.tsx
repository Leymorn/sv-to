import SvgIcon from './SvgIcon';
import { mdiChevronLeft, mdiChevronRight } from '@mdi/js';

interface Props {
    direction: 'right' | 'left';
    onClickFunction: () => {};
}

export default function CarouselButton({
    direction,
    onClickFunction,
}: Props): ReactElement {
    return (
        <button
            className={`carousel-button ${direction}`}
            onClick={onClickFunction}
        >
            <SvgIcon
                path={direction === 'left' ? mdiChevronLeft : mdiChevronRight}
                size="48px"
                color="#51993D"
            ></SvgIcon>
        </button>
    );
}
