import { FOOTER_NAVIGATION_LINKS } from '../model/FooterNavigationLinks';

export default function FooterNavigation() {
    return (
        <nav className="flex flex-col gap-3">
            {FOOTER_NAVIGATION_LINKS.map((link, index) => {
                return (
                    <a href={link.url} key={index}>
                        {link.text}
                    </a>
                );
            })}
        </nav>
    );
}
