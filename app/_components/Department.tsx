import { DepartmentType, LanguageField } from '@/types/companiesType'
import Image from 'next/image'
import React from 'react'

export default function Department({ department, locale }: { department: DepartmentType, locale: keyof LanguageField }) {
    return (
        <div className="flex overflow-hidden h-[160px] p-4 flex-col justify-end items-end gap-2 self-stretch rounded-[16px] bg-sred-500 relative">
            {department?.img ?
                <Image
                    src={department?.img}
                    alt='company'
                    fill
                    className='object-cover'
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                :
                <Image src={"/images/company.png"} alt='company' fill className='object-cover' />
            }
            <div className="absolute w-[341.184px] h-[243.939px] rtl:right-[-25.171px] ltr:left-[-25.171px] ltr:scale-x-[-1] bottom-[-31.184px]">

                <Image src={"/images/blurcompany.png"} alt='company' fill className='object-cover' />
            </div>
            <div className="relative flex flex-col items-start gap-2 self-stretch">
                <div className="flex  items-center gap-4 self-stretch   ltr:flex-row-reverse rtl:flex-row-reverse">
                    <div className="flex flex-col justify-center ltr:items-start rtl:items-start gap-1 flex-1">
                        <p className='text-[#FBF5EF] typography-subtitle-18-Light '>{department?.name?.[locale]}</p>
                        <div className='flex items-center gap-2'>

                            <p className="text-[#fff] text-center  typography-body-14-light">
                                خصم يصل لل</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.6105 4.14328L13.9152 3.50503C14.5185 3.2112 15.2453 3.44762 15.5595 4.03918L16.2406 5.32249C16.4206 5.66108 16.7465 5.89848 17.124 5.96464L18.5543 6.21566C19.2149 6.33144 19.6644 6.95023 19.571 7.61378L19.3676 9.05277C19.3132 9.43222 19.4377 9.81556 19.7043 10.0909L20.7152 11.1349C21.1812 11.6165 21.1812 12.3812 20.7152 12.8638L19.7043 13.9078C19.4377 14.1831 19.3132 14.5665 19.3676 14.9459L19.571 16.3839C19.6644 17.0484 19.2149 17.6672 18.5543 17.783L17.124 18.034C16.7465 18.1002 16.4206 18.3366 16.2406 18.6752L15.5595 19.9585C15.2453 20.5511 14.5185 20.7875 13.9152 20.4927L12.6105 19.8554C12.2661 19.6871 11.8633 19.6871 11.5189 19.8554L10.2132 20.4927C9.61093 20.7875 8.88414 20.5511 8.56988 19.9585L7.88881 18.6752C7.70882 18.3366 7.38288 18.1002 7.00538 18.034L5.57417 17.783C4.91452 17.6672 4.46501 17.0484 4.55842 16.3839L4.76176 14.9459C4.81527 14.5665 4.69074 14.1831 4.42415 13.9078L3.41423 12.8638C2.94819 12.3812 2.94819 11.6165 3.41423 11.1349L4.42415 10.0909C4.69074 9.81556 4.81527 9.43222 4.76176 9.05277L4.55842 7.61378C4.46501 6.95023 4.91452 6.33144 5.57417 6.21566L7.00538 5.96464C7.38288 5.89848 7.70882 5.66108 7.88881 5.32249L8.56988 4.03918C8.88414 3.44762 9.61093 3.2112 10.2132 3.50503L11.5189 4.14328C11.8633 4.3116 12.2661 4.3116 12.6105 4.14328Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M9.67017 14.4518L14.5673 9.55469" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M14.4474 14.3732V14.4213M14.6424 14.3835C14.6424 14.4918 14.5545 14.5796 14.4462 14.5796C14.338 14.5796 14.2502 14.4918 14.2502 14.3835C14.2502 14.2753 14.338 14.1875 14.4462 14.1875C14.5545 14.1875 14.6424 14.2753 14.6424 14.3835Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M9.68376 9.60758V9.65569M9.87868 9.61792C9.87868 9.72619 9.79084 9.81396 9.68256 9.81396C9.57429 9.81396 9.48657 9.72619 9.48657 9.61792C9.48657 9.50965 9.57429 9.42188 9.68256 9.42188C9.79084 9.42188 9.87868 9.50965 9.87868 9.61792Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <p className='text-[rgba(255,255,255,0.30)] typography-subtitle-18-medium'>%</p>
                            <p className='text-white typography-subtitle-18-medium'>{department?.discount?.discount}</p>
                        </div>
                    </div>
                    <div className='w-[48px] h-[48px] rounded-full bg-white'></div>
                </div>
            </div>
        </div>
    )
}
