'use client';
import { Button } from '@/app/_components/Button'
import Link from 'next/link';
import React, { useEffect } from 'react'
import { useComplexesInfinite } from '@/hooks/useComplexesInfinite';
import { useCitiesInfinite } from '@/hooks/useCitiesInfinite';
import { useInView } from 'react-intersection-observer';
import { useDeveloperById } from '@/hooks/useDeveloperById';
import { svgphone, svgwhatsapp } from '@/public/svg/svg';
import CardProperty from '../../residential-complexes/_components/CardProperty';
import CardCity from '../../_components/CardCity';

export default function DeveloperPage({ params }: any) {
    const developerId = params.id;
    const { ref: loadMoreComplexesRef, inView: complexesInView } = useInView();
    const { ref: loadMoreCitiesRef, inView: citiesInView } = useInView();
    const { data: dataDeveloper } = useDeveloperById(developerId)
    
    // Fetch complexes
    const { 
        data: complexesData, 
        fetchNextPage: fetchNextComplexesPage, 
        hasNextPage: hasNextComplexesPage, 
        isFetchingNextPage: isFetchingNextComplexes, 
        isLoading: isLoadingComplexes, 
        error: complexesError 
    } = useComplexesInfinite(developerId);
    
    // Fetch cities
    const { 
        data: citiesData, 
        fetchNextPage: fetchNextCitiesPage, 
        hasNextPage: hasNextCitiesPage, 
        isFetchingNextPage: isFetchingNextCities, 
        isLoading: isLoadingCities, 
        error: citiesError 
    } = useCitiesInfinite(1, undefined, developerId);

    useEffect(() => {
        if (complexesInView && hasNextComplexesPage && !isFetchingNextComplexes) {
            fetchNextComplexesPage();
        }
    }, [complexesInView, hasNextComplexesPage, isFetchingNextComplexes, fetchNextComplexesPage]);
    
    useEffect(() => {
        if (citiesInView && hasNextCitiesPage && !isFetchingNextCities) {
            fetchNextCitiesPage();
        }
    }, [citiesInView, hasNextCitiesPage, isFetchingNextCities, fetchNextCitiesPage]);

    if (isLoadingComplexes || isLoadingCities) {
        return (
            <div className='flex justify-center items-center h-96'>
                <div className="text-text-gray1">جاري التحميل...</div>
            </div>
        );
    }

    if (complexesError || citiesError) {
        return (
            <div className='flex justify-center items-center h-96'>
                <div className="text-red-500">حدث خطأ في تحميل البيانات</div>
            </div>
        );
    }

    const allComplexes = complexesData?.pages.flatMap(page => page.items) || [];
    const allCities = citiesData?.pages.flatMap(page => page.items) || [];

    const developer = dataDeveloper?.item;
    const developerCities = developer?.cities || [];
    const firstCity = developerCities[0];

    return (
        <div className='flex gap-8 xl:flex-row flex-col '>
            {developer && (
                <div
                    className="rounded-[16px] h-fit bg-cover bg-no-repeat bg-center pt-[152px] xl:w-[400px] w-full"
                    style={{
                        backgroundImage: `
  linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.26) 30.77%,
    rgba(5, 15, 30, 0.90) 58.5%,
    #08182F 100%
  ),
  url(${firstCity?.background_img || developer.logo})
`,
                        backgroundColor: 'lightgray',
                    }}
                >
                    <div className="flex flex-col items-center gap-6 px-6 pb-4 self-stretch">
                        <div className='flex flex-col items-start gap-4 self-stretch'>
                            <div className="flex flex-col items-center gap-2 self-stretch">
                                <div className="flex justify-center items-end gap-[25px] self-stretch">
                                    <div className="flex flex-col justify-center items-center w-[122px] h-[42px]">



                                    </div>
                                    <div className="flex justify-center items-center w-[80px] h-[80px] overflow-hidden rounded-[145.455px] border-[3.333px] border-[rgba(255,255,255,0.09)]" style={{ backgroundColor: "var(--bg-secondry, #08182F)" }}>
                                        <img src={developer.logo || "/images/city-icon.png"} alt="developer-logo" className="w-full h-full object-cover" />
                                    </div>
                                    <div className="flex flex-col justify-center items-center w-[122px]">


                                    </div>
                                </div>
                                <div className="flex flex-col items-center gap-1 self-stretch">
                                    <p className="text-text-main text-[20px] font-normal leading-[140%]">
                                        {developer.name.ar || developer.name.en}
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col justify-center items-center gap-2 pb-3 self-stretch border-b border-white/10">
                                <div className="flex items-center gap-4 self-stretch justify-center">
                                    <div className="flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                                            <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" stroke="white" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M3 9V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2" stroke="white" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M12 5v4" stroke="white" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <p className="text-text-main text-right text-[14px] font-light leading-[140%]">
                                            {developer.complexes?.length || 0} مجمع
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="white" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round" />
                                            <circle cx="12" cy="10" r="3" stroke="white" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <p className="text-text-main text-right text-[14px] font-light leading-[140%]">
                                            {developerCities.length} مدينة
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}


            <div className="flex-1 flex flex-col gap-8">
                <div className="flex justify-between items-center self-stretch">
                    <Link
                        href={`/developers`}
                        className="flex items-center gap-2 w-[48px] p-3 rounded-[16px] border border-white/15 bg-black/20 backdrop-blur"
                        style={{ backdropFilter: "blur(65px)" }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M14.0459 5.57422L20.4992 11.9998L14.0459 18.4265" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path opacity="0.4" d="M20.5 12H4.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </Link>
                </div>

                <div
                    className="flex flex-col justify-center items-end gap-4 self-stretch px-6 py-4 rounded-[16px] border"
                    style={{
                        borderColor: "var(--stroke-border, #212F43)",
                        backgroundColor: "var(--opacomplex-white-5, rgba(255, 255, 255, 0.05))",
                        backdropFilter: "blur(9px)",
                    }}
                >
                    <div className="flex flex-col items-end gap-[7px] self-stretch rounded-[16px]">
                        <div className="flex items-center gap-2 w-full">
                            <p className='text-text-gray1 typography-body-14-medium'>معلومات المطور</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M3 7C3 5.89543 3.89543 5 5 5H19C20.1046 5 21 5.89543 21 7V17C21 18.1046 20.1046 19 19 19H5C3.89543 19 3 18.1046 3 17V7Z" stroke="white" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M3 7L12 13L21 7" stroke="white" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <div className="flex justify-between items-center self-stretch">
                            <div className="flex flex-col items-start gap-2 self-stretch">
                                <h1 className='text-white typography-title-32-bold'>مشاريع {developer?.name.ar || developer?.name.en || 'المطور'}</h1>
                                <p className='text-text-gray1 typography-body-16-light'>اكتشف المدن والمجمعات السكنية من هذا المطور</p>
                            </div>
                            <div className='flex gap-2'>
                                <Button variant="gray" className='w-fit p-4'>فلترة</Button>
                                <Button variant="gray" className='w-fit p-4'>ترتيب</Button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Cities Section */}
                {allCities.length > 0 && (
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-2 self-stretch">
                            <h2 className='text-white typography-title-24-bold'>المدن</h2>
                            <p className='text-text-gray1 typography-body-14-light'>
                                ({allCities.length} مدينة)
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {allCities.map((city) => (
                                <CardCity key={city.id} city={city} />
                            ))}
                        </div>
                        {hasNextCitiesPage && (
                            <div ref={loadMoreCitiesRef} className="flex justify-center py-4">
                                {isFetchingNextCities ? (
                                    <div className="text-text-gray1">جاري تحميل المزيد من المدن...</div>
                                ) : (
                                    <Button variant="gray" onClick={() => fetchNextCitiesPage()}>
                                        تحميل المزيد من المدن
                                    </Button>
                                )}
                            </div>
                        )}
                    </div>
                )}

                {/* Complexes Section */}
                {allComplexes.length > 0 && (
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-2 self-stretch">
                            <h2 className='text-white typography-title-24-bold'>المجمعات السكنية</h2>
                            <p className='text-text-gray1 typography-body-14-light'>
                                ({allComplexes.length} مجمع)
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-6 justify-center xl:justify-start">
                            {allComplexes.map((complex) => (
                                <CardProperty key={complex.id} complex={complex} />
                            ))}
                        </div>
                        {hasNextComplexesPage && (
                            <div ref={loadMoreComplexesRef} className="flex justify-center py-4">
                                {isFetchingNextComplexes ? (
                                    <div className="text-text-gray1">جاري تحميل المزيد من المجمعات...</div>
                                ) : (
                                    <Button variant="gray" onClick={() => fetchNextComplexesPage()}>
                                        تحميل المزيد من المجمعات
                                    </Button>
                                )}
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}




