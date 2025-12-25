import { ProductCard } from '@/entities/product';
import { STENDY } from '../model/stendy';

interface Props {
    show: boolean;
}

export default function StendyGrid({ show }: Props) {
    return (
        <div className={`${show ? 'block' : 'hidden'}`}>
            <h2 className="text-lg md:text-xl text-center font-medium mb-6 md:mb-12">
                Стенды с экономпанелью
            </h2>
            <div className="grid-cols-2-xs-3-lg-4 gap-6 mb-6 md:mb-12">
                {STENDY.map((stend) => (
                    <ProductCard
                        key={stend.title}
                        {...stend}
                        imageClassList="object-contain w-full h-full"
                    />
                ))}
            </div>
            <div className="text-sm md:text-base border border-main-color rounded-[20px] py-4 px-6">
                Стенды с экономпанелями — доступные конструкции на каркасе из
                ЛДСП, которые можно использовать как пристенные, перегородочные
                или самостоятельные островные решения. Корпус и экономпанели
                могут быть любого цвета из каталога, стандарт — белый. Все
                нестандартные оттенки изготавливаются под заказ и влияют на
                стоимость. Белые стенды всегда есть в наличии. Вставки для
                экономпанелей приобретаются отдельно: пластиковые или
                алюминиевые, любых цветов. Цена включает сами экономпанели.
                Стенды поставляются разобранными, сборка на производстве — 500
                ₽.
            </div>
        </div>
    );
}
