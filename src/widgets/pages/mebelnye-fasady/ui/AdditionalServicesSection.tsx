import {
    ADDITIONAL_SERVICES_TABLE_ROWS,
    ADDITIONAL_SERVICES_TABLE_TITLE,
} from '../model/additional-services-table';

export default function AdditionalServicesSection() {
    return (
        <div className="flex flex-col gap-5 mb-10 md:mb-20">
            <table className="w-full border-collapse border border-gray-color text-[12px] md:text-base">
                <thead>
                    <tr className="bg-main-color-3">
                        <th
                            scope="col"
                            className="py-2 px-4 font-semibold text-left"
                        >
                            {ADDITIONAL_SERVICES_TABLE_TITLE}
                        </th>
                        <th
                            scope="col"
                            className="py-2 px-4 font-semibold text-right whitespace-nowrap"
                        >
                            Цена
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {ADDITIONAL_SERVICES_TABLE_ROWS.map((row, index) => (
                        <tr
                            key={row.name}
                            className={`${
                                index % 2 === 0 ? 'bg-white' : 'bg-gray-color'
                            }`}
                        >
                            <th
                                scope="row"
                                className="py-3 px-4 font-normal text-left"
                            >
                                {row.name}
                            </th>
                            <td className="py-3 px-4 text-right">
                                {row.price}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
