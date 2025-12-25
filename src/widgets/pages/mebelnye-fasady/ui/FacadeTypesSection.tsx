import Link from '@/shared/ui/Link';

export default function FacadeTypesSection() {
    return (
        <section className="flex flex-col gap-4 md:gap-8 ">
            <h2 className="text-lg md:text-2xl font-semibold text-center">
                Виды мебельных фасадов
            </h2>

            <div className="flex flex-col gap-2 text-sm md:text-base leading-relaxed">
                <article className="flex flex-col gap-2">
                    <h3 className="text-base md:text-lg font-semibold">
                        МДФ-фасады
                    </h3>
                    <p>
                        МДФ — прочный, экологичный и универсальный материал.
                        Подходит для изготовления как простых, так и сложных по
                        форме фасадов (филенки, карнизы, профили). Часто
                        используется в детской мебели благодаря безопасности,
                        износостойкости и жаропрочности.
                    </p>
                    <div>
                        Финишная отделка:
                        <ul className="list-disc list-inside pl-2 pt-1 flex flex-col gap-1">
                            <li>
                                Эмаль (глянцевая/матовая, яркие цвета для
                                современных интерьеров)
                            </li>
                            <li>
                                Плёнка ПВХ (имитация дерева, камня, легко
                                моется)
                            </li>
                            <li>
                                Натуральный шпон (благородный вид, подходит под
                                лофт и классику)
                            </li>
                        </ul>
                    </div>
                </article>

                <article className="flex flex-col gap-2">
                    <h3 className="text-base md:text-lg  font-semibold">
                        Фасады из массива дерева
                    </h3>
                    <ul className="list-disc list-inside pl-2 flex flex-col gap-1">
                        <li>
                            Клеёный массив — надёжный материал с возможными
                            видимыми соединениями
                        </li>
                        <li>
                            Крашенный — сохраняет текстуру древесины, идеален
                            для стилей прованс и кантри
                        </li>
                        <li>
                            Тонированный — подчёркивает рисунок древесины,
                            покрывается лаком
                        </li>
                        <li>
                            Шпонированный — более доступная альтернатива
                            цельному массиву, выглядит благородно
                        </li>
                    </ul>
                </article>

                <article className="flex flex-col gap-2">
                    <h3 className="text-base md:text-lg  font-semibold">
                        Рамочные фасады
                    </h3>
                    <ul className="list-disc list-inside pl-2 flex flex-col gap-1">
                        <li>
                            Из массива — прочные, классические, с различными
                            вставками (стекло, зеркало, МДФ)
                        </li>
                        <li>
                            Из МДФ — бюджетный вариант, множество цветов и
                            вариантов филеек
                        </li>
                        <li>
                            Алюминиевые — идеально подходят для стилей
                            минимализм и хай-тек
                        </li>
                    </ul>
                </article>
            </div>

            <div className="flex justify-center">
                {/* TODO: add link */}
                <Link
                    href={'/'}
                    text="Подробнее о материалах для фасадов читайте в отдельной статье"
                    type="outline"
                    classList="text-center"
                />
            </div>
        </section>
    );
}
