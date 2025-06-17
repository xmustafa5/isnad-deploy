'use client';
import { Button } from '@/app/_components/Button';
// import SelectOptionNumber from '@/app/_components/SelectOptionNumber';
import { cn } from '@/lib/utils';
import React from 'react'
export default function Page() {
    // const [price, setPrice] = useState({
    //     min: 0,
    //     max: 0
    // })
    // console.log(price)
    // const [number, setNumber] = useState(0)
    return (
        <div className='flex justify-between shrink-0 gap-6'>
            {/* <div className='filter hidden  relative xl:flex w-[430px] pt-4 flex-col items-center shrink-0  rounded-t-[40px] rounded-b-0 border border-[rgba(255,255,255,0.10)] bg-[rgba(8,24,47,0.10)] backdrop-blur-[68.5px]'>
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
                    </div> */}
            <div className="flex w-full flex-col items-start gap-[24px]">
                <div className="flex justify-between items-center self-stretch">
                    <div className="flex w-[186px] items-center gap-[16px]">
                        <Button variant='gray' className='w-fit p-[8px_8px] md:p-[12px_24px]' >
                            <svg xmlns="http://www.w3.org/2000/svg" className='w-6 h-6 md:w-6 md:h-6' viewBox="0 0 25 24" fill="none">
                                <path d="M7.25 12H17.25M17.25 12L13.25 8M17.25 12L13.25 16" stroke="#B8C6E3" stroke-linecap="round" stroke-linejoin="round" />
                            </svg></Button>
                        <p className="text-text-gray1 text-[14px] md:text-[18px] font-normal leading-[24px]">
                            رجوع
                        </p>
                    </div>
                    <Button variant="buttons" className='rounded-[16px] w-fit px-1 md:px-4'>
                        <p className='typography-body-12-light md:typography-body-14-medium text-text-gray2'>ترتيب:</p>
                        <p className='typography-body-12-light md:typography-body-14-medium text-bg-whaite'> السعر تنازلي</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M4 8.0461L7.96501 4.08203L11.9271 8.0461" stroke="#B8C6E3" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M16.4158 11.6992L12.832 15.2838M16.4158 11.6992L20.0002 15.2838M16.4158 11.6992L16.416 19.9186" stroke="#B8C6E3" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M7.96484 4.08203V19.9175" stroke="#B8C6E3" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </Button>
                </div>

                <div className='flex flex-col w-full gap-4'>
                    <div className="flex justify-end flex-row-reverse items-center gap-2">
                        <p className='text-text-gray1 typography-body-12-light  md:typography-subtitle-18-medium '>العقارات تتناسب مع الفلاتر المحددة.</p>
                        <p className='text-text-gray2 typography-body-16-light md:typography-title-24-light'>201</p>
                        <p className='text-text-gray1 typography-body-12-light md:typography-body-16-light'>من</p>
                        <p className='text-text-gray2 typography-body-16-light md:typography-title-24-light'>4 </p>
                    </div>
                    <div className='flex flex-col gap-[24px]'>
                        <div className='flex overflow-y-auto max-h-[calc(95.3vh-200px)] py-4 items-center content-start gap-[24px] self-stretch justify-center xl:justify-start flex-wrap'>
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
    )
}

// const ContainerSvg = () => {
//     return (
//         <svg
//             width="400"
//             height="187"
//             viewBox="0 0 400 187"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//             className="w-full h-auto"
//         >
//             <path
//                 d="M400 55.2216V0.230469H351.175C367.444 18.5532 383.732 36.8989 400 55.2216Z"
//                 fill="#C57340"
//                 fillOpacity="0.03"
//             />
//             <path
//                 d="M9.79004 55.2216V0.230469H-39.0345C-22.7665 18.5532 -6.47802 36.8989 9.79004 55.2216Z"
//                 fill="#C57340"
//                 fillOpacity="0.03"
//             />
//             <path
//                 d="M302.351 55.2216H351.176V0.230469C334.908 18.5532 318.619 36.8989 302.351 55.2216Z"
//                 fill="#C57340"
//                 fillOpacity="0.03"
//             />
//             {/* Add more <path> or other SVG elements here if needed */}
//         </svg>
//     );
// };

