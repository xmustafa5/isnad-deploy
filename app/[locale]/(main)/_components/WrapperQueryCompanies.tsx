'use client'
import { getcompanies } from '@/actions/componies'
import Company from '@/app/_components/Company'
import { CompaniesResponse } from '@/types/companiesType'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { useTranslation } from 'react-i18next'

export default function WrapperQueryCompanies({ initialCompanies, locale }: { initialCompanies: CompaniesResponse, locale: 'en' | 'ar' }) {
    const { t } = useTranslation('home_transtion');
    const { data, isLoading, error } = useQuery<CompaniesResponse>({
        queryKey: ['companies', locale],
        queryFn: () => getcompanies(),
        initialData: initialCompanies
    })

    return (
        <div className="w-full flex flex-col p-4 gap-4 items-center bg-secondary-950 h-screen overflow-y-auto">
            <div className="w-full max-w-[1400px] rounded-xl p-6 mb-4">
                <h2 className={`text-2xl font-bold mb-3 ${locale === 'ar' ? 'text-amber-500' : 'text-amber-500'}`}>
                    {t('collaborative_marketing')}
                </h2>
                <p className={`text-gray-300 leading-relaxed ${locale === 'ar' ? 'text-right' : 'text-left'}`}>
                    {t('collaborative_marketing_description')}
                </p>
            </div>

            <h1 className="text-3xl font-bold text-white">
                {t('companies')}
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 w-full max-w-[1400px]">
                {error ? null : isLoading ? <div>
                    <div className="w-full h-full flex justify-center items-center">
                        <div className="w-full h-[256px] bg-gray-800 border-t-transparent border-b-transparent border-r-transparent border-l-transparent border-white rounded-2xl animate-pulse"></div>
                    </div>
                </div> :
                    data?.items?.map((company) => (
                        <Company key={company.id} company={company} locale={locale} />
                    ))}
            </div>
        </div>
    )
}
