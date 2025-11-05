import { useState } from 'react';
import SvgIcon from '../../widgets/shared/ui/SvgIcon';
import { mdiMenuDown, mdiMenuUp } from '@mdi/js';
import ListItems from './ListItems';

interface Props {
    title: string;
    items: {
        title: string;
        link?: string;
        svgIconPath?: string;
        svgIconSize?: string;
    }[];
}

export default function DropDown({ title, items }: Props): React.ReactElement {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="drop-down">
            <button
                className="drop-down__title"
                onClick={() => setIsOpen(!isOpen)}
            >
                {title}
                <SvgIcon
                    path={isOpen ? mdiMenuUp : mdiMenuDown}
                    size="20px"
                ></SvgIcon>
            </button>
            <div
                className={
                    isOpen ? 'drop-down__content show' : 'drop-down__content'
                }
            >
                <ul className="drop-down__content__list">
                    <ListItems items={items}></ListItems>
                </ul>
            </div>
        </div>
    );
}
