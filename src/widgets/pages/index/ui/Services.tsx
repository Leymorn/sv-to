import LinkWithImage from '@/widgets/shared/ui/LinkWithImage';
import { SERVICES_LIST_WITH_IMAGES } from '../../../shared/model/ServicesListWithImages';
import Link from '@/widgets/shared/ui/Link';
import { ROUTES } from '@/widgets/shared/router/routes';

export default function CatalogsAndPrices() {
    return (
        <div className="w-full flex flex-col gap-5 py-10 font-montserrat">
            <div className="flex justify-between">
                <span className="text-2xl font-semibold">Услуги</span>
                <Link type="grey" href={ROUTES.USLUGI} text="Все услуги" />
            </div>
            <div className="flex gap-5 justify-between">
                {SERVICES_LIST_WITH_IMAGES.slice(0, 4).map((service, index) => {
                    return (
                        <LinkWithImage
                            key={index}
                            {...service}
                            classList="flex-grow w-full"
                        />
                    );
                })}
            </div>
        </div>
    );
}
