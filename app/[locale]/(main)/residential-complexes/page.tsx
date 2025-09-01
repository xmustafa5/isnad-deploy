'use client';
import { Button } from '@/app/_components/Button';
// import { cn } from '@/lib/utils';
import Link from 'next/link';
// import SelectOptionNumber from '@/app/_components/SelectOptionNumber';
// import { cn } from '@/lib/utils';
import React, { memo, useCallback, useRef } from 'react';
import { ComplexItem } from '@/types/complexesType';
import { useComplexesInfinite } from '@/hooks/useComplexesInfinite';
import { useInView } from 'react-intersection-observer';

export default function Page() {
    const { ref: loadMoreRef, inView } = useInView();

    const {
        data,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        isLoading,
        error
    } = useComplexesInfinite();

    // Load more when the load more ref comes into view
    React.useEffect(() => {
        if (inView && hasNextPage && !isFetchingNextPage) {
            fetchNextPage();
        }
    }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage]);

    // Flatten all pages into a single array
    const allComplexes = React.useMemo(() => {
        if (!data?.pages) return [];
        return data.pages.flatMap(page => page.items);
    }, [data?.pages]);

    if (isLoading) {
        return (
            <div className='flex justify-center items-center h-96'>
                <div className="text-text-gray1">جاري التحميل...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className='flex justify-center items-center h-96'>
                <div className="text-red-500">حدث خطأ في تحميل البيانات</div>
            </div>
        );
    }

    return (
        <div className='flex justify-between shrink-0 gap-6'>
            <div className="flex w-full flex-col items-start ">


                <div className='flex flex-col w-full gap-4'>
                    <h1 className='text-white typography-title-32-bold'>المجمعات السكنية</h1>
                    <div className="flex items-center gap-2 self-stretch">
                        <p className='text-text-gray1 typography-body-14-light'>
                            إجمالي المجمعات السكنية: {allComplexes.length}
                        </p>
                    </div>

                    <div className='flex flex-col gap-[24px]'>
                        <div className='flex overflow-y-auto max-h-[calc(95.3vh-100px)] py-4 items-center content-start gap-[24px] self-stretch justify-center xl:justify-start flex-wrap'>
                            {allComplexes.map((complex) => (
                                <CardProperty key={complex.id} complex={complex} />
                            ))}

                            {/* Load more trigger */}
                            {hasNextPage && (
                                <div ref={loadMoreRef} className="w-full flex justify-center py-4">
                                    {isFetchingNextPage ? (
                                        <div className="text-text-gray1">جاري تحميل المزيد...</div>
                                    ) : (
                                        <Button
                                            variant="gray"
                                            onClick={() => fetchNextPage()}
                                            disabled={isFetchingNextPage}
                                        >
                                            تحميل المزيد
                                        </Button>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


// const RectangleComplex = memo(function RectangleComplex() {
//     return (
//         <div className='w-full h-full shrink-0'>
//             <div className='shrink-0 flex'>
//                 <div
//                     className={cn(
//                         "relative shrink-0 h-[50px] w-[50px] flex items-center overflow-hidden justify-center "
//                     )}
//                 >
//                     <div className={cn("absolute h-[160px] w-[50px] bg-white/10 backdrop-blur-sm left-9 rotate-[135deg]")} />
//                 </div>
//                 <div
//                     className={cn(
//                         "relative rotate-90 shrink-0 h-[50px] w-[50px] flex items-center overflow-hidden justify-center "
//                     )}
//                 >
//                     <div className={cn("absolute h-[160px] w-[50px] bg-white/10 backdrop-blur-sm left-9 rotate-[135deg]")} />
//                 </div>
//                 <div
//                     className={cn(
//                         "relative shrink-0 h-[50px] w-[50px] flex items-center overflow-hidden justify-center "
//                     )}
//                 >
//                     <div className={cn("absolute h-[160px] w-[50px] bg-white/10 backdrop-blur-sm left-9 rotate-[135deg]")} />
//                 </div>
//                 <div
//                     className={cn(
//                         "relative rotate-90 shrink-0 h-[50px] w-[50px] flex items-center overflow-hidden justify-center "
//                     )}
//                 >
//                     <div className={cn("absolute h-[160px] w-[50px] bg-white/10 backdrop-blur-sm left-9 rotate-[135deg]")} />
//                 </div>
//                 <div
//                     className={cn(
//                         "relative shrink-0 h-[50px] w-[50px] flex items-center overflow-hidden justify-center "
//                     )}
//                 >
//                     <div className={cn("absolute h-[160px] w-[50px] bg-white/10 backdrop-blur-sm left-9 rotate-[135deg]")} />
//                 </div>
//                 <div
//                     className={cn(
//                         "relative rotate-90 shrink-0 h-[50px] w-[50px] flex items-center overflow-hidden justify-center "
//                     )}
//                 >
//                     <div className={cn("absolute h-[160px] w-[50px] bg-white/10 backdrop-blur-sm left-9 rotate-[135deg]")} />
//                 </div>
//                 <div
//                     className={cn(
//                         "relative shrink-0 h-[50px] w-[50px] flex items-center overflow-hidden justify-center "
//                     )}
//                 >
//                     <div className={cn("absolute h-[160px] w-[50px] bg-white/10 backdrop-blur-sm left-9 rotate-[135deg]")} />
//                 </div>
//                 <div
//                     className={cn(
//                         "relative rotate-90 shrink-0 h-[50px] w-[50px] flex items-center overflow-hidden justify-center "
//                     )}
//                 >
//                     <div className={cn("absolute h-[160px] w-[50px] bg-white/10 backdrop-blur-sm left-9 rotate-[135deg]")} />
//                 </div>
//                 <div
//                     className={cn(
//                         "relative shrink-0 h-[50px] w-[50px] flex items-center overflow-hidden justify-center "
//                     )}
//                 >
//                     <div className={cn("absolute h-[160px] w-[50px] bg-white/10 backdrop-blur-sm left-9 rotate-[135deg]")} />
//                 </div>
//                 <div
//                     className={cn(
//                         "relative rotate-90 shrink-0 h-[50px] w-[50px] flex items-center overflow-hidden justify-center "
//                     )}
//                 >
//                     <div className={cn("absolute h-[160px] w-[50px] bg-white/10 backdrop-blur-sm left-9 rotate-[135deg]")} />
//                 </div>
//                 <div
//                     className={cn(
//                         "relative shrink-0 h-[50px] w-[50px] flex items-center overflow-hidden justify-center "
//                     )}
//                 >
//                     <div className={cn("absolute h-[160px] w-[50px] bg-white/10 backdrop-blur-sm left-9 rotate-[135deg]")} />
//                 </div>
//                 <div
//                     className={cn(
//                         "relative rotate-90 shrink-0 h-[50px] w-[50px] flex items-center overflow-hidden justify-center "
//                     )}
//                 >
//                     <div className={cn("absolute h-[160px] w-[50px] bg-white/10 backdrop-blur-sm left-9 rotate-[135deg]")} />
//                 </div>
//             </div>
//             <div className='flex shrink-0 h-full'>
//                 {/* {items.map((_, index) => (
//                     <div
//                         key={`rect-bottom-${index}`}
//                         className={cn(
//                             "relative shrink-0 h-full w-[50px] flex items-center overflow-hidden justify-center bg-bla",
//                             index % 2 !== 0 && "scale-x-[-1] rotate-180"
//                         )}
//                     >
//                         <div
//                             className={cn(
//                                 "absolute -top-5 h-[190px] w-[80px] bg-white/10 backdrop-blur-sm left-[30px] rotate-[160deg]",
//                                 index % 2 !== 0 && "top-[37px]"
//                             )}
//                         />
//                     </div>
//                 ))} */}
//                 <div
//                     className={cn(
//                         "relative shrink-0 h-full w-[50px] flex items-center overflow-hidden justify-center bg-bla"
//                         // index % 2 !== 0 && "scale-x-[-1] rotate-180"
//                     )}
//                 >
//                     <div
//                         className={cn(
//                             "absolute -top-5 h-[190px] w-[80px] bg-white/10 backdrop-blur-sm left-[30px] rotate-[160deg]"
//                             // index % 2 !== 0 && "top-[37px]"
//                         )}
//                     />
//                 </div>
//                 <div
//                     className={cn(
//                         "relative shrink-0 h-full w-[50px] flex items-center overflow-hidden justify-center bg-bla"
//                         , "scale-x-[-1] rotate-180"
//                     )}
//                 >
//                     <div
//                         className={cn(
//                             "absolute -top-5 h-[190px] w-[80px] bg-white/10 backdrop-blur-sm left-[30px] rotate-[160deg]"
//                             , "top-[37px]"
//                         )}
//                     />
//                 </div> <div
//                     className={cn(
//                         "relative shrink-0 h-full w-[50px] flex items-center overflow-hidden justify-center bg-bla"
//                         // index % 2 !== 0 && "scale-x-[-1] rotate-180"
//                     )}
//                 >
//                     <div
//                         className={cn(
//                             "absolute -top-5 h-[190px] w-[80px] bg-white/10 backdrop-blur-sm left-[30px] rotate-[160deg]"
//                             // index % 2 !== 0 && "top-[37px]"
//                         )}
//                     />
//                 </div>
//                 <div
//                     className={cn(
//                         "relative shrink-0 h-full w-[50px] flex items-center overflow-hidden justify-center bg-bla"
//                         , "scale-x-[-1] rotate-180"
//                     )}
//                 >
//                     <div
//                         className={cn(
//                             "absolute -top-5 h-[190px] w-[80px] bg-white/10 backdrop-blur-sm left-[30px] rotate-[160deg]"
//                             , "top-[37px]"
//                         )}
//                     />
//                 </div> <div
//                     className={cn(
//                         "relative shrink-0 h-full w-[50px] flex items-center overflow-hidden justify-center bg-bla"
//                         // index % 2 !== 0 && "scale-x-[-1] rotate-180"
//                     )}
//                 >
//                     <div
//                         className={cn(
//                             "absolute -top-5 h-[190px] w-[80px] bg-white/10 backdrop-blur-sm left-[30px] rotate-[160deg]"
//                             // index % 2 !== 0 && "top-[37px]"
//                         )}
//                     />
//                 </div>
//                 <div
//                     className={cn(
//                         "relative shrink-0 h-full w-[50px] flex items-center overflow-hidden justify-center bg-bla"
//                         , "scale-x-[-1] rotate-180"
//                     )}
//                 >
//                     <div
//                         className={cn(
//                             "absolute -top-5 h-[190px] w-[80px] bg-white/10 backdrop-blur-sm left-[30px] rotate-[160deg]"
//                             , "top-[37px]"
//                         )}
//                     />
//                 </div> <div
//                     className={cn(
//                         "relative shrink-0 h-full w-[50px] flex items-center overflow-hidden justify-center bg-bla"
//                         // index % 2 !== 0 && "scale-x-[-1] rotate-180"
//                     )}
//                 >
//                     <div
//                         className={cn(
//                             "absolute -top-5 h-[190px] w-[80px] bg-white/10 backdrop-blur-sm left-[30px] rotate-[160deg]"
//                             // index % 2 !== 0 && "top-[37px]"
//                         )}
//                     />
//                 </div>
//                 <div
//                     className={cn(
//                         "relative shrink-0 h-full w-[50px] flex items-center overflow-hidden justify-center bg-bla"
//                         , "scale-x-[-1] rotate-180"
//                     )}
//                 >
//                     <div
//                         className={cn(
//                             "absolute -top-5 h-[190px] w-[80px] bg-white/10 backdrop-blur-sm left-[30px] rotate-[160deg]"
//                             , "top-[37px]"
//                         )}
//                     />
//                 </div>
//             </div>
//         </div>
//     );
// });
function RectangleComplexSvg() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="537" height="192" viewBox="0 0 537 192" fill="none">
            <path d="M536.683 54.9912V0H487.859C504.127 18.3228 520.415 36.6684 536.683 54.9912Z" fill="#2e2e4cba" fillOpacity="0.3" />
            <path d="M146.473 54.9912V0H97.6486C113.917 18.3228 130.205 36.6684 146.473 54.9912Z" fill="#2e2e4cba" fillOpacity="0.3" />
            <path d="M439.034 54.9912H487.859V0C471.591 18.3228 455.303 36.6684 439.034 54.9912Z" fill="#2e2e4cba" fillOpacity="0.3" />
            <path d="M439.217 54.9912V0H390.393C406.661 18.3228 422.949 36.6684 439.217 54.9912Z" fill="#2e2e4cba" fillOpacity="0.3" />
            <path d="M341.568 54.9912H390.392V0C374.124 18.3228 357.836 36.6684 341.568 54.9912Z" fill="#2e2e4cba" fillOpacity="0.3" />
            <path d="M341.568 54.9912V0H292.743C309.011 18.3228 325.3 36.6684 341.568 54.9912Z" fill="#2e2e4cba" fillOpacity="0.3" />
            <path d="M243.919 54.9912H292.744V0C276.476 18.3228 260.187 36.6684 243.919 54.9912Z" fill="#2e2e4cba" fillOpacity="0.3" />
            <path d="M244.122 54.9912V0H195.297C211.565 18.3228 227.854 36.6684 244.122 54.9912Z" fill="#2e2e4cba" fillOpacity="0.3" />
            <path d="M146.474 54.9912H195.298V0C179.03 18.3228 162.742 36.6684 146.474 54.9912Z" fill="#2e2e4cba" fillOpacity="0.3" />
            <path d="M48.8247 191.715V54.9688H0.000270656C16.2683 100.558 32.5566 146.125 48.8247 191.715Z" fill="#2e2e4cba" fillOpacity="0.3" />
            <path d="M48.8245 191.715H97.6489V54.9688C81.3809 100.558 65.0925 146.125 48.8245 191.715Z" fill="#2e2e4cba" fillOpacity="0.3" />
            <path d="M48.8247 54.9912V0H0.000270656C16.2683 18.3228 32.5566 36.6684 48.8247 54.9912Z" fill="#2e2e4cba" fillOpacity="0.3" />
            <path d="M48.8235 54.9912H97.6479V0C81.3799 18.3228 65.0916 36.6684 48.8235 54.9912Z" fill="#2e2e4cba" fillOpacity="0.3" />
            <path d="M536.683 191.715V54.9688H487.859C504.127 100.558 520.415 146.125 536.683 191.715Z" fill="#2e2e4cba" fillOpacity="0.3" />
            <path d="M146.473 191.715V54.9688H97.6486C113.917 100.558 130.205 146.125 146.473 191.715Z" fill="#2e2e4cba" fillOpacity="0.3" />
            <path d="M439.034 191.715H487.859V54.9688C471.591 100.558 455.303 146.125 439.034 191.715Z" fill="#2e2e4cba" fillOpacity="0.3" />
            <path d="M439.217 191.715V54.9688H390.393C406.661 100.558 422.949 146.125 439.217 191.715Z" fill="#2e2e4cba" fillOpacity="0.3" />
            <path d="M341.568 191.715H390.392V54.9688C374.124 100.558 357.836 146.125 341.568 191.715Z" fill="#2e2e4cba" fillOpacity="0.3" />
            <path d="M341.568 191.715V54.9688H292.743C309.011 100.558 325.3 146.125 341.568 191.715Z" fill="#2e2e4cba" fillOpacity="0.3" />
            <path d="M243.919 191.715H292.744V54.9688C276.476 100.558 260.187 146.125 243.919 191.715Z" fill="#2e2e4cba" fillOpacity="0.3" />
            <path d="M244.123 191.715V54.9688H195.298C211.566 100.558 227.855 146.125 244.123 191.715Z" fill="#2e2e4cba" fillOpacity="0.3" />
            <path d="M146.473 191.715H195.297V54.9688C179.029 100.558 162.741 146.125 146.473 191.715Z" fill="#2e2e4cba" fillOpacity="0.3" />
        </svg>
    );
}
const CardProperty = memo(function CardProperty({ complex }: { complex: ComplexItem }) {
    // Format price to readable format
    const formatPrice = (price: number) => {
        if (price >= 1000000) {
            return `${(price / 1000000).toFixed(1)}M`;
        } else if (price >= 1000) {
            return `${(price / 1000).toFixed(1)}K`;
        }
        return price.toString();
    };

    // Get status label based on built_status
    const getStatusLabel = (status: number) => {
        switch (status) {
            case 0:
                return "قيد الإنشاء";
            case 1:
                return "مكتمل";
            default:
                return "غير محدد";
        }
    };

    // Get status background color
    const getStatusBgColor = (status: number) => {
        switch (status) {
            case 0:
                return "bg-[rgba(255,165,0,0.25)]"; // Orange for under construction
            case 1:
                return "bg-[rgba(197,115,64,0.25)]"; // Brown for completed
            default:
                return "bg-[rgba(128,128,128,0.25)]"; // Gray for unknown
        }
    };

    return (
        <Link href={`/residential-complexes/${complex.id}`} className="flex flex-col justify-end items-end h-[296px] min-w-[330px] overflow-hidden max-w-[540px] min-h-[237.99px] max-h-[446.231px] p-4 gap-2 flex-[1_0_0] rounded-[16px]
         bg-[lightgray] bg-center bg-cover bg-no-repeat relative"
            style={{
                backgroundImage: `url(${complex.background_img})`,
            }}
        >
            <div className="absolute right-[-45.31px] z-30 bottom-[-133.309px] w-[346.619px] h-[346.619px] rounded-full bg-[rgba(8,24,47,0.8)] blur-[54px]"></div>
            <div className="absolute w-full h-[191.715px] right-0 bottom-[-5.239px] z-20">
                <RectangleComplexSvg />
            </div>
            <div className='info flex flex-col gap-2 z-30 w-full'>
                <div className='flex gap-4 w-full'>
                    <div className='size-[56px] rounded-full bg-bg-secondry overflow-hidden'>
                        {complex.logo && (
                            <img
                                src={complex.logo}
                                alt={complex.name.ar || complex.name.en}
                                className="w-full h-full object-cover"
                            />
                        )}
                    </div>
                    <div className="flex flex-col gap-1">
                        <p className='text-text-main typography-subtitle-18-Light'>
                            {complex.name.ar || complex.name.en}
                        </p>
                        <div className='flex gap-2'>
                            <p className='text-text-gray1 text-[12px]'>
                                {complex.type.label === 'Residential' ? 'عقار سكني' : 'عقار تجاري'}
                            </p>
                            <p className='text-text-gray1 typography-body-14-light'>
                                {complex.total_units}
                            </p>
                        </div>
                    </div>
                </div>
                <div className='border-t border-opacity-white-10 flex pt-3 gap-2 flex-col'>
                    <p className='text-text-gray1 typography-body-14-medium'>
                        من {formatPrice(complex.min_price)} الى {formatPrice(complex.max_price)} IQD
                    </p>
                    <div className="flex gap-2 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M14.5 10.9878C14.5 9.60654 13.3808 8.4873 12.0005 8.4873C10.6192 8.4873 9.5 9.60654 9.5 10.9878C9.5 12.3681 10.6192 13.4873 12.0005 13.4873C13.3808 13.4873 14.5 12.3681 14.5 10.9878Z" stroke="#EEF5FF" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M11.9995 21.4873C10.801 21.4873 4.5 16.3857 4.5 11.0506C4.5 6.87394 7.8571 3.4873 11.9995 3.4873C13.3808 13.4873 19.5 6.87394 19.5 11.0506C19.5 16.3857 13.198 21.4873 11.9995 21.4873Z" stroke="#EEF5FF" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <p className='text-text-gray1 typography-body-14-light flex items-center'>
                            {complex.governorate.name.ar || complex.governorate.name.en}/{complex.location}
                        </p>
                    </div>
                </div>
            </div>
            <div className={`flex items-center justify-center gap-2  h-[36px]  py-2 absolute left-4 top-4 rounded-[16px] border border-white/10 ${getStatusBgColor(complex.built_status.value)} backdrop-blur-[14px]`}>
                <p className="text-[#EEF5FF] text-[14px] font-[400] leading-[140%] whitespace-nowrap px-2">
                    {getStatusLabel(complex.built_status.value)}
                </p>
            </div>
        </Link>
    );
});

