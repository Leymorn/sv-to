import { ADVANTAGES } from '../model/AdvantagesList';
import Image from '@/shared/ui/Image';

export default function CompanyAdvantages() {
    return (
        <div className="grid-cols-1-xs-2-md-3-lg-4 gap-5 py-10 w-full justify-between justify-items-center">
            {ADVANTAGES.map((advantage, index) => {
                return (
                    <div
                        className={`flex items-center border border-main-color rounded-[20px] 
                    py-[10px] pl-5 pr-8 max-w-[305px] w-full`}
                        key={index}
                    >
                        <Image
                            src={advantage.imageUrl}
                            classList="w-[56px] h-[59px]"
                        />
                        <div className="w-full text-center">
                            {advantage.text}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
