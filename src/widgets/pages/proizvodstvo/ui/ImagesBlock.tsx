import Image from '@/widgets/shared/ui/Image';
import { IMAGES } from '../model/images';

const ImageItem = ({ imageSrc, text }: { imageSrc: string; text: string }) => {
    return (
        <div className="flex flex-col items-center gap-5">
            <Image src={imageSrc} alt={text} classList="h-[200px]" />
            <p className="text-base text-center">{text}</p>
        </div>
    );
};

export default function ImagesBlock() {
    // TODO: add carousel
    return (
        <div className="grid-cols-1-xs-2-lg-4 gap-5 md:mb-20 mb-10">
            {IMAGES.map((image) => (
                <ImageItem key={image.imageSrc} {...image} />
            ))}
        </div>
    );
}
