'use client';
import { getCompanyById } from '@/actions/componies';
import { Button } from '@/app/_components/Button';
import Department from '@/app/_components/Department';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useTranslation } from 'react-i18next';

export default function WrapperQueryDetailsCompany({ id, locale = 'ar' }: { id: string; locale: 'ar' | 'en' }) {
    const { data, isLoading } = useQuery<any>({
        queryKey: ['company-details', id],
        queryFn: () => getCompanyById(id),
    });

    const company = data?.item;
    const { t } = useTranslation('home_transtion');

    return (
        <div className="w-full flex flex-wrap flex-1 p-4 gap-4 bg-secondary-950 h-screen overflow-y-scroll text-white">
            <div className="flex fixed z-10 items-center h-fit">
                <Link
                    href={`/companies`}
                    className="flex items-center gap-2 w-[48px] p-3 rounded-[16px] border border-white/15 bg-black/20 backdrop-blur"
                    style={{ backdropFilter: 'blur(65px)' }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M14.0459 5.57422L20.4992 11.9998L14.0459 18.4265" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path opacity="0.4" d="M20.5 12H4.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </Link>
            </div>

            {/* Company Header */}
            <div className="flex w-full mt-20 h-[340px] pt-[242px] px-4 justify-center items-center relative">
                {isLoading ? (
                    <div className="absolute inset-0 bg-secondary-900 animate-pulse" />
                ) : (
                    <Image
                        src={company?.background_img || '/fallback.jpg'}
                        alt={company?.name?.[locale] || 'company'}
                        fill
                        className="object-cover"
                        placeholder="blur"
                        blurDataURL="/fallback-blur.jpg"
                        loading="eager"
                    />
                )}

                <div className="flex absolute top-56 left-1/2 -translate-x-1/2 w-full h-full flex-col items-center gap-4 z-[2] p-4">
                    <div className="flex flex-col gap-2 items-stretch w-full max-w-[698px]">
                        <div className="flex gap-4 self-stretch ltr:flex-row-reverse rtl:flex-row-reverse bg-gradient-to-r from-bg-bg-2/0  to-bg-bg-2/50 rounded-full">
                            <div className="flex flex-col justify-center ltr:items-start rtl:items-start gap-1 flex-1">
                                {isLoading ? (
                                    <div className="w-40 h-[24px] bg-secondary-800 animate-pulse rounded-md"></div>
                                ) : (
                                    <p className="text-[#FBF5EF] typography-subtitle-18-Light">{company?.name?.[locale]}</p>
                                )}
                                {isLoading ? (
                                    <div className="w-20 h-[12px] bg-secondary-800 animate-pulse rounded-md"></div>
                                ) : (
                                    <p className="text-[#fff] text-center text-[12px] font-normal  leading-[120%]">
                                        {company?.type?.name?.[locale] || '-'}
                                    </p>
                                )}
                            </div>
                            <div className="w-[48px] h-[48px] rounded-full relative   shadow-2xl bg-white">
                                {company?.logo && !isLoading && (
                                    <Image src={company.logo} alt="logo" fill className="rounded-full object-cover shadow-2xl" />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Branches Section */}
            {company?.branches?.length > 0 && (
                <div className="w-full mt-6 flex flex-col gap-2">
                    <p className="text-white typography-title-24-light">الفروع</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {company.branches.map((branch: any) => (
                            <div key={branch.id} className="p-4 border border-white/10 rounded-md">
                                <p className="text-[#FBF5EF] font-semibold">{branch.governorate?.name?.[locale]}</p>
                                <p className="text-[#AAB7CB] text-sm">{branch.location}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Departments Section */}
            {company?.departments?.length > 0 && (
                <div className="w-full mt-6 flex flex-col gap-2">
                    <p className="text-white typography-title-24-light">الأقسام والخصومات</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                        {company.departments.map((department: any) => (
                            <Department key={department.id} department={department} locale={locale} />
                        ))}
                    </div>
                </div>
            )}

            {/* Links / Social Media Section */}
            {company?.links?.length > 0 && (
                <div className="w-full mt-6 flex flex-col gap-2">
                    <p className="text-white typography-title-24-light">حسابات السوشيل ميديا</p>
                    <div className="flex flex-wrap gap-2">
                        {company.links.map((link: any) => (
                            <Link
                                key={link.id}
                                href={`http://${link.url}`}
                                className="w-[80px] h-[80px] relative border border-[rgba(238,238,238,0.06)] rounded-md overflow-hidden"
                                target="_blank"
                            >
                                <Image
                                    src={link?.icon?.image || '/fallback.jpg'}
                                    alt="social"
                                    fill
                                    className="object-cover"
                                />
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
