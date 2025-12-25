import { PHONE_CONTACTS } from '@/shared/ui/contacts/contacts';
import Link from '@/shared/ui/Link';

export default function HeaderContacts() {
    return (
        <>
            <Link
                text="svto@mail.ru"
                type="flat"
                href="mailto:svto@mail.ru"
                classList="text-[14px] lg:text-[20px] text-center"
            />
            {PHONE_CONTACTS.map((phone, index) => {
                return (
                    <Link
                        text={phone.name}
                        type="flat"
                        href={phone.href}
                        key={index}
                        classList="text-[14px] lg:text-[20px] text-center"
                    ></Link>
                );
            })}
        </>
    );
}
