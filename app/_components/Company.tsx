import { CompanyType } from '@/types/companiesType'
import Image from 'next/image'
import React from 'react'
import ImageShadow from './ImageShadow'
import Link from 'next/link'

export default function Company({ company, locale = "ar" }: { company: CompanyType, locale: "en" | "ar" }) {
    console.log(company)
    return (
        <Link href={`/${locale}/${company.id}`} className="overflow-hidden flex relative max-w-full w-full h-[256px] p-4 flex-col justify-end items-end gap-2 flex-shrink-0 rounded-[16px]">
            {company?.background_img ? (
                <Image
                    src={company.background_img}
                    alt='company'
                    fill
                    className='object-cover'
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHiQlJyAlJyQ1MTAyMDIyMTEwPERAQDhENzU8RjhHR1VIRU5TTUxOUkhCR0j/2wBDAQoLCw4NDhwQEBxDMiIyQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0P/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAb/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                    loading="eager"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            ) : (
                <Image
                    src="/images/company.png"
                    alt='company'
                    fill
                    className='object-cover'
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHiQlJyAlJyQ1MTAyMDIyMTEwPERAQDhENzU8RjhHR1VIRU5TTUxOUkhCR0j/2wBDAQoLCw4NDhwQEBxDMiIyQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0P/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAb/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                    loading="eager"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            )}
            <ImageShadow />
            {/* <div
                className="absolute w-[354px] h-[253px] right-[-96px] bottom-[-94px] rounded-[88px] blur-[40px] bg-red-500"
                style={{
                    // background: 'linear-gradient(115deg, rgba(3, 24, 54, 0.82) 9.24%, #08182F 103.54%)',
                }}
            ></div> */}
            {/* <div className="absolute ltr:left-4 rtl:right-4 top-4 flex justify-end items-center gap-1 px-3 py-2 rounded-[24px] bg-[rgba(84,50,29,0.32)] backdrop-blur-[2px]">
                <div className='flex items-center gap-1 text-white'>
                     <p className='text-white typography-subtitle-18-medium'>{company?.departments}</p> 
                    <p className='text-[rgba(255,255,255,0.30)] typography-subtitle-18-medium'>%</p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5458 4.64328L13.8505 4.00503C14.4538 3.7112 15.1806 3.94762 15.4948 4.53918L16.1759 5.82249C16.3559 6.16108 16.6818 6.39848 17.0593 6.46464L18.4896 6.71566C19.1502 6.83144 19.5997 7.45023 19.5063 8.11378L19.3029 9.55277C19.2485 9.93222 19.373 10.3156 19.6396 10.5909L20.6505 11.6349C21.1165 12.1165 21.1165 12.8812 20.6505 13.3638L19.6396 14.4078C19.373 14.6831 19.2485 15.0665 19.3029 15.4459L19.5063 16.8839C19.5997 17.5484 19.1502 18.1672 18.4896 18.283L17.0593 18.534C16.6818 18.6002 16.3559 18.8366 16.1759 19.1752L15.4948 20.4585C15.1806 21.0511 14.4538 21.2875 13.8505 20.9927L12.5458 20.3554C12.2014 20.1871 11.7986 20.1871 11.4542 20.3554L10.1485 20.9927C9.54623 21.2875 8.81944 21.0511 8.50518 20.4585L7.82411 19.1752C7.64412 18.8366 7.31818 18.6002 6.94068 18.534L5.50947 18.283C4.84982 18.1672 4.40031 17.5484 4.49372 16.8839L4.69706 15.4459C4.75057 15.0665 4.62604 14.6831 4.35945 14.4078L3.34953 13.3638C2.88349 12.8812 2.88349 12.1165 3.34953 11.6349L4.35945 10.5909C4.62604 10.3156 4.75057 9.93222 4.69706 9.55277L4.49372 8.11378C4.40031 7.45023 4.84982 6.83144 5.50947 6.71566L6.94068 6.46464C7.31818 6.39848 7.64412 6.16108 7.82411 5.82249L8.50518 4.53918C8.81944 3.94762 9.54623 3.7112 10.1485 4.00503L11.4542 4.64328C11.7986 4.8116 12.2014 4.8116 12.5458 4.64328Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M9.60547 14.9518L14.5026 10.0547" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M14.3827 14.8732V14.9213M14.5777 14.8835C14.5777 14.9918 14.4898 15.0796 14.3815 15.0796C14.2733 15.0796 14.1855 14.9918 14.1855 14.8835C14.1855 14.7753 14.2733 14.6875 14.3815 14.6875C14.4898 14.6875 14.5777 14.7753 14.5777 14.8835Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M9.61907 10.1076V10.1557M9.81398 10.1179C9.81398 10.2262 9.72615 10.314 9.61787 10.314C9.5096 10.314 9.42188 10.2262 9.42188 10.1179C9.42188 10.0096 9.5096 9.92188 9.61787 9.92188C9.72615 9.92188 9.81398 10.0096 9.81398 10.1179Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </div> */}

            <div className="relative flex flex-col items-start gap-2 self-stretch">
                <div className="flex  items-center gap-4 self-stretch   ltr:flex-row-reverse rtl:flex-row-reverse">
                    <div className="flex flex-col justify-center ltr:items-start rtl:items-start gap-1 flex-1">
                        <p className='text-[#FBF5EF] typography-subtitle-18-Light '>{company?.name?.[locale]}</p>
                        <p className="text-[#AAB7CB] text-center text-[12px] font-normal leading-[120%]">
                            {company?.type}</p>
                    </div>
                    <div className='w-[48px] h-[48px] rounded-full bg-white'></div>
                </div>

            </div>
        </Link>
    )
}
