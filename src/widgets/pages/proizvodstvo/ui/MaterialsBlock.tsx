import { MATERIALS } from '../model/materials';

export default function MaterialsBlock() {
    return (
        <>
            <h2 className="text-lg md:text-2xl font-semibold md:mb-8 mb-4 text-center">
                Материалы с которыми мы работаем
            </h2>
            <div className="flex gap-5 justify-between overflow-auto scrollbar-color-main-color-3 pb-2 md:mb-20 mb-10">
                {MATERIALS.map((material) => (
                    <span
                        key={material.text}
                        className="px-[30px] py-[20px] text-base bg-main-color rounded-[20px] text-white whitespace-nowrap "
                    >
                        {material.text}
                    </span>
                ))}
            </div>
        </>
    );
}
