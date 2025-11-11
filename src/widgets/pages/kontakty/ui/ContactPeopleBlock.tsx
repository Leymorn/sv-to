export const CONTACT_PERSONS = [
    'Белова Евгения Георгиевна — коммерческий директор',
    'Чернцугова Татьяна — дизайнер-менеджер',
    'Фирле Юлия — дизайнер-менеджер',
    'Курилова Анастасия — дизайнер-менеджер',
    'Татьяна Старишка — менеджер по продажам',
];

export default function ContactPeople() {
    return (
        <article className="flex flex-col">
            <h3 className="text-lg md:text-xl font-semibold pb-4 md:pb-8">
                Контактные лица
            </h3>
            {CONTACT_PERSONS.map((person) => (
                <span key={person}>{person}</span>
            ))}
        </article>
    );
}
