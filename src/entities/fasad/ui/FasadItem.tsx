import Image from '@/shared/ui/Image';

export default function FasadItem(item: { imageSrc: string; text: string }) {
    return (
        <div className="flex flex-col items-center gap-5 text-lg md:text-xl font-medium">
            <Image
                src={item.imageSrc}
                alt={item.text}
                classList=" h-[200px] sm:h-[300px] md:h-[500px]"
            />
            {item.text}
        </div>
    );
}
