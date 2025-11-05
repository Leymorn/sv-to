import { PHONE_CONTACTS } from '../../shared/model/contacts';

export default function HeaderContacts() {
    return (
        <>
            <a className="text-center" href="mailto:svto@mail.ru">
                svto@mail.ru
            </a>
            {PHONE_CONTACTS.map((phone, index) => {
                return (
                    <a className="text-center" href={phone.href} key={index}>
                        {phone.name}
                    </a>
                );
            })}
        </>
    );
}