const RectangleComplex = () => {
    return (
        <div className='w-full h-full shrink-0'>

            <div className=' shrink-0 flex'>
                {Array.from({ length: 12 }).map((_, index) => (
                    <>
                        <div key={index} className={cn("relative shrink-0 h-[50px] w-[50px] flex items-center overflow-hidden justify-center ", index % 2 !== 0 && "rotate-90")}>
                            <div className={cn("absolute   h-[160px] w-[50px] bg-white/10 backdrop-blur-sm left-9 rotate-[135deg]")} ></div>
                        </div>

                    </>
                ))}
            </div>
            <div className='flex  shrink-0   h-full'>
                {Array.from({ length: 12 }).map((_, index) => (
                    <>
                        <div key={index} className={cn("relative  shrink-0   h-[full] w-[50px] flex items-center overflow-hidden justify-center bg-bla ", index % 2 !== 0 && "scale-x-[-1] rotate-180")}>
                            <div className={cn("absolute -top-5  h-[190px] w-[80px] bg-white/10 backdrop-blur-sm left-[30px]  rotate-[160deg]", index % 2 !== 0 && "top-[37px]")} ></div>
                        </div>

                    </>
                ))}
            </div>
        </div>
    )
}
function CardProperty() {
    return (
        <div className="flex flex-col justify-end items-end h-[296px] min-w-[420px] overflow-hidden max-w-[600px] min-h-[237.99px] max-h-[446.231px] p-4 gap-2 flex-[1_0_0] rounded-[16px] bg-[url('/images/company.png')] bg-[lightgray] bg-center bg-cover bg-no-repeat relative">
            <div className="absolute right-[-45.31px] z-30 bottom-[-133.309px] w-[346.619px] h-[346.619px] rounded-full bg-[rgba(8,24,47,0.8)] blur-[54px]"></div>

            <div className="absolute w-full  h-[191.715px] right-0 bottom-[-5.239px]  z-20  ">
                <RectangleComplex />
            </div>
            <div className='info flex flex-col gap-2 z-30 w-full'>
                <div className='flex gap-4 w-full'>
                    <div className='size-[56px] rounded-full bg-bg-secondry'></div>
                    <div className="flex flex-col gap-1">
                        <p className='text-text-main typography-subtitle-18-Light'>المجمع الذهبي للأبراج.</p>
                        <div className='flex gap-2'>
                            <p className='text-text-gray1 text-[12px]'>عقار سكني </p>
                            <p className='text-text-gray1 typography-body-14-light'>12.2K</p>
                        </div>
                    </div>
                </div>
                <div className='border-t border-opacity-white-10 flex pt-3 gap-2 flex-col'>
                    <p className='text-text-gray1 typography-body-14-medium'>من 200 مليون الى 300 مليون IQD</p>
                    <div className="flex gap-2 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5 10.9878C14.5 9.60654 13.3808 8.4873 12.0005 8.4873C10.6192 8.4873 9.5 9.60654 9.5 10.9878C9.5 12.3681 10.6192 13.4873 12.0005 13.4873C13.3808 13.4873 14.5 12.3681 14.5 10.9878Z" stroke="#EEF5FF" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9995 21.4873C10.801 21.4873 4.5 16.3857 4.5 11.0506C4.5 6.87394 7.8571 3.4873 11.9995 3.4873C16.1419 3.4873 19.5 6.87394 19.5 11.0506C19.5 16.3857 13.198 21.4873 11.9995 21.4873Z" stroke="#EEF5FF" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <p className='text-text-gray1 typography-body-14-light flex items-center'>بغداد/اليرموك/شارع نادي الصيد</p>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center gap-2 px-3 py-2 absolute left-4 top-4 rounded-[16px] border border-white/10 bg-[rgba(197,115,64,0.25)] backdrop-blur-[14px]">
                <p className="text-[#EEF5FF] text-[14px] font-[400] leading-[140%] font-[Alilato]">
                    مكتمل
                </p></div>
        </div>
    )
}
// function PropertyArea() {
//     return (
//         <ItemlayerSectionFilter>
//             <p className="text-text-gray1 w-full text-[16px] font-medium leading-[24px]">
//                 مساحة العقار
//             </p>
//             <div className='flex gap-4 self-stretch'>
//                 <Input type="number" label="الحد الأدنى" subLabel="متر" />
//                 <Input type="number" label="الحد الأعلى" subLabel="متر" />
//             </div>
//         </ItemlayerSectionFilter>
//     )
// }

// function SelectPrice({ setPrice }: { setPrice: (price: { min: number, max: number }) => void }) {
//     const [localPrice, setLocalPrice] = useState({ min: 0, max: 0 });
//     const [sliderPositions, setSliderPositions] = useState({ min: 0, max: 100 });
//     const MAX_PRICE = 1000;

