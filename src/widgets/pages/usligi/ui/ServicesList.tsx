import LinkWithImage from '@/widgets/shared/ui/LinkWithImage';
import { SERVICES_LIST_WITH_IMAGES } from '../../../shared/model/ServicesListWithImages';

export default function ServicesList() {
    return (
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {SERVICES_LIST_WITH_IMAGES.map((service, index) => {
                return <LinkWithImage key={index} {...service} />;
            })}
        </div>
    );
}
