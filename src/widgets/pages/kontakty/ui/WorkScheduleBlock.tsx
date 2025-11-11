const workSchedule = [
    'Пн–Пт: 9:30–18:30',
    'Обед: 13:00–14:00',
    'Сб–Вс: выходной',
];
export default function WorkSchedule() {
    return (
        <article className="flex flex-col gap-3">
            <h3 className="text-lg md:text-xl font-semibold pb-4 md:pb-8">
                Режим работы
            </h3>
            {workSchedule.map((item) => (
                <span key={item}>{item}</span>
            ))}
        </article>
    );
}
