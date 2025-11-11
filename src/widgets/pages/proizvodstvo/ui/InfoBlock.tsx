import { INFO } from '../model/info';

const InfoItem = ({ title, text }: { title: string; text: string }) => {
    return (
        <div className="flex flex-col items-center">
            <span className="text-8xl font-semibold text-main-color mb-4">
                {title}
            </span>
            <div className="h-0.5 w-[229px] bg-grey-color mb-1"></div>
            <p className="text-lg md:text-xl md:mb-8 mb-4 text-center">
                {text}
            </p>
        </div>
    );
};

export default function InfoBlock() {
    return (
        <div className="grid-cols-1-xs-2-lg-4">
            {INFO.map((item) => (
                <InfoItem key={item.title} {...item} />
            ))}
        </div>
    );
}
