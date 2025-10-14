import SvgIcon from '../../widgets/shared/ui/SvgIcon';
import { type IListItem } from '../../entities/ListItem/model/types';

interface Props {
    items: IListItem[];
}

export default function ListItems({ items }: Props): ReactElement {
    return (
        <>
            {items.map((item, index) => {
                const content = item.svgIconPath ? (
                    <SvgIcon path={item.svgIconPath} size={item.svgIconSize} />
                ) : (
                    <div key={index}>{item.title}</div>
                );

                return item.link && item.link.length > 0 ? (
                    <li key={index}>
                        <a href={item.link}>{content}</a>
                    </li>
                ) : (
                    <li>{content}</li>
                );
            })}
        </>
    );
}
