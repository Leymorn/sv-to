export default function StagesBlock() {
    return (
        <>
            <h2 className="text-lg md:text-2xl font-semibold md:mb-8 mb-4 text-center">
                Этапы
            </h2>
            <div className="grid-cols-1-xs-2-lg-4 justify-items-center md:gap-12 gap-6 leading-[120%] md:mb-12 mb-6">
                <div className="flex gap-5 items-center max-w-[280px]">
                    <span className="text-8xl font-semibold text-main-color">
                        1
                    </span>
                    Заявка – опишите задачу, мы свяжемся с вами.
                </div>
                <div className="flex gap-5 items-center max-w-[280px]">
                    <span className="text-8xl font-semibold text-main-color">
                        2
                    </span>
                    Проектирование – создаём 3D-модель и рассчитываем стоимость.
                </div>
                <div className="flex gap-5 items-center max-w-[280px]">
                    <span className="text-8xl font-semibold text-main-color">
                        3
                    </span>
                    Производство – изготовление от 10 рабочих дней.
                </div>
                <div className="flex gap-5 items-center max-w-[280px]">
                    <span className="text-8xl font-semibold text-main-color">
                        4
                    </span>
                    Монтаж и запуск – всё под ключ.
                </div>
            </div>
        </>
    );
}
