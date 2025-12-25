import { useState } from 'react';
import Image from '@/shared/ui/Image';
import Button from '@/shared/ui/Button';
import { ButtonVariant } from '@/shared/ui/Button';
import {
    PANEL_VARIANTS,
    type PanelVariant,
    type SolidColorOption,
    type TextureColorOption,
} from '../model/panels';
import ProductCard from '@/entities/product/ui/ProductCard';

export default function EkonompaneliConfigurator() {
    const defaultSolidColor = {
        id: 'white',
        label: 'Белый',
        color: 'transparent',
    };

    const [activeVariant, setActiveVariant] = useState<
        PanelVariant | undefined
    >(PANEL_VARIANTS[0] ?? undefined);

    const [selectedSolidColor, setSelectedSolidColor] =
        useState<SolidColorOption | null>(
            activeVariant?.colorOptions?.solidColors[0] ?? defaultSolidColor
        );

    const [selectedTexture, setSelectedTexture] =
        useState<TextureColorOption | null>(null);
    return (
        <div className="grid md:grid-cols-2 grid-cols-1 bg-white rounded-[32px] md:rounded-[40px] shadow-[0_12px_45px_rgba(0,0,0,0.08)] p-4 gap-6 mb-10 md:mb-20">
            <div className="flex flex-col gap-5">
                <div className="relative flex justify-center">
                    <Image
                        src={selectedTexture?.imageSrc ?? ''}
                        alt={selectedTexture?.label ?? ''}
                        classList="relative w-full bg-[url('/black-line.png')] md:h-[500px] h-[480px] border-2 border-gray-color
                         transition-all duration-300 shadow-xl"
                        style={{
                            backgroundSize: `${activeVariant?.stepSize === 100 ? 'calc(100% / 16)' : 'calc(100% / 28)'}`,
                        }}
                        imageClassList={`mix-blend-multiply w-full object-cover transition-all duration-300 ${selectedTexture?.label ? 'block' : 'hidden'}`}
                    />
                    <div
                        className="absolute top-0 left-0 w-full h-full mix-blend-multiply transition-all duration-300"
                        style={{ backgroundColor: selectedSolidColor?.color }}
                    ></div>
                    <div className="absolute top-2 w-fit mx-auto h-fit flex flex-col gap-5  p-2 rounded-[20px]">
                        {PANEL_VARIANTS.map((variant) => {
                            return (
                                <Button
                                    key={variant.id}
                                    text={variant.title}
                                    onClick={() => {
                                        setActiveVariant(variant);
                                        setSelectedSolidColor(
                                            defaultSolidColor
                                        );
                                        setSelectedTexture(null);
                                    }}
                                    type={
                                        activeVariant?.id === variant.id
                                            ? ButtonVariant.DEFAULT
                                            : ButtonVariant.OUTLINE
                                    }
                                    classList="!text-sm md:!text-base !p-3"
                                />
                            );
                        })}
                    </div>
                </div>
                <div className=" flex flex-wrap gap-3">
                    {activeVariant?.colorOptions?.solidColors.map((option) => {
                        const isActive = option.id === selectedSolidColor?.id;
                        return (
                            <button
                                key={option.id}
                                type="button"
                                aria-pressed={isActive}
                                className={`w-10 h-10 rounded-full border-3 transition-all 
                                    cursor-pointer
                                    ${
                                        isActive
                                            ? 'border-[var(--color-main-color)]'
                                            : 'border-gray-color'
                                    }`}
                                style={{ backgroundColor: option.color }}
                                onClick={() => {
                                    setSelectedSolidColor(option);
                                    setSelectedTexture(null);
                                }}
                            ></button>
                        );
                    })}
                    {activeVariant?.colorOptions?.textureColors.map(
                        (option) => {
                            const isActive = option.id === selectedTexture?.id;
                            return (
                                <button
                                    key={option.id}
                                    type="button"
                                    className={`w-10 h-10 rounded-full border-2 transition-all cursor-pointer ${
                                        isActive
                                            ? 'border-[var(--color-main-color)] scale-105'
                                            : 'border-gray-color'
                                    }`}
                                    style={{
                                        backgroundImage: `url(${option.imageSrc})`,
                                    }}
                                    aria-pressed={isActive}
                                    onClick={() => {
                                        setSelectedTexture(option);
                                        setSelectedSolidColor(null);
                                    }}
                                ></button>
                            );
                        }
                    )}
                </div>
            </div>

            <div className="flex flex-col gap-5">
                <span className="text-center md:text-xl text-lg font-medium">
                    Шаг пазов: {activeVariant?.stepSize} мм
                </span>
                <div className="grid grid-cols-2 gap-5">
                    {activeVariant?.pricing.map((pricing, idx) => {
                        return (
                            <ProductCard
                                key={`${activeVariant?.id}-${pricing.title}-${pricing.size}-${idx}`}
                                {...pricing}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
