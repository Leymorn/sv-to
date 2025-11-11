import {
    FASADI_PRICES_TABLE_COLUMN_HEADERS,
    FASADI_PRICES_TABLE_SECTIONS,
} from '../model/fasadi-prices-table';

export default function FasadiPricesSection() {
    return (
        <section className="mb-10 md:mb-20">
            <div className="flex flex-col md:flex-row gap-5 pb-8">
                <div className="w-full flex flex-col gap-2">
                    <h2 className="text-lg md:text-2xl font-semibold">
                        Стоимость фасадов на заказ (за кв.м.)
                    </h2>
                    Минимальная стоимость заказа - стоимость за 1 кв.м.
                </div>
                <span className="flex items-center justify-center text-center border border-main-color rounded-[20px] md:p-5 p-2 w-full italic">
                    Скидка диллерам - 10%
                </span>
            </div>
            <div className="flex flex-col">
                {FASADI_PRICES_TABLE_SECTIONS.map((section) => (
                    <div
                        key={section.title}
                        className="overflow-hidden border border-grey-color"
                    >
                        <table className="w-full border-collapse text-[12px] md:text-base">
                            <thead>
                                <tr className=" bg-main-color-3">
                                    <th
                                        scope="col"
                                        className="py-2 font-semibold"
                                    >
                                        {section.title}
                                    </th>
                                    {FASADI_PRICES_TABLE_COLUMN_HEADERS.map(
                                        (header) => (
                                            <th
                                                key={header}
                                                scope="col"
                                                className="py-2 px-0.5 font-semibold"
                                            >
                                                {header}
                                            </th>
                                        )
                                    )}
                                </tr>
                            </thead>
                            <tbody>
                                {section.rows.map((row, index) => (
                                    <tr
                                        key={row.name}
                                        className={`${
                                            index % 2 === 0
                                                ? 'bg-white'
                                                : 'bg-grey-color'
                                        }`}
                                    >
                                        <th
                                            scope="row"
                                            className="py-2 font-normal max-w-50"
                                        >
                                            {row.name}
                                        </th>
                                        {row.values.map((value) => (
                                            <td
                                                key={value}
                                                className=" text-center"
                                            >
                                                {value}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ))}
            </div>
        </section>
    );
}
