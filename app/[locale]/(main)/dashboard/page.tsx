'use client';
import Input from '@/app/_components/Input';
import Navbar from '@/app/_components/Navbar'
import SelectOptionNumber from '@/app/_components/SelectOptionNumber';
import React, { useState, useRef, useEffect, useCallback } from 'react'
export default function Page() {
    const [price, setPrice] = useState({
        min: 0,
        max: 0
    })
    console.log(price)
    const [number, setNumber] = useState(0)
    console.log(number)
    return (
        <div className='bg-secondary-950 h-screen'>
            <div className="bg-[linear-gradient(180deg,rgba(8,24,47,0.4)_13.08%,rgba(25,76,149,0)_100%)]">
                <Navbar />
            </div>
            <div className='px-[72px] pt-7'>
                <div className='flex justify-between shrink-0'>
                    <div className='filter relative flex w-[430px] pt-4 flex-col items-center shrink-0  rounded-t-[40px] rounded-b-0 border border-[rgba(255,255,255,0.10)] bg-[rgba(8,24,47,0.10)] backdrop-blur-[68.5px]'>
                        <div className='content filter overflow-x-hidden overflow-y-auto max-h-[calc(100vh-200px)] flex flex-col px-4 items-start gap-6 flex-shrink-0 self-stretch'>
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
                            <SelectOptionNumber max={5} value={number} setValue={setNumber} label='عدد الغرف' />
                            <SelectOptionNumber max={3} value={number} setValue={setNumber} label='عدد الغرف' />
                            <SelectOptionNumber max={2} value={number} setValue={setNumber} label='عدد الغرف' />
                        </div>
                        <div className='buttons w-full p-4 mt-auto bg-[rgba(8,24,47,0.10)] border-t border-[rgba(255,255,255,0.10)]'>
                            <button className='w-full flex py-2 justify-center items-center gap-1 rounded-[48px] border border-[rgba(255,255,255,0.10)] bg-[rgba(255,255,255,0.10)] backdrop-blur-[32px] text-[#EEF5FF] text-right text-base font-medium leading-6'>
                                dd
                            </button>
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
            <p className="text-text-gray1 w-full text-[16px] font-medium leading-[24px]">
                مساحة العقار
            </p>
            <div className='flex gap-4 self-stretch'>
                <Input type="number" label="الحد الأدنى" subLabel="متر" />
                <Input type="number" label="الحد الأعلى" subLabel="متر" />
            </div>
        </ItemlayerSectionFilter>
    )
}

function SelectPrice({ setPrice }: { setPrice: (price: { min: number, max: number }) => void }) {
    const [localPrice, setLocalPrice] = useState({ min: 0, max: 0 });
    const [sliderPositions, setSliderPositions] = useState({ min: 0, max: 100 });
    const MAX_PRICE = 1000;

    const handlePriceChange = (type: 'min' | 'max', value: string) => {
        const numValue = parseInt(value) || 0;
        const newPrice = { ...localPrice, [type]: numValue };

        // Update both price and slider positions
        setLocalPrice(newPrice);
        setSliderPositions({
            min: (newPrice.min / MAX_PRICE) * 100,
            max: (newPrice.max / MAX_PRICE) * 100
        });
        setPrice(newPrice);
    };

    const handleBarChange = (positions: { min: number, max: number }) => {
        const newPrice = {
            min: Math.round((positions.min / 100) * MAX_PRICE),
            max: Math.round((positions.max / 100) * MAX_PRICE)
        };
        setLocalPrice(newPrice);
        setSliderPositions(positions);
        setPrice(newPrice);
    };

    return (<ItemlayerSectionFilter>
        <p className="text-text-gray1 w-full text-[16px] font-medium leading-[24px]">
            حدد سعر العقار
        </p>
        <Bar
            positions={sliderPositions}
            onPositionChange={handleBarChange}
        />
        <p className="text-text-gray1 w-full text-[14px] font-light leading-[24px]">
            افضل العقارات تجدها بين سعر 200-900$
        </p>
        <div className='flex gap-4 self-stretch'>

            <Input
                id='min'
                value={localPrice.min}
                type="number"
                onChange={(e) => handlePriceChange('min', e.target.value)}
            />

            <Input
                id='max'
                value={localPrice.max}
                type="number"
                onChange={(e) => handlePriceChange('max', e.target.value)}
            />
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
function Bar({
    positions,
    onPositionChange
}: {
    positions: { min: number, max: number },
    onPositionChange: (positions: { min: number, max: number }) => void
}) {
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

        let newValue = ((right - e.clientX) / width) * 100;
        newValue = Math.max(0, Math.min(100, newValue));

        if (dragging === 'min') {
            onPositionChange({
                min: Math.min(newValue, positions.max),
                max: positions.max
            });
        } else {
            onPositionChange({
                min: positions.min,
                max: Math.max(newValue, positions.min)
            });
        }
    }, [dragging, positions, onPositionChange]);

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
            <div className="absolute w-full h-full bg-[rgba(255,255,255,0.06)] rounded-[46px]" />
            <div
                className="absolute h-full bg-bg-primary rounded-[46px]"
                style={{
                    right: `${positions.min}%`,
                    width: `${positions.max - positions.min}%`
                }}
            />
            <div
                className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-red-500 rounded-full cursor-pointer"
                style={{ right: `calc(${positions.min}% - 8px)` }}
                onMouseDown={handleMouseDown('min')}
            />
            <div
                className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-red-500 rounded-full cursor-pointer"
                style={{ right: `calc(${positions.max}% - 8px)` }}
                onMouseDown={handleMouseDown('max')}
            />
        </div>
    );
}