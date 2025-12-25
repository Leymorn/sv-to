import { PHONE_CONTACTS } from '@/shared/ui/contacts/contacts';

export default function ContactsPhones() {
    return (
        <>
            {PHONE_CONTACTS.map((phone, index) => {
                return (
                    <a href={phone.href} key={index}>
                        {phone.name}
                    </a>
                );
            })}
        </>
    );
}
