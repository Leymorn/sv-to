import { PROJECTS_LINKS } from '../model/ProjectsLinks';
import Link from '@/widgets/shared/ui/Link';

export default function CompanyProjects() {
    return (
        <ul className="w-full flex justify-between items-center gap-6 py-5 overflow-x-auto scrollbar-color-main-color-3">
            {PROJECTS_LINKS.map((link, index) => {
                return (
                    <li key={index} className="flex items-center gap-6">
                        {index !== 0 && <>|</>}
                        <Link type="flat" href={link.url} text={link.text} />
                    </li>
                );
            })}
        </ul>
    );
}
