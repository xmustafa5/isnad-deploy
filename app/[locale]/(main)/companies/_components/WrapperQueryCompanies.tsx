'use client'
import { getcompanies } from '@/actions/componies'
import Company from '@/app/_components/Company'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { useTranslation } from 'react-i18next'

export default function WrapperQueryCompanies({ locale }: { locale: 'en' | 'ar' }) {
    const { t } = useTranslation('home_transtion');
    const { data, isLoading, error } = useQuery<any>({
        queryKey: ['companies', locale],
        queryFn: () => getcompanies(),
    })
    console.log(data, "data companies")

    return (
        <div className='flex justify-between shrink-0 gap-6'>
            <div className="flex w-full flex-col items-start ">


                <div className='flex flex-col w-full gap-4'>
                    <div className="flex items-center gap-2 self-stretch">

                    </div>


                    <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 w-full max-w-[1400px]">
                        {error ? null : isLoading ? <div>
                            <div className="w-full h-full flex justify-center items-center">
                                <div className="w-full h-[256px] bg-gray-800 border-t-transparent border-b-transparent border-r-transparent border-l-transparent border-white rounded-2xl animate-pulse"></div>
                            </div>
                        </div> :
                            data?.items?.map((company: any) => (
                                <Company key={company.id} company={company} />
                            ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
