import Link from '@/shared/ui/Link';
import Image from '@/shared/ui/Image';
import { ROUTES } from '@/shared/router/routes';

export default function TextAndImage() {
    return (
        <>
            <h2 className="text-lg md:text-xl font-medium text-center mb-10 md:mb-20">
                Экономпанели и аксессуары для выкладки товара Универсальное
                торговое оборудование для магазинов любого формата. Панели,
                крючки, полки, держатели и корзины – всё, чтобы разместить
                продукцию удобно и эстетично.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10 md:mb-20">
                <div className="flex flex-col gap-5 text-lg md:text-xl font-medium">
                    Что такое экономпанель?
                    <p className="text-base md:text-lg font-normal mb-auto">
                        Экономпанель — это ламинированная панель из МДФ размером
                        1200 × 2400 мм (Ш × В) с горизонтальными пазами (шаг 100
                        или 50 мм), в которые вставляются специально
                        изготовленные аксессуары различного назначения: крючки,
                        полки, навесные корзины, кронштейны для одежды, головных
                        уборов, мячей и другие.
                    </p>
                    <div className="flex gap-5">
                        <Link
                            href={ROUTES.KONTAKTY}
                            text="Заказать индивидуальный план"
                            type="outline"
                            classList="text-center"
                        />
                    </div>
                </div>
                <Image
                    src="/ekonompaneli/ekonompaneli-index.png"
                    alt="Экономпанель"
                    imageClassList="object-cover w-full"
                />
            </div>
        </>
    );
}