//     const handlePriceChange = (type: 'min' | 'max', value: string) => {
//         const numValue = parseInt(value) || 0;
//         const newPrice = { ...localPrice, [type]: numValue };

//         // Update both price and slider positions
//         setLocalPrice(newPrice);
//         setSliderPositions({
//             min: (newPrice.min / MAX_PRICE) * 100,
//             max: (newPrice.max / MAX_PRICE) * 100
//         });
//         setPrice(newPrice);
//     };

//     const handleBarChange = (positions: { min: number, max: number }) => {
//         const newPrice = {
//             min: Math.round((positions.min / 100) * MAX_PRICE),
//             max: Math.round((positions.max / 100) * MAX_PRICE)
//         };
//         setLocalPrice(newPrice);
//         setSliderPositions(positions);
//         setPrice(newPrice);
//     };

//     return (<ItemlayerSectionFilter>
//         <p className="text-text-gray1 w-full text-[16px] font-medium leading-[24px]">
//             حدد سعر العقار
//         </p>
//         <Bar
//             positions={sliderPositions}
//             onPositionChange={handleBarChange}
//         />
//         <p className="text-text-gray1 w-full text-[14px] font-light leading-[24px]">
//             افضل العقارات تجدها بين سعر 200-900$
//         </p>
//         <div className='flex gap-4 self-stretch'>

//             <Input
//                 id='min'
//                 value={localPrice.min}
//                 type="number"
//                 onChange={(e) => handlePriceChange('min', e.target.value)}
//             />

//             <Input
//                 id='max'
//                 value={localPrice.max}
//                 type="number"
//                 onChange={(e) => handlePriceChange('max', e.target.value)}
//             />
//         </div>
//     </ItemlayerSectionFilter>)
// }
// function ItemlayerSectionFilter({ children }: { children: React.ReactNode }) {
//     return (
//         <div className="flex flex-col items-end gap-[20px] p-4 self-stretch rounded-[24px] border border-stroke-border bg-bg-bg-2">
//             {children}
//         </div>
//     )
// }
// function Bar({
//     positions,
//     onPositionChange
// }: {
//     positions: { min: number, max: number },
//     onPositionChange: (positions: { min: number, max: number }) => void
// }) {
//     const [dragging, setDragging] = useState<'min' | 'max' | null>(null);
//     const barRef = useRef<HTMLDivElement>(null);

//     const handleMouseDown = (type: 'min' | 'max') => (e: React.MouseEvent) => {
//         e.preventDefault();
//         setDragging(type);
//     };

//     const handleMouseMove = useCallback((e: MouseEvent) => {
//         if (!dragging || !barRef.current) return;

//         const rect = barRef.current.getBoundingClientRect();
//         const width = rect.width;
//         const right = rect.right;

//         let newValue = ((right - e.clientX) / width) * 100;
//         newValue = Math.max(0, Math.min(100, newValue));

//         if (dragging === 'min') {
//             onPositionChange({
//                 min: Math.min(newValue, positions.max),
//                 max: positions.max
//             });
//         } else {
//             onPositionChange({
//                 min: positions.min,
//                 max: Math.max(newValue, positions.min)
//             });
//         }
//     }, [dragging, positions, onPositionChange]);

//     const handleMouseUp = useCallback(() => {
//         setDragging(null);
//     }, []);

//     useEffect(() => {
//         if (dragging) {
//             window.addEventListener('mousemove', handleMouseMove);
//             window.addEventListener('mouseup', handleMouseUp);
//         }
//         return () => {
//             window.removeEventListener('mousemove', handleMouseMove);
//             window.removeEventListener('mouseup', handleMouseUp);
//         };
//     }, [dragging, handleMouseMove, handleMouseUp]);

//     return (
//         <div ref={barRef} className="relative w-full h-[6px] direction-rtl">
//             <div className="absolute w-full h-full bg-[rgba(255,255,255,0.06)] rounded-[46px]" />
//             <div
//                 className="absolute h-full bg-bg-primary rounded-[46px]"
//                 style={{
//                     right: `${positions.min}%`,
//                     width: `${positions.max - positions.min}%`
//                 }}
//             />
//             <div
//                 className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-red-500 rounded-full cursor-pointer"
//                 style={{ right: `calc(${positions.min}% - 8px)` }}
//                 onMouseDown={handleMouseDown('min')}
//             />
//             <div
//                 className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-red-500 rounded-full cursor-pointer"
//                 style={{ right: `calc(${positions.max}% - 8px)` }}
//                 onMouseDown={handleMouseDown('max')}
//             />
//         </div>
//     );
// }