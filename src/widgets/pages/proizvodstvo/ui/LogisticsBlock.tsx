import Image from '@/widgets/shared/ui/Image';
import Link from '@/widgets/shared/ui/Link';

export default function LogisticsBlock() {
    return (
        <>
            <h2 className="text-lg md:text-2xl font-semibold md:mb-8 mb-4 text-center">
                Сроки и логистика
            </h2>
            <div className="flex flex-col sm:flex-row gap-5 items-center justify-between max-w-[850px] w-full mx-auto md:mb-8 mb-4">
                <div className="flex flex-col items-center text-center gap-5 max-w-[300px]">
                    <Image
                        src="/proizvodstvo/logistika/standartniy-srok.png"
                        alt="Логистика"
                    />
                    Стандартный срок – 10 дней (зависят от
                    объёма/покраски/стекла)
                </div>
                <div className="flex flex-col items-center text-center gap-5 max-w-[300px]">
                    <Image
                        src="/proizvodstvo/logistika/dostavka-montazh.png"
                        alt="Логистика"
                    />
                    Доставка/монтаж: собственные бригады, работа по РФ, бережная
                    упаковка
                </div>
            </div>
            {/* TODO: add link */}
            <Link
                href="/"
                type="outline"
                text="Возможные причины увеличения сроков"
                classList="w-fit mx-auto text-center italic"
            />
        </>
    );
}
