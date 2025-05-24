'use client'
import { getCompanies } from '@/actions/componies'
import Company from '@/app/_components/Company'
import { CompaniesResponse } from '@/types/companiesType'
import { useQuery } from '@tanstack/react-query'
import React from 'react'

export default function WrapperQueryCompanies({ initialCompanies, locale }: { initialCompanies: CompaniesResponse, locale: 'en' | 'ar' }) {
    const { data, isLoading } = useQuery<CompaniesResponse>({
        queryKey: ['companies', locale],
        queryFn: () => getCompanies(),
        initialData: initialCompanies
    })
    console.log(data);

    return (
        <div className="w-full flex flex-col p-4 gap-4 items-center bg-secondary-950 h-screen overflow-y-auto">
            <h1 className="text-3xl font-bold text-white">
                {locale === 'en' ? 'Companies' : 'الشركات'}
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 w-full max-w-[1400px]">
                {isLoading ? <div>
                    <div className="w-full h-full flex justify-center items-center">
                        <div className="w-full h-[256px] bg-gray-800 border-t-transparent border-b-transparent border-r-transparent border-l-transparent border-white rounded-2xl animate-pulse"></div>
                    </div>
                </div> :
                    data?.items.map((company) => (
                        <Company key={company.id} company={company} locale={locale} />
                    ))}
            </div>
        </div>
    )
}
