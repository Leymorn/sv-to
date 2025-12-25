import Image from '@/shared/ui/Image';
import type { Product } from '../types/product';

function formatPrice(
    price: number | undefined,
    priceLabel: string | undefined
) {
    return price
        ? `${price.toLocaleString('ru-RU')} ₽`
        : priceLabel || 'Цена по запросу';
}

export default function ProductCard({
    imageSrc,
    title,
    description,
    price,
    priceLabel,
    size,
    imageClassList,
    variants,
}: Product) {
    return (
        <article
            className={`flex ${variants ? 'flex-col sm:flex-row col-span-2 sm:col-span-3 lg:col-span-4 w-full items-center' : 'flex-col'}`}
        >
            {imageSrc && (
                <Image
                    src={imageSrc}
                    alt={title}
                    classList={`max-h-[233px] h-full sm:min-w-[200px] ${imageClassList}`}
                    imageClassList={imageClassList}
                />
            )}
            <div
                className={`flex flex-col h-full ${variants ? 'text-center sm:px-2 w-full' : ''}`}
            >
                {title && (
                    <h3 className="md:text-xl text-lg font-medium mb-2 md:mb-4">
                        {title}
                    </h3>
                )}
                {size && <span className="mb-1 md:mb-2">{size}</span>}
                {description && (
                    <span className="mb-3 md:mb-6 whitespace-pre-line">
                        {description}
                    </span>
                )}
                {!variants && (
                    <span className="md:text-xl text-lg font-medium text-white bg-main-color rounded-[20px] px-4 py-2 w-fit mt-auto leading-[100%]">
                        {formatPrice(price, priceLabel)}
                    </span>
                )}
                {variants && (
                    <div className="grid grid-cols-[repeat(auto-fit,_minmax(100px,_1fr))]">
                        {variants.map((variant, index) => (
                            <div
                                key={`${title}-${variant.price}`}
                                className={`flex flex-col items-center justify-between gap-1 p-2 ${index === variants.length - 1 ? '' : ''}`}
                            >
                                <div className="flex flex-col">
                                    {variant.size && (
                                        <span>{variant.size}</span>
                                    )}
                                    {variant.description && (
                                        <span>{variant.description}</span>
                                    )}
                                </div>

                                <span className="md:text-xl text-lg font-medium text-white bg-main-color rounded-[20px] px-4 py-2 w-fit mt-auto whitespace-nowrap">
                                    {formatPrice(variant.price, priceLabel)}
                                </span>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </article>
    );
}
