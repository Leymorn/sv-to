import Link from '@/widgets/shared/ui/Link';
import Image from '@/widgets/shared/ui/Image';

export default function AboutArticle() {
    return (
        <div className="flex flex-col md:flex-row gap-10 lg:gap-20 xl:gap-30 items-center md:items-start">
            <article className="flex flex-col max-w-[630px] gap-3">
                Компания «СВ» является одним из крупнейших производителей
                торгового оборудования в Санкт-Петербурге и ЛО.
                <p>
                    Начиная с 2000-го года, мы успешно изготавливаем и
                    производим монтаж оборудования для магазинов на заказ. За
                    эти годы площадь производственных цехов «СВ» расширялась
                    несколько раз, а на данный момент составляет более 1200
                    кв.м., включая{' '}
                    <Link
                        href="https://sv-steklo.ru/"
                        text="стекольную мастерскую"
                        type="underline"
                        target="_blank"
                    />{' '}
                    и цех по изготовлению{' '}
                    <Link
                        href="/mebelnye-fasady"
                        text="мебельных фасадов"
                        type="underline"
                    />
                    .
                </p>
                Офис и производство локализуется на севере Петербурга, и имеют
                чёткую и отлаженную систему взаимодействий производственных
                процессов.
                <h2 className="text-lg md:text-2xl font-semibold my-5">
                    Почему мы?
                </h2>
                Поскольку поток покупателей растет, магазины должны становиться
                более функциональными и удобными. Торговое оборудование является
                одним из важных факторов развития бизнеса.
                <p>
                    Мы предлагаем взять на себя все заботы по проработке
                    интерьера вашего будущего магазина и предоставить Вам самое
                    качественное торговое оборудование:
                </p>
                <ul className="list-disc list-inside">
                    <li className="pl-2">кассовые стойки-ресепшн</li>
                    <li className="pl-2">витрины</li>
                    <li className="pl-2">стеллажи</li>
                    <li className="pl-2">манекены и многое другое.</li>
                </ul>
            </article>
            <Image
                src="/about.png"
                alt="About"
                classList="md:min-w-[400px] max-w-[500px] w-full"
            />
        </div>
    );
}
