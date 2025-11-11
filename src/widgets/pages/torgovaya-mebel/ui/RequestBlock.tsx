import Input from '@/widgets/shared/ui/Input';
import Button from '@/widgets/shared/ui/Button';
import { useState } from 'react';
export default function RequestBlock() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [comment, setComment] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // TODO: send data to server
        console.log('submit', name, phone, comment);
        setName('');
        setPhone('');
        setComment('');
    };
    return (
        <>
            <h2 className="text-lg md:text-2xl md:mb-8 mb-4 font-semibold text-center">
                Хотите рассчитать стоимость или получить консультацию?
            </h2>
            <p className="text-center md:text-xl text-lg md:mb-11 mb-6">
                Оставьте заявку и наш менеджер с вами свяжется
            </p>
            <form
                onSubmit={(event) => handleSubmit(event)}
                className="flex gap-5"
            >
                <Input
                    placeholder="Имя"
                    value={name}
                    onChange={(value) => setName(value.target.value)}
                />
                <Input
                    placeholder="Телефон"
                    value={phone}
                    onChange={(value) => setPhone(value.target.value)}
                />
                <Input
                    placeholder="Комментарий"
                    value={comment}
                    onChange={(value) => setComment(value.target.value)}
                />
                <Button
                    text="Оставить заявку"
                    type="submit"
                    classList="w-full"
                />
            </form>
        </>
    );
}
