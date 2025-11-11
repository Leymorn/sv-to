const legalAddressLines = [
    '197341, Санкт-Петербург, вн.тер.г.',
    'Муниципальный округ Комендантский аэродром, аллея Поликарпова, д. 6, к. 2, лит. А, пом. 13Н, офис 33, пом. 1',
];

export default function LegalAddress() {
    return (
        <article className="flex flex-col gap-3">
            <h3 className="text-lg md:text-xl font-semibold pb-4 md:pb-8">
                Юридический адрес
            </h3>
            {legalAddressLines.map((line) => (
                <span key={line}>{line}</span>
            ))}
        </article>
    );
}
