interface Props {
    placeholder: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    classList?: string;
}

export default function Input({
    placeholder,
    value,
    onChange,
    classList,
}: Props) {
    return (
        <input
            className={`w-full p-5 border border-main-color rounded-[20px] ${classList}`}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    );
}
