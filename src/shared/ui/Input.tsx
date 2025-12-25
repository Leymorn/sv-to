interface Props {
    placeholder: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    classList?: string;
    name?: string;
}

export default function Input({
    placeholder,
    value,
    onChange,
    classList,
    name,
}: Props) {
    return (
        <input
            className={`w-full p-4 border border-main-color rounded-[20px] h-fit ${classList}`}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            name={name}
        />
    );
}
