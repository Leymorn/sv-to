import Image from '@/shared/ui/Image';
import { ADVANTAGES } from '../model/advantages';

export const Advantage = ({
    imageSrc,
    text,
}: {
    imageSrc: string;
    text: string;
}) => {
    return (
        <div className="flex items-center gap-5">
            <Image src={imageSrc} alt={text} classList="min-w-[89px]" />
            <p className="md:text-xl text-lg">{text}</p>
        </div>
    );
};

export default function AdvantagesBlock() {
    return (
        <>
            <h2 className="text-lg md:text-2xl font-semibold md:mb-12 mb-6 text-center">
                Преимущества
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 justify-items-start sm:justify-items-center lg:justify-items-start gap-5 md:mb-20 mb-10">
                {ADVANTAGES.map((advantage) => (
                    <Advantage key={advantage.text} {...advantage} />
                ))}
            </div>
        </>
    );
}
