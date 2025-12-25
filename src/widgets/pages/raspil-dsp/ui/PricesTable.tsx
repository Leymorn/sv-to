interface Props {
    title?: string;
    prices: { service: string; price: string }[];
}

export default function RaspilDspPricesTable({ title, prices }: Props) {
    return (
        <table className="w-full border-collapse text-sm md:text-base">
            <thead>
                <tr className="bg-[var(--color-main-color-3)] md:text-xl text-lg text-center">
                    {title ? (
                        <th
                            colSpan={2}
                            className="border border-[var(--color-main-color-3)] px-4 py-2 text-left  font-medium"
                        >
                            {title}
                        </th>
                    ) : (
                        <>
                            <th className="border border-[var(--color-main-color-3)] px-4 py-3 font-medium w-1/2">
                                Услуга
                            </th>
                            <th className="border border-[var(--color-main-color-3)] px-4 py-3 font-medium w-1/2">
                                Стоимость, руб.
                            </th>
                        </>
                    )}
                </tr>
            </thead>
            <tbody>
                {prices.map((row) => (
                    <tr
                        key={row.service}
                        className="border border-[var(--color-gray-color)]"
                    >
                        <td className="border border-[var(--color-gray-color)] px-4 py-2 w-1/2">
                            {row.service}
                        </td>
                        <td className="border border-[var(--color-gray-color)] px-4 py-2 text-center w-1/2">
                            {row.price}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
