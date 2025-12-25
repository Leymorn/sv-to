export default function SuitableForBlock() {
    return (
        <>
            <p className="text-center md:mb-6 mb-4 md:text-xl text-lg">
                Кому подходит:
            </p>
            <div className="flex flex-col md:flex-row gap-8 items-center justify-center mb-10 md:mb-20">
                <ul className="px-10 py-5 border border-main-color-3 rounded-[20px] list-disc list-inside">
                    <li>Магазины одежды</li>
                    <li>Обувные магазины</li>
                    <li>Салоны красоты</li>
                    <li>Магазины косметики</li>
                    <li>Магазины сувениров и подарков</li>
                    <li>Салоны оптики</li>
                    <li>Аптеки</li>
                </ul>
                <ul className="px-10 py-5 border border-main-color-3 rounded-[20px] list-disc list-inside">
                    <li>Ювелирные магазины</li>
                    <li>Продовольственные магазины</li>
                    <li>Алкогольные магазины</li>
                    <li>Спортивные магазины</li>
                    <li>Магазины сантехники</li>
                    <li>Магазины бытовой техники</li>
                    <li>Магазины электроники</li>
                </ul>
            </div>
        </>
    );
}
