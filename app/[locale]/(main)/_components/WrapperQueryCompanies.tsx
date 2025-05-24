'use client'
import { getCompanies } from '@/actions/componies'
import Company from '@/app/_components/Company'
import { CompaniesResponse } from '@/types/companiesType'
import { useQuery } from '@tanstack/react-query'
import React from 'react'

export default function WrapperQueryCompanies({ initialCompanies, locale }: { initialCompanies: CompaniesResponse, locale: string }) {
    const { data } = useQuery<CompaniesResponse>({
        queryKey: ['companies', locale],
        queryFn: () => getCompanies(),
        initialData: initialCompanies
    })
    console.log(data);

    return (
        <div className="w-full flex flex-wrap flex-1 p-4 gap-4 bg-secondary-950 h-screen overflow-y-auto">
            <div className="flex flex-wrap gap-4">
                {data?.items.map((company) => (
                    <Company key={company.id} company={company} locale={locale} />
                ))}
            </div>
        </div>
    )
}
