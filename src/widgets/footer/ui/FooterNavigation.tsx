import { FOOTER_NAVIGATION_LINKS } from '../model/FooterNavigationLinks';
import Link from '@/shared/ui/Link';

export default function FooterNavigation() {
    return (
        <nav className="flex flex-col gap-3">
            {FOOTER_NAVIGATION_LINKS.map((link, index) => {
                return (
                    <Link
                        href={link.url}
                        key={index}
                        text={link.text}
                        type="flat"
                    ></Link>
                );
            })}
        </nav>
    );
}
