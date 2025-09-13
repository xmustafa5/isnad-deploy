'use client';
import { AspectRatio } from '@/app/_components/aspect-ratio';
import { Button } from '@/app/_components/Button'
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { useComplexById } from '@/hooks/useComplexById';
import { useParams } from 'next/navigation';
import { svgphone, svgwhatsapp } from '@/public/svg/svg';
import FeatureAndServies from '../_components/FeatureAndServies';
import RowDevloperAndRingPrice from '../../_components/RowDevloperAndRingPrice';

export default function Page() {
    const params = useParams();
    const complexId = params.id as string;

    const { data: complexData, isLoading, error } = useComplexById(complexId);

    if (isLoading) {
        return (
            <div className='flex justify-center items-center h-96'>
                <div className="text-text-gray1">جاري التحميل...</div>
            </div>
        );
    }

    if (error || !complexData?.item) {
        return (
            <div className='flex justify-center items-center h-96'>
                <div className="text-red-500">حدث خطأ في تحميل البيانات</div>
            </div>
        );
    }

    const complex = complexData.item;

    return (
        <div className='flex gap-8 xl:flex-row flex-col '>
            <div
                className="rounded-[16px] h-fit bg-cover bg-no-repeat bg-center pt-[152px]"
                style={{
                    backgroundImage: `
  linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.26) 30.77%,
    rgba(5, 15, 30, 0.90) 58.5%,
    #08182F 100%
  ),
  url(${complex.background_img})
`,
                    backgroundColor: 'lightgray',
                }}
            >
                <div className="flex flex-col items-center gap-6 px-6 pb-4 self-stretch">
                    <div className='flex flex-col items-start gap-4 self-stretch'>
                        <div className="flex flex-col items-center gap-2 self-stretch">
                            <div className="flex justify-center items-end gap-[25px] self-stretch">
                                <div className="flex flex-col justify-center items-center w-[122px] h-[42px]">



                                </div>
                                <div className="flex justify-center items-center w-[80px] h-[80px] overflow-hidden rounded-[145.455px] border-[3.333px] border-[rgba(255,255,255,0.09)]" style={{ backgroundColor: "var(--bg-secondry, #08182F)" }}>
                                    <img src={complex.logo || "/images/city-icon.png"} alt="city-icon" className="w-full h-full object-cover" />
                                </div>
                                <div className="flex flex-col justify-center items-center w-[122px]">


                                </div>
                            </div>
                            <div className="flex flex-col items-center gap-1 self-stretch">
                                <p className="text-text-main text-[20px] font-normal leading-[140%]">
                                    {complex.name.ar || complex.name.en}
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-end gap-2 pb-3 self-stretch border-b border-white/10">
                            <div className="time flex items-center gap-2 self-stretch">

                            </div>
                            <div className="flex items-center gap-2 self-stretch">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5 10.5005C14.5 9.11924 13.3808 8 12.0005 8C10.6192 8 9.5 9.11924 9.5 10.5005C9.5 11.8808 10.6192 13 12.0005 13C13.3808 13 14.5 11.8808 14.5 10.5005Z" stroke="white" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9995 21C10.801 21 4.5 15.8984 4.5 10.5633C4.5 6.38664 7.8571 3 11.9995 3C16.1419 3 19.5 6.38664 19.5 10.5633C19.5 15.8984 13.198 21 11.9995 21Z" stroke="white" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <p className="text-text-main text-right text-[14px] font-light leading-[140%]">
                                    {complex.governorate.name.ar || complex.governorate.name.en}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-start gap-4 self-stretch">

                    <div className="flex items-start gap-4 self-stretch w-full">
                        {complex.phones.map((phone: any) => {
                            if (phone.type.value === 0) {
                                // 📞 Phone
                                return (
                                    <button
                                        key={phone.id}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            window.open(`tel:${phone.number}`, "_self");
                                        }}
                                        className="flex w-full cursor-pointer h-10 px-8 py-[11px] justify-center items-center gap-2 rounded-[16px] border border-[rgba(255,255,255,0.11)]"
                                    >
                                        {svgphone}
                                    </button>
                                );
                            }

                            if (phone.type.value === 1) {
                                // 💬 WhatsApp (add country code if needed)
                                const countryCode = "964"; // Iraq example
                                return (
                                    <button
                                        key={phone.id}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            window.open(
                                                `https://wa.me/${countryCode}${phone.number}`,
                                                "_blank"
                                            );
                                        }}
                                        className="flex w-full cursor-pointer h-10 px-8 py-[11px] justify-center items-center gap-2 rounded-[16px] border border-[rgba(255,255,255,0.11)]"
                                    >
                                        {svgwhatsapp}
                                    </button>
                                );
                            }

                            return null;
                        })}
                    </div>

                </div>
            </div>
            <div className="flex flex-col gap-8 flex-1">
                <div className="flex justify-between items-center self-stretch">
                    <Link
                        href={`/residential-complexes`}
                        className="flex items-center gap-2 w-[48px] p-3 rounded-[16px] border border-white/15 bg-black/20 backdrop-blur"
                        style={{ backdropFilter: "blur(65px)" }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M14.0459 5.57422L20.4992 11.9998L14.0459 18.4265" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path opacity="0.4" d="M20.5 12H4.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </Link>
                    {/* <div className='flex gap-2 items-center'>
                        <Button variant="gray" className='w-fit p-4'>مشاركة <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M18.3806 3C19.8722 3 21.0806 4.20842 21.0806 5.69997C21.0806 7.19152 19.8722 8.39994 18.3806 8.39994C16.8891 8.39994 15.6807 7.19152 15.6807 5.69997C15.6807 4.20842 16.8891 3 18.3806 3Z" stroke="#B8C6E3" stroke-linecap="round" stroke-linejoin="round" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.58083 9.29883C9.07238 9.29883 10.2808 10.5073 10.2808 11.9988C10.2808 13.4904 9.07238 14.6988 7.58083 14.6988C6.08928 14.6988 4.88086 13.4904 4.88086 11.9988C4.88086 10.5073 6.08928 9.29883 7.58083 9.29883Z" stroke="#B8C6E3" stroke-linecap="round" stroke-linejoin="round" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M18.3806 15.5996C19.8722 15.5996 21.0806 16.808 21.0806 18.2995C21.0806 19.7901 19.8722 20.9995 18.3806 20.9995C16.8891 20.9995 15.6807 19.7901 15.6807 18.2995C15.6807 16.808 16.8891 15.5996 18.3806 15.5996Z" stroke="#B8C6E3" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M9.91111 13.3581L16.0583 16.9406M16.0486 7.05859L9.91016 10.6401" stroke="#B8C6E3" stroke-linecap="round" stroke-linejoin="round" />
                        </svg></Button>
                        <Button variant="gray" className='w-fit p-4'>حفظ <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M20.6449 11.915C21.6665 8.7294 20.4794 5.07389 17.1421 3.99873C16.2781 3.72338 15.3615 3.65915 14.4683 3.80996C13.5751 3.96175 12.7296 4.57863 12.0037 5.1235C11.2749 4.5835 10.4304 3.96953 9.53816 3.81872C8.64592 3.66693 7.73034 3.72921 6.86632 3.99873C3.52896 5.08362 2.33218 8.7294 3.35383 11.915C4.93007 16.9678 12.0037 20.2711 12.0037 20.2711C12.0037 20.2711 18.9713 17.0261 20.6449 11.915ZM19.8512 4.39674C15.657 0.201042 8.84377 0.201088 4.64963 4.39687C1.38559 7.66041 0.664341 12.4848 2.45868 16.4479C2.45922 16.4654 2.45947 16.491 2.45847 16.5262C2.45517 16.6431 2.44103 16.803 2.41719 17.0076C2.39499 17.1982 2.36645 17.4107 2.33515 17.6438L2.32934 17.6871C2.29615 17.9344 2.2606 18.201 2.2293 18.4708C2.16753 19.0031 2.11769 19.5835 2.13985 20.094C2.15096 20.35 2.18098 20.6142 2.24831 20.8591C2.3141 21.0985 2.43049 21.3749 2.65284 21.5973C2.87525 21.8195 3.15194 21.936 3.3912 22.0017C3.63608 22.0689 3.90019 22.0989 4.15607 22.11C4.66653 22.1321 5.24673 22.0823 5.77898 22.0205C6.04868 21.9893 6.31531 21.9538 6.56254 21.9206L6.60546 21.9149C6.83865 21.8836 7.05125 21.8551 7.2419 21.8329C7.44654 21.8091 7.60636 21.795 7.72325 21.7917C7.75847 21.7907 7.78414 21.7909 7.80167 21.7915C11.7651 23.585 16.588 22.8649 19.8513 19.6001C24.045 15.4059 24.0539 8.5989 19.8512 4.39674Z" fill="white" />
                        </svg></Button>
                    </div> */}
                </div>
                <div
                    className="flex flex-col justify-center items-end gap-4 self-stretch px-6 py-4 rounded-[16px] border"
                    style={{
                        borderColor: "var(--stroke-border, #212F43)",
                        backgroundColor: "var(--opacomplex-white-5, rgba(255, 255, 255, 0.05))",
                        backdropFilter: "blur(9px)",
                    }}
                >
                    <div className="flex flex-col items-end gap-[7px] self-stretch rounded-[16px]">
                        <div className="flex items-center gap-2 w-full">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.1895 12.4121C15.1895 11.8598 15.6372 11.4121 16.1895 11.4121H16.1985C16.7508 11.4121 17.1985 11.8598 17.1985 12.4121C17.1985 12.9644 16.7508 13.4121 16.1985 13.4121H16.1895C15.6372 13.4121 15.1895 12.9644 15.1895 12.4121Z" fill="white" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.1807 12.4121C11.1807 11.8598 11.6284 11.4121 12.1807 11.4121H12.1897C12.742 11.4121 13.1897 11.8598 13.1897 12.4121C13.1897 12.9644 12.742 13.4121 12.1897 13.4121H12.1807C11.6284 13.4121 11.1807 12.9644 11.1807 12.4121Z" fill="white" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.17188 12.4121C7.17188 11.8598 7.61958 11.4121 8.17187 11.4121H8.18088C8.73316 11.4121 9.18088 11.8598 9.18088 12.4121C9.18088 12.9644 8.73316 13.4121 8.18088 13.4121H8.17187C7.61958 13.4121 7.17188 12.9644 7.17188 12.4121Z" fill="white" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M18.7905 5.45733C15.1821 1.84756 9.31885 1.84756 5.7105 5.45733C2.88461 8.28267 2.27077 12.4709 3.85683 15.8984C3.86215 15.9099 3.86719 15.9215 3.87192 15.9333C3.96409 16.1623 3.96202 16.4218 3.95787 16.5686C3.95266 16.7529 3.93228 16.9652 3.90711 17.1812C3.88332 17.3854 3.8531 17.6104 3.82239 17.8391L3.81601 17.8867C3.78274 18.1345 3.74887 18.3889 3.7193 18.6437C3.65934 19.1604 3.62169 19.643 3.63844 20.029C3.64679 20.2214 3.66782 20.3639 3.69467 20.4616C3.70372 20.4945 3.712 20.5172 3.71811 20.5318C3.73272 20.5379 3.75538 20.5462 3.7883 20.5552C3.88603 20.582 4.0286 20.603 4.22096 20.6114C4.60699 20.6281 5.08953 20.5904 5.60622 20.5305C5.86098 20.501 6.11537 20.4671 6.36318 20.4339L6.41041 20.4276C6.63919 20.3969 6.86428 20.3667 7.06855 20.3429C7.28453 20.3178 7.49684 20.2974 7.6811 20.2923C7.82788 20.2881 8.08736 20.2861 8.31629 20.3783C8.32798 20.383 8.33955 20.388 8.35099 20.3933C11.7792 21.9787 15.9657 21.3658 18.7905 18.5396C22.3993 14.9302 22.4065 9.07283 18.7905 5.45733ZM19.8512 4.39674C15.657 0.201042 8.84377 0.201088 4.64963 4.39687C1.38559 7.66041 0.664341 12.4848 2.45868 16.4479C2.45922 16.4654 2.45947 16.491 2.45847 16.5262C2.45517 16.6431 2.44103 16.803 2.41719 17.0076C2.39499 17.1982 2.36645 17.4107 2.33515 17.6438L2.32934 17.6871C2.29615 17.9344 2.2606 18.201 2.2293 18.4708C2.16753 19.0031 2.11769 19.5835 2.13985 20.094C2.15096 20.35 2.18098 20.6142 2.24831 20.8591C2.3141 21.0985 2.43049 21.3749 2.65284 21.5973C2.87525 21.8195 3.15194 21.936 3.3912 22.0017C3.63608 22.0689 3.90019 22.0989 4.15607 22.11C4.66653 22.1321 5.24673 22.0823 5.77898 22.0205C6.04868 21.9893 6.31531 21.9538 6.56254 21.9206L6.60546 21.9149C6.83865 21.8836 7.05125 21.8551 7.2419 21.8329C7.44654 21.8091 7.60636 21.795 7.72325 21.7917C7.75847 21.7907 7.78414 21.7909 7.80167 21.7915C11.7651 23.585 16.588 22.8649 19.8513 19.6001C24.045 15.4059 24.0539 8.5989 19.8512 4.39674Z" fill="white" />
                            </svg>
                            <p className='text-text-gray1 typography-body-14-medium'>الوصف</p>
                        </div>
                        <p className=' overflow-hidden text-text-gray3 text-ellipsis typography-body-14-light h-fit self-stretch'>
                            {complex.description.ar || complex.description.en}
                        </p>

                    </div>
                </div>
                <FeatureAndServies item={complex} />
                <RowDevloperAndRingPrice item={complex} />
            </div>
        </div>
    )
}

