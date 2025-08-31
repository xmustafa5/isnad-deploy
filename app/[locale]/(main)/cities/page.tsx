'use client';
import { AspectRatio } from '@/app/_components/aspect-ratio';
import { Button } from '@/app/_components/Button'
import Image from 'next/image'
import Link from 'next/link';
import React, { useEffect } from 'react'
import { useCitiesInfinite } from '@/hooks/useCitiesInfinite';
import { useInView } from 'react-intersection-observer';
import { CityItem } from '@/types/citiesType';

export default function CitiesPage() {
    const { ref: loadMoreRef, inView } = useInView();
    const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading, error } = useCitiesInfinite(1);

    useEffect(() => {
        if (inView && hasNextPage && !isFetchingNextPage) {
            fetchNextPage();
        }
    }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage]);

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

    const allCities = data?.pages.flatMap(page => page.items) || [];

    return (
        <div className='flex flex-col gap-8'>
            <div className="flex flex-col items-start gap-4 self-stretch">
                <div className="flex justify-between items-center self-stretch">
                    <div className="flex flex-col items-start gap-2 self-stretch">
                        <h1 className='text-white typography-title-32-bold'>المدن</h1>
                        <p className='text-text-gray1 typography-body-16-light'>اكتشف المدن المتاحة</p>
                    </div>
                    <div className='flex gap-2'>
                        <Button variant="gray" className='w-fit p-4'>فلترة</Button>
                        <Button variant="gray" className='w-fit p-4'>ترتيب</Button>
                    </div>
                </div>
                <div className="flex items-center gap-2 self-stretch">
                    <p className='text-text-gray1 typography-body-14-light'>
                        إجمالي المدن: {allCities.length} من {data?.pages[0]?.total_pages || 0} صفحة
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {allCities.map((city) => (
                    <CardCity key={city.id} city={city} />
                ))}
            </div>

            {hasNextPage && (
                <div ref={loadMoreRef} className="flex justify-center py-8">
                    {isFetchingNextPage ? (
                        <div className="text-text-gray1">جاري تحميل المزيد...</div>
                    ) : (
                        <Button variant="gray" onClick={() => fetchNextPage()}>
                            تحميل المزيد
                        </Button>
                    )}
                </div>
            )}
        </div>
    )
}

function CardCity({ city }: { city: CityItem }) {
    return (
        <Link href={`/cities/${city.id}`}
            className="
    flex items-end gap-2 p-4
    h-[178.853px] min-w-[232px] min-h-[149.259px]
    flex-[1_0_0] aspect-[278/178.85]
    rounded-[16px] border border-white/10
     bg-center bg-cover bg-no-repeat
    backdrop-blur-[8.5px] overflow-hidden relative
  "
        >
            <div className='w-full absolute inset-0 bg-[linear-gradient(180deg,rgba(8,24,47,0)_0%,rgba(8,24,47,0.81)_86.5%)] z-10'></div>
            <Image
                src={city.background_img || "/images/city.png"}
                fill
                alt={`صورة مدينة ${city.name.ar || city.name}`}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                className="object-cover"
            />
            <div className="flex flex-col z-20 gap-2 w-[203.5px]">
                <div className="flex flex-col justify-center self-stretch">
                    <p className='text-text-main typography-body-16-medium'>{city.name.ar || city.name}</p>
                </div>
                <div className="flex items-start gap-4">
                    <div className="flex items-center gap-2">
                        <div className="w-5 h-5 bg-white/20 rounded"></div>
                        <p className='text-text-main typography-body-12-light'>{city.total_units} عقار</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-5 h-5 bg-white/20 rounded"></div>
                        <p className='text-text-main typography-body-12-light'>{city.years} سنوات</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}



