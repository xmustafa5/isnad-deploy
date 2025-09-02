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
import { useRouter } from 'next/navigation';
import CardProperty from './_components/CardProperty';

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


                    <div className='flex flex-col gap-[24px]'>
                        <div className='flex overflow-y-auto max-h-[calc(95.3vh-100px)] py-4 items-center content-start gap-[24px] self-stretch justify-center xl:justify-start flex-wrap'>
                            {allComplexes.map((complex) => (
                                <CardProperty key={complex.id} complex={complex} />
                            ))}
                            s
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
