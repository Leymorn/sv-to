const addressLines = [
    'г. Санкт-Петербург, ул. Маршала Новикова, 28 к 4Б',
    'Пионерская, автобус №9, 127, 171',
];

export default function AddressSection() {
    return (
        <article className="flex flex-col gap-2">
            <h3 className="text-lg md:text-xl font-semibold pb-4 md:pb-8">
                Адрес
            </h3>
            {addressLines.map((line) => (
                <span key={line}>{line}</span>
            ))}
            <span className="italic">Заезд с ул. Автобусная</span>
        </article>
    );
}
