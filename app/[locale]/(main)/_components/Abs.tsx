'use client';
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getAdvertisements } from '@/actions/advertisements';
import {
    Marquee,
    MarqueeContent,
    MarqueeFade,
    MarqueeItem,
} from '@/components/ui/shadcn-io/marquee';
import Image from 'next/image';

export interface Advertisement {
    id: string;
    img: string;
    url: string;
    is_visible: {
        value: number;
        label: string;
    };
}

function Abs() {
    const { data, isLoading, error } = useQuery({
        queryKey: ['advertisements'],
        queryFn: getAdvertisements,
    });

    if (isLoading)
        return <div className="text-center text-gray-400">جار التحميل...</div>;
    if (error)
        return <div className="text-center text-red-500">خطأ في تحميل الإعلانات</div>;

    return (
        <div className='flex gap-4 flex-col z-10 '>
            <h1 className='text-xl font-bold text-white'> عروض حصرية</h1>
            <div className="w-full overflow-hidden z-10" dir='ltr'>
                <Marquee>
                    <MarqueeFade side="left" />
                    <MarqueeFade side="right" />
                    <MarqueeContent className="flex gap-4">
                        {data?.items
                            ?.filter((ad) => ad.is_visible.value === 1)
                            .map((ad) => (
                                <MarqueeItem key={ad.id} className="flex-shrink-0  gap-8">
                                    <a
                                        href={ad.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex relative overflow-hidden w-[410px] shrink-0 h-[230.63px] p-2 items-start  rounded-[32px]"
                                    >
                                        <Image
                                            fill
                                            src={ad.img}
                                            alt="Advertisement"
                                            className="shrin object-center object-cover"
                                        />
                                    </a>
                                </MarqueeItem>
                            ))}
                    </MarqueeContent>
                </Marquee>
            </div>

        </div>
    );
}

export default Abs;