function HeaderItem({ title, svg }: { title: string, svg?: string }) {
    return (
        <div className="flex items-center gap-2 py-2 self-stretch">
            {svg ? svg : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M5.7 5H18.3C19.4201 5 19.9802 5 20.408 5.21799C20.7843 5.40973 21.0903 5.71569 21.282 6.09202C21.5 6.51984 21.5 7.0799 21.5 8.2V15.8C21.5 16.9201 21.5 17.4802 21.282 17.908C21.0903 18.2843 20.7843 18.5903 20.408 18.782C19.9802 19 19.4201 19 18.3 19H5.7C4.5799 19 4.01984 19 3.59202 18.782C3.21569 18.5903 2.90973 18.2843 2.71799 17.908C2.5 17.4802 2.5 16.9201 2.5 15.8V8.2C2.5 7.0799 2.5 6.51984 2.71799 6.09202C2.90973 5.71569 3.21569 5.40973 3.59202 5.21799C4.01984 5 4.5799 5 5.7 5Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M12 5V19" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M21.5 9H20.11C19.5405 9 19.2558 9 19.039 9.11259C18.8564 9.20746 18.7075 9.35638 18.6126 9.53903C18.5 9.75576 18.5 10.0405 18.5 10.61V13.39C18.5 13.9595 18.5 14.2442 18.6126 14.461C18.7075 14.6436 18.8564 14.7925 19.039 14.8874C19.2558 15 19.5405 15 20.11 15H21.5" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M2.5 9H3.89C4.45949 9 4.74424 9 4.96097 9.11259C5.14362 9.20746 5.29254 9.35638 5.38741 9.53903C5.5 9.75576 5.5 10.0405 5.5 10.61V13.39C5.5 13.9595 5.5 14.2442 5.38741 14.461C5.29254 14.6436 5.14362 14.7925 4.96097 14.8874C4.74424 15 4.45949 15 3.89 15H2.5" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
            </svg>}
            <p className='text-text-gray1 typography-body-14-light'> {title}</p>
        </div>
    )
}

