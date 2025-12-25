import { CLIENTS_IMAGES_LIST } from '../model/ClientsImagesList';
import Image from '@/shared/ui/Image';

export default function Clients() {
    return (
        <>
            <span className="text-[24px] font-semibold w-full text-center pb-11 pt-20 ">
                Наши клиенты
            </span>
            <div className="grid-cols-2-xs-3-lg-4 gap-5 w-full justify-items-center">
                {CLIENTS_IMAGES_LIST.map((client, index) => {
                    return (
                        <Image src={client.imageSrc} alt="client" key={index} />
                    );
                })}
            </div>
        </>
    );
}
