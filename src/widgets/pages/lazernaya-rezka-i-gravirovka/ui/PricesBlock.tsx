export default function PricesBlock(props: {
    prices: { thickness: string; price: string }[];
}) {
    const { prices } = props;
    return (
        <>
            <p className="text-center text-xl md:text-2xl font-semibold md:mb-6 mb-3">
                Цены
            </p>
            <div className="overflow-x-auto md:mb-20 mb-10 max-w-[1064px] w-full mx-auto">
                <table className="w-full border-collapse text-sm text-center">
                    <thead>
                        <tr className="bg-[var(--color-main-color-3)] md:text-lg text-base">
                            <th className="border border-[var(--color-main-color-3)] px-4 py-2">
                                Толщина
                            </th>
                            <th className="border border-[var(--color-main-color-3)] px-4 py-2">
                                Резка
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {prices.map((row) => (
                            <tr className="text-base">
                                <td className="border border-[var(--color-gray-color)] px-4 py-2">
                                    {row.thickness}
                                </td>
                                <td className="border border-[var(--color-gray-color)] px-4 py-2">
                                    {row.price}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}
