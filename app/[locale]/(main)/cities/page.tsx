'use client';
import { AspectRatio } from '@/app/_components/aspect-ratio';
import { Button } from '@/app/_components/Button'
import Image from 'next/image'
import Link from 'next/link';
import React, { useEffect } from 'react'
import { useCitiesInfinite } from '@/hooks/useCitiesInfinite';
import { useInView } from 'react-intersection-observer';
import { CityItem } from '@/types/citiesType';
import CardCity from '../_components/CardCity';

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

                <div className="flex items-center gap-2 self-stretch">

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



