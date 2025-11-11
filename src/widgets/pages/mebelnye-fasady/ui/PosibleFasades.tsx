export default function PosibleFasades() {
    return (
        <div className="flex flex-col md:flex-row gap-5 mb-10 md:mb-20">
            <ul className="list-disc list-inside w-full">
                Возможно изготовление следующих вариантов исполнения фасадов:
                <li className="pt-2">фасады МДФ, облицованные пленкой ПВХ</li>
                <li>фасады МДФ, крашенные по каталогу RAL</li>
                <li>фасады МДФ с покрытием HPL-пластиком и кромкой ABS</li>
                <li className="pb-2">фасады из массива дерева</li>
                Крашеные фасады могут быть матовыми или глянцевыми.
            </ul>
            <span className="flex items-center justify-center text-center border border-main-color rounded-[20px] md:p-5 p-2 w-full italic">
                Возможно изготовление индивидуальных фрезеровок, стоимость
                изготовления уточняйте у менеджера
            </span>
        </div>
    );
}
