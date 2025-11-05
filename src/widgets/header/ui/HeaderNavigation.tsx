import { HEADER_NAVIGATION_LINKS } from '../model/HeaderNavigationLinks';
import Link from '@/widgets/shared/ui/Link';

export default function HeaderNavigation() {
    return (
        <>
            {HEADER_NAVIGATION_LINKS.map((link, index) => {
                return (
                    <Link
                        href={link.url}
                        text={link.text}
                        type="flat"
                        key={index}
                    />
                );
            })}
        </>
    );
}
