'use client';
import { Button } from '@/app/_components/Button';
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
                <div className='flex justify-between shrink-0 gap-6'>
                    <div className='filter relative flex w-[430px] pt-4 flex-col items-center shrink-0  rounded-t-[40px] rounded-b-0 border border-[rgba(255,255,255,0.10)] bg-[rgba(8,24,47,0.10)] backdrop-blur-[68.5px]'>
                        <div className='content filter overflow-x-hidden overflow-y-auto max-h-[calc(99.3vh-200px)] flex flex-col px-4 items-start gap-6 flex-shrink-0 self-stretch'>
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
                    <div className="flex w-full flex-col items-start gap-[24px]">
                        <div className="flex justify-between items-center self-stretch">

                            <div className="flex w-[186px] items-center gap-[16px]">

                                <Button variant='gray' className='w-fit p-[12px_24px]' ><svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                    <path d="M7.25 12H17.25M17.25 12L13.25 8M17.25 12L13.25 16" stroke="#B8C6E3" stroke-linecap="round" stroke-linejoin="round" />
                                </svg></Button>
                                <p className="text-text-gray1 text-[18px] font-normal leading-[24px]">
                                    رجوع
                                </p>
                            </div> <Button variant="buttons" className='rounded-[16px]'>
                                <p className='typography-body-14-medium text-text-gray2'>ترتيب:</p>
                                <p className='typography-body-14-light text-bg-whaite'> السعر تنازلي</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M4 8.0461L7.96501 4.08203L11.9271 8.0461" stroke="#B8C6E3" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M16.4158 11.6992L12.832 15.2838M16.4158 11.6992L20.0002 15.2838M16.4158 11.6992L16.416 19.9186" stroke="#B8C6E3" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M7.96484 4.08203V19.9175" stroke="#B8C6E3" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </Button>
                        </div>
                        <div className='flex flex-col w-full gap-4'>
                            <div className="flex justify-end flex-row-reverse items-center gap-2">
                                <p className='text-text-gray1 w typography-subtitle-18-medium '>العقارات تتناسب مع الفلاتر المحددة.</p>
                                <p className='text-text-gray2 typography-title-24-light'>201</p>
                                <p className='text-text-gray1 typography-body-16-light'>من</p>
                                <p className='text-text-gray2 typography-title-24-light'>4 </p>
                            </div>
                            <div className='flex flex-col gap-[24px]'>
                                <div className='flex overflow-y-auto max-h-[calc(96.3vh-200px)] py-4 items-center content-center gap-[24px] self-stretch flex-wrap'>
                                    <CardProperty />
                                    <CardProperty />
                                    <CardProperty />
                                    <CardProperty />
                                    <CardProperty />
                                    <CardProperty />
                                    <CardProperty />
                                    <CardProperty />
                                    <CardProperty />
                                    <CardProperty />
                                    <CardProperty />
                                    <CardProperty />
                                </div>
                            </div>
                        </div>



                    </div>
                </div>
            </div>
        </div >
    )
}
function CardProperty() {
    return (
        <div
            className="flex h-[347px] min-w-[320px] max-w-[536px] p-[16px] justify-end items-end gap-[8px] flex-1 rounded-[16px] border border-stroke-border bg-[linear-gradient(180deg,rgba(8,24,47,0)_0%,var(--opacity-secondary-90,rgba(8,24,47,0.81))_86.5%),url('/images/company.png')] bg-[lightgray] bg-cover bg-no-repeat bg-center">
            <div className="flex flex-col items-end gap-[8px] flex-1" >
                <div className="flex flex-col justify-center items-end gap-[8px] self-stretch">
                    <p className='text-text-main w-full typography-body-16-medium'>شقة سكنية في المنصور</p>
                    <div className="flex justify-end items-center gap-[8px] self-stretch">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.48926 8.39054C1.50367 4.14996 4.95302 0.723964 9.19361 0.738326C13.4342 0.752779 16.8602 4.20213 16.8458 8.44272V8.52968C16.7936 11.2862 15.2545 13.834 13.3675 15.8253C12.2884 16.946 11.0833 17.9381 9.77621 18.7818C9.42672 19.0842 8.90832 19.0842 8.55882 18.7818C6.61033 17.5136 4.90019 15.9124 3.50665 14.0514C2.26461 12.4286 1.55942 10.459 1.48926 8.41663V8.39054Z" stroke="#B8C6E3" stroke-linecap="round" stroke-linejoin="round" />
                            <path opacity="0.4" d="M9.16741 10.9999C10.5265 10.9999 11.6283 9.8981 11.6283 8.53899C11.6283 7.17989 10.5265 6.07812 9.16741 6.07812C7.80831 6.07812 6.70654 7.17989 6.70654 8.53899C6.70654 9.8981 7.80831 10.9999 9.16741 10.9999Z" stroke="#B8C6E3" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <p className='text-text-gray2 w-full  typography-body-14-light'>بغداد/اليرموك/شارع نادي الصيد</p>
                    </div>
                </div>
                <div className="flex  items-center content-center gap-[8px] self-stretch flex-wrap">
                    <div className="flex justify-center items-center gap-[4px] px-[16px] py-[6px] rounded-[10px] border border-[rgba(234,28,28,0.05)] bg-opacity-secondary-10 backdrop-blur-[65px]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                            <path d="M7.48078 15.827L5.25344 15.8314C4.79185 15.8324 4.41745 15.4579 4.41846 14.9964L4.4233 12.7695" stroke="#B8C6E3" stroke-width="0.833333" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M4.83154 15.416L7.75144 12.4961" stroke="#B8C6E3" stroke-width="0.833333" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M4.42477 7.23225L4.41992 5.00507C4.41892 4.54342 4.79342 4.16892 5.25507 4.16992L7.48225 4.17477" stroke="#B8C6E3" stroke-width="0.833333" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M16.076 12.7695L16.0809 14.9967C16.0819 15.4584 15.7074 15.8329 15.2457 15.8319L13.0186 15.827" stroke="#B8C6E3" stroke-width="0.833333" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M13.0171 4.17447L15.2449 4.16992C15.7066 4.16898 16.081 4.54357 16.0799 5.00525L16.0746 7.23196" stroke="#B8C6E3" stroke-width="0.833333" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M15.6666 4.58398L12.7466 7.50395" stroke="#B8C6E3" stroke-width="0.833333" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <p className='text-text-main typography-body-14-light'>300م</p>
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