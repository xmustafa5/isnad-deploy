'use client';
import { getCompanyDetails } from '@/actions/componies'
import { Button } from '@/app/_components/Button';
import Department from '@/app/_components/Department'
import { companyTypeDetails } from '@/types/companiesType';
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { useTranslation } from 'react-i18next';
export default function WrapperQueryDetailsCompany({ id, locale = "ar" }: { id: string, locale: "ar" | "en" }) {
    const { data, isLoading } = useQuery<companyTypeDetails>({
        queryKey: ['company-details', id],
        queryFn: () => getCompanyDetails({ id }),
    })
    const { t } = useTranslation('home_transtion');
    return (
        <div className="w-full flex flex-wrap flex-1 p-4 gap-4 bg-secondary-950 h-screen overflow-y-scroll  text-white low-y-auto">
            <div className="flex w-full h-[340px] pt-[242px] px-4 justify-center items-center relative ">
                {isLoading ?
                    <div className="absolute inset-0 bg-secondary-900 animate-pulse" />
                    :
                    <Image src={'/images/details.png'} alt='company' fill className='object-cover'
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHiQlJyAlJyQ1MTAyMDIyMTEwPERAQDhENzU8RjhHR1VIRU5TTUxOUkhCR0j/2wBDAQoLCw4NDhwQEBxDMiIyQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0P/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAb/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                        loading="eager"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                }

                <div className='flex absolute  top-56 left-1/2 -translate-x-1/2 w-full h-full flex-col items-center gap-4 flex-shrink-0  z-[2] p-4'>

                    <div className='flex flex-col gap-2 items-stretch w-full max-w-[698px]'>
                        <div className="flex  items-center gap-4 self-stretch   ltr:flex-row-reverse rtl:flex-row-reverse">
                            <div className="flex flex-col justify-center ltr:items-start rtl:items-start gap-1 flex-1">
                                {isLoading ?
                                    <div className='w-40 h-[24px] bg-secondary-800 animate-pulse rounded-md'></div>
                                    :
                                    <p className='text-[#FBF5EF] typography-subtitle-18-Light '>{data?.item?.name[locale]}</p>
                                }
                                {isLoading ?
                                    <div className='w-20 h-[12px] bg-secondary-800 animate-pulse rounded-md'></div>
                                    :
                                    <p className="text-[#AAB7CB] text-center font-[Alilato] text-[12px] font-normal leading-[120%]">
                                        {data?.item?.type}</p>
                                }
                            </div>
                            <div className='w-[48px] h-[48px] rounded-full bg-white'></div>
                        </div>
                        <div className="flex flex-col justify-center items-end gap-2 self-stretch pt-3 border-t border-white/10">
                            <div className="flex   items-center gap-2 self-stretch">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5 10.5005C14.5 9.11924 13.3808 8 12.0005 8C10.6192 8 9.5 9.11924 9.5 10.5005C9.5 11.8808 10.6192 13 12.0005 13C13.3808 13 14.5 11.8808 14.5 10.5005Z" stroke="white" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9995 21C10.801 21 4.5 15.8984 4.5 10.5633C4.5 6.38664 7.8571 3 11.9995 3C16.1419 3 19.5 6.38664 19.5 10.5633C19.5 15.8984 13.198 21 11.9995 21Z" stroke="white" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                {isLoading ?
                                    <div className='w-20 h-[14px] bg-secondary-800 animate-pulse rounded-md'></div>
                                    :
                                    <p className="text-text-whaite typography-body-14-light">{data?.item?.address[locale]}</p>
                                }
                            </div>
                        </div>
                    </div>
                    <div className=' items-center gap-[17px] w-full grid grid-cols-2 max-w-[698px]'>
                        <Button className='w-full'>
                            {t("contact")}
                        </Button>
                        <Button variant="gray" className='w-full'>
                            الموقع على Google
                        </Button>
                    </div>
                    <div className="flex flex-col items-center gap-2 self-stretch ">
                        <p className='typography-body-14-light text-text-gray1 '>حسابات السوشيل الميديا</p>
                        <div className='flex items-center '>
                            {isLoading ?
                                <div className='flex items-center'>

                                    <div className='h-[68px] w-[83px] bg-secondary-800 animate-pulse '></div>
                                    <div className='h-[68px] w-[83px] bg-secondary-800 animate-pulse '></div>
                                </div>
                                :
                                data?.item?.links.map((link) => (
                                    <Link key={link.id} href={`http://${link.url}`} className='px-[28px] py-[20px] border border-[rgba(238,238,238,0.06)]'><svg xmlns="http://www.w3.org/2000/svg" width="25" height="26" viewBox="0 0 25 26" fill="none">
                                        <path d="M6.63475 11.4727L5.48775 12.6197C3.17075 14.9367 3.17075 18.7137 5.48775 21.0307C7.79675 23.3397 11.5817 23.3477 13.8987 21.0307L15.0457 19.8837" stroke="#B8C6E3" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M18.8652 16.0664L20.0123 14.9194C22.3292 12.6024 22.3292 8.82543 20.0123 6.50843C17.7033 4.19943 13.9183 4.19143 11.6013 6.50843L10.4543 7.65544" stroke="#B8C6E3" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M15.3867 11.2227L10.1543 16.455" stroke="#B8C6E3" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg></Link>
                                ))}
                        </div>
                    </div>

                    <div className='w-full mt-4 flex flex-col gap-2 pb-20'>
                        <p className='text-white typography-title-24-light'>الاقسام والخصومات</p>
                        <div className='grid grid-cols-1 md:grid-cols-3'>
                            {data?.item?.departments.map((department) => (
                                <Department key={department.id} department={department} locale={locale} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
