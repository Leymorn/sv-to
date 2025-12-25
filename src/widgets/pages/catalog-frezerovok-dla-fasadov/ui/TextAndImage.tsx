import { ROUTES } from '@/shared/router/routes';
import Link from '@/shared/ui/Link';
import Image from '@/shared/ui/Image';

export default function TextAndImage() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10 md:mb-20">
            <div className="flex flex-col gap-5 text-lg md:text-xl font-medium">
                <h1 className="text-xl md:text-2xl font-semibold ">
                    Каталог фрезеровок для фасадов
                </h1>
                В каталоге представлены модели фрезеровок мебельных и кухонных
                фасадов в разных стилях: классика, кантри, модерн, а также
                фасады для детских. Чтобы купить фасады, выберите подходящий
                вариант фрезеровки, а затем – декор плёнки.
                <Link
                    href={ROUTES.MEBELNYE_FASADY.INDEX}
                    text="Посмотреть стоимость"
                    classList="mt-auto w-fit"
                />
            </div>
            <Image
                src="/mebelnye-fasady/catalog-frezerovok-dla-fasadov_2.png"
                alt="Catalog Frezerovok Dla Fasadov"
                classList="max-h-[400px] object-cover w-full"
                imageClassList="object-cover w-full"
            />
        </div>
    );
}
