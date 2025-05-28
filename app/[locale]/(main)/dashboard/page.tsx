'use client';
import Navbar from '@/app/_components/Navbar'
import React, { useState, useRef, useEffect, useCallback } from 'react'
export default function Page() {
    const [price, setPrice] = useState({
        min: 0,
        max: 0
    })
    console.log(price)
    return (
        <div className='bg-secondary-950 h-screen'>
            <div className="bg-[linear-gradient(180deg,rgba(8,24,47,0.4)_13.08%,rgba(25,76,149,0)_100%)]">
                <Navbar />
            </div>
            <div className='px-[72px] pt-7'>
                <div className='flex justify-between shrink-0'>
                    <div className='filter flex w-[430px] pt-4 flex-col items-center shrink-0  rounded-t-[40px] rounded-b-0 border border-[rgba(255,255,255,0.10)] bg-[rgba(8,24,47,0.10)] backdrop-blur-[68.5px]'>
                        <div className='content filter flex flex-col px-4 items-start gap-6 flex-shrink-0 self-stretch'>
                            <div className="flex w-[396px] p-1 items-center gap-4 rounded-[40px] border border-[#212F43] bg-[rgba(8,24,47,0)] backdrop-blur-[37px]">
                                <button className="flex py-2 justify-center items-center gap-1 flex-[1_0_0] rounded-[48px] border border-[rgba(255,255,255,0.10)] bg-[rgba(255,255,255,0.10)] backdrop-blur-[32px] text-[#EEF5FF] text-right text-base font-medium leading-6">
                                    شقة
                                </button>
                                <button className="flex py-2 justify-center items-center gap-1 flex-[1_0_0] rounded-[48px] border border-transparent bg-transparent text-[#EEF5FF] text-right text-base font-medium leading-6">
                                    منزل
                                </button>
                            </div>
                            <SelectPrice setPrice={setPrice} />
                            <PropertyArea />
                        </div>
                        <div className='buttons'>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
function PropertyArea() {
    return (
        <ItemlayerSectionFilter>
            <p>المساحة</p>
        </ItemlayerSectionFilter>
    )
}
function SelectPrice({ setPrice }: { setPrice: (price: { min: number, max: number }) => void }) {
    const [localPrice, setLocalPrice] = useState({ min: 0, max: 0 });
    const MAX_PRICE = 1000;

    const handlePriceChange = (type: 'min' | 'max', value: string) => {
        const numValue = parseInt(value) || 0;
        const newPrice = { ...localPrice, [type]: numValue };

        setLocalPrice(newPrice);
        setPrice(newPrice);
    };

    const handleBarChange = (positions: { min: number, max: number }) => {
        const newPrice = {
            min: Math.round((positions.min / 100) * MAX_PRICE),
            max: Math.round((positions.max / 100) * MAX_PRICE)
        };
        setLocalPrice(newPrice);
        setPrice(newPrice);
    };

    return (<ItemlayerSectionFilter>
        <p className="text-text-gray1 w-full text-[16px] font-medium leading-[24px]">
            حدد سعر العقار
        </p>
        <Bar onPositionChange={handleBarChange} />
        <p className="text-text-gray1 w-full text-[14px] font-light leading-[24px]">
            افضل العقارات تجدها بين سعر 200-900$
        </p>
        <div className='flex gap-4 self-stretch'>
            <label htmlFor="min">
                <p className='text-text-gray1 text-[14px] font-light leading-[24px]'>
                    السعر الأدنى
                </p>
                <input
                    type="number"
                    id='min'
                    value={localPrice.min}
                    onChange={(e) => handlePriceChange('min', e.target.value)}
                    className="w-full p-2 rounded bg-transparent border border-stroke-border text-text-gray1"
                />
            </label>
            <label htmlFor="max">
                <p className='text-text-gray1 text-[14px] font-light leading-[24px]'>
                    السعر الأعلى
                </p>
                <input
                    type="number"
                    id='max'
                    value={localPrice.max}
                    onChange={(e) => handlePriceChange('max', e.target.value)}
                    className="w-full p-2 rounded bg-transparent border border-stroke-border text-text-gray1"
                />
            </label>
        </div>
    </ItemlayerSectionFilter>)
}
function ItemlayerSectionFilter({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col items-end gap-[20px] p-4 self-stretch rounded-[24px] border border-stroke-border bg-bg-bg-2">
            {children}
        </div>
    )
}
function Bar({ onPositionChange }: { onPositionChange: (positions: { min: number, max: number }) => void }) {
    const [values, setValues] = useState({ min: 0, max: 100 });
    const [dragging, setDragging] = useState<'min' | 'max' | null>(null);
    const barRef = useRef<HTMLDivElement>(null);

    const handleMouseDown = (type: 'min' | 'max') => (e: React.MouseEvent) => {
        e.preventDefault();
        setDragging(type);
    };

    const handleMouseMove = useCallback((e: MouseEvent) => {
        if (!dragging || !barRef.current) return;

        const rect = barRef.current.getBoundingClientRect();
        const width = rect.width;
        const right = rect.right;

        // Calculate percentage from right edge (for RTL)
        let newValue = ((right - e.clientX) / width) * 100;
        newValue = Math.max(0, Math.min(100, newValue));

        setValues(prev => {
            let newValues;
            if (dragging === 'min') {
                newValues = {
                    min: Math.min(newValue, prev.max),
                    max: prev.max
                };
            } else {
                newValues = {
                    min: prev.min,
                    max: Math.max(newValue, prev.min)
                };
            }
            onPositionChange(newValues);
            return newValues;
        });
    }, [dragging, onPositionChange]);

    const handleMouseUp = useCallback(() => {
        setDragging(null);
    }, []);

    useEffect(() => {
        if (dragging) {
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseup', handleMouseUp);
        }
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, [dragging, handleMouseMove, handleMouseUp]);

    return (
        <div ref={barRef} className="relative w-full h-[6px] direction-rtl">
            {/* Track background */}
            <div className="absolute w-full h-full bg-[rgba(255,255,255,0.06)] rounded-[46px]" />

            {/* Selected range */}
            <div
                className="absolute h-full bg-bg-primary rounded-[46px]"
                style={{
                    right: `${values.min}%`,
                    width: `${values.max - values.min}%`
                }}
            />

            {/* Handles */}
            <div
                className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-red-500 rounded-full cursor-pointer"
                style={{ right: `calc(${values.min}% - 8px)` }}
                onMouseDown={handleMouseDown('min')}
            />
            <div
                className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-red-500 rounded-full cursor-pointer"
                style={{ right: `calc(${values.max}% - 8px)` }}
                onMouseDown={handleMouseDown('max')}
            />
        </div>
    );
}