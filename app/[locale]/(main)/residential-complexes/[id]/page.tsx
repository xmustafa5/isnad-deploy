'use client';
import { AspectRatio } from '@/app/_components/aspect-ratio';
import { Button } from '@/app/_components/Button'
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

export default function page() {
    return (
        <div className='flex gap-8 xl:flex-row flex-col '>

            <div className="flex flex-col xl:overflow-y-auto  max-h-[calc(99.3vh-110px)] items-start gap-8 flex-1">
                <div className="flex flex-col items-start gap-4 self-stretch">
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
                        <div className='flex gap-2 items-center'>
                            <Button variant="gray" className='w-fit p-4'>مشاركة <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M18.3806 3C19.8722 3 21.0806 4.20842 21.0806 5.69997C21.0806 7.19152 19.8722 8.39994 18.3806 8.39994C16.8891 8.39994 15.6807 7.19152 15.6807 5.69997C15.6807 4.20842 16.8891 3 18.3806 3Z" stroke="#B8C6E3" stroke-linecap="round" stroke-linejoin="round" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.58083 9.29883C9.07238 9.29883 10.2808 10.5073 10.2808 11.9988C10.2808 13.4904 9.07238 14.6988 7.58083 14.6988C6.08928 14.6988 4.88086 13.4904 4.88086 11.9988C4.88086 10.5073 6.08928 9.29883 7.58083 9.29883Z" stroke="#B8C6E3" stroke-linecap="round" stroke-linejoin="round" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M18.3806 15.5996C19.8722 15.5996 21.0806 16.808 21.0806 18.2995C21.0806 19.7901 19.8722 20.9995 18.3806 20.9995C16.8891 20.9995 15.6807 19.7901 15.6807 18.2995C15.6807 16.808 16.8891 15.5996 18.3806 15.5996Z" stroke="#B8C6E3" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M9.91111 13.3581L16.0583 16.9406M16.0486 7.05859L9.91016 10.6401" stroke="#B8C6E3" stroke-linecap="round" stroke-linejoin="round" />
                            </svg></Button>
                            <Button variant="gray" className='w-fit p-4'>حفظ <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M20.6449 11.915C21.6665 8.7294 20.4794 5.07389 17.1421 3.99873C16.2781 3.72338 15.3615 3.65915 14.4683 3.80996C13.5751 3.96175 12.7296 4.57863 12.0037 5.1235C11.2749 4.5835 10.4304 3.96953 9.53816 3.81872C8.64592 3.66693 7.73034 3.72921 6.86632 3.99873C3.52896 5.08362 2.33218 8.7294 3.35383 11.915C4.93007 16.9678 12.0037 20.2711 12.0037 20.2711C12.0037 20.2711 18.9713 17.0261 20.6449 11.915Z" stroke="#B8C6E3" stroke-linecap="round" stroke-linejoin="round" />
                            </svg></Button>
                        </div>
                    </div>
                    <div className="flex flex-col items-start gap-4 self-stretch">
                        <div className="flex items-center gap-2 md:gap-4 self-stretch ">
                            <AspectRatio ratio={20 / 9} >
                                <div className='flex gap-2 w-full h-full '>
                                    <div className='relative w-[160%] h-full'>

                                        <Image
                                            src="/images/company.png"
                                            fill
                                            alt="صورة تفصيلية للمجمع السكني"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            priority={true}
                                            placeholder="blur"
                                            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                                            className="object-cover object-center bg-center"
                                        />
                                    </div>
                                    <div className='flex flex-col gap-2 w-full h-full'>

                                        <div className='relative w-full h-full'>
                                            <Image
                                                src="/images/card.png"
                                                fill
                                                alt="صورة تفصيلية للمجمع السكني"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                priority={true}
                                                placeholder="blur"
                                                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                                                className="object-cover"
                                            />

                                        </div>
                                        <div className='relative w-full h-full'>

                                            <Image
                                                src="/images/card.png"
                                                fill
                                                alt="صورة تفصيلية للمجمع السكني"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                priority={true}
                                                placeholder="blur"
                                                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                                                className="object-cover"
                                            />
                                        </div>
                                    </div>

                                </div>
                            </AspectRatio>

                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-start gap-6 self-stretch">
                    <div
                        className="flex flex-col justify-center items-end gap-4 self-stretch px-6 py-4 rounded-[16px] border"
                        style={{
                            borderColor: "var(--stroke-border, #212F43)",
                            backgroundColor: "var(--opacity-white-5, rgba(255, 255, 255, 0.05))",
                            backdropFilter: "blur(9px)",
                        }}
                    >
                        <div className="flex flex-col items-end gap-[7px] self-stretch rounded-[16px]">
                            <div className="flex items-center gap-2 w-full">
                                <p className='text-text-gray1 typography-body-14-medium'>الوصف</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.1895 12.4121C15.1895 11.8598 15.6372 11.4121 16.1895 11.4121H16.1985C16.7508 11.4121 17.1985 11.8598 17.1985 12.4121C17.1985 12.9644 16.7508 13.4121 16.1985 13.4121H16.1895C15.6372 13.4121 15.1895 12.9644 15.1895 12.4121Z" fill="white" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.1807 12.4121C11.1807 11.8598 11.6284 11.4121 12.1807 11.4121H12.1897C12.742 11.4121 13.1897 11.8598 13.1897 12.4121C13.1897 12.9644 12.742 13.4121 12.1897 13.4121H12.1807C11.6284 13.4121 11.1807 12.9644 11.1807 12.4121Z" fill="white" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.17188 12.4121C7.17188 11.8598 7.61958 11.4121 8.17187 11.4121H8.18088C8.73316 11.4121 9.18088 11.8598 9.18088 12.4121C9.18088 12.9644 8.73316 13.4121 8.18088 13.4121H8.17187C7.61958 13.4121 7.17188 12.9644 7.17188 12.4121Z" fill="white" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M18.7905 5.45733C15.1821 1.84756 9.31885 1.84756 5.7105 5.45733C2.88461 8.28267 2.27077 12.4709 3.85683 15.8984C3.86215 15.9099 3.86719 15.9215 3.87192 15.9333C3.96409 16.1623 3.96202 16.4218 3.95787 16.5686C3.95266 16.7529 3.93228 16.9652 3.90711 17.1812C3.88332 17.3854 3.8531 17.6104 3.82239 17.8391L3.81601 17.8867C3.78274 18.1345 3.74887 18.3889 3.7193 18.6437C3.65934 19.1604 3.62169 19.643 3.63844 20.029C3.64679 20.2214 3.66782 20.3639 3.69467 20.4616C3.70372 20.4945 3.712 20.5172 3.71811 20.5318C3.73272 20.5379 3.75538 20.5462 3.7883 20.5552C3.88603 20.582 4.0286 20.603 4.22096 20.6114C4.60699 20.6281 5.08953 20.5904 5.60622 20.5305C5.86098 20.501 6.11537 20.4671 6.36318 20.4339L6.41041 20.4276C6.63919 20.3969 6.86428 20.3667 7.06855 20.3429C7.28453 20.3178 7.49684 20.2974 7.6811 20.2923C7.82788 20.2881 8.08736 20.2861 8.31629 20.3783C8.32798 20.383 8.33955 20.388 8.35099 20.3933C11.7792 21.9787 15.9657 21.3658 18.7905 18.5396C22.3993 14.9302 22.4065 9.07283 18.7905 5.45733ZM19.8512 4.39674C15.657 0.201042 8.84377 0.201088 4.64963 4.39687C1.38559 7.66041 0.664341 12.4848 2.45868 16.4479C2.45922 16.4654 2.45947 16.491 2.45847 16.5262C2.45517 16.6431 2.44103 16.803 2.41719 17.0076C2.39499 17.1982 2.36645 17.4107 2.33515 17.6438L2.32934 17.6871C2.29615 17.9344 2.2606 18.201 2.2293 18.4708C2.16753 19.0031 2.11769 19.5835 2.13985 20.094C2.15096 20.35 2.18098 20.6142 2.24831 20.8591C2.3141 21.0985 2.43049 21.3749 2.65284 21.5973C2.87525 21.8195 3.15194 21.936 3.3912 22.0017C3.63608 22.0689 3.90019 22.0989 4.15607 22.11C4.66653 22.1321 5.24673 22.0823 5.77898 22.0205C6.04868 21.9893 6.31531 21.9538 6.56254 21.9206L6.60546 21.9149C6.83865 21.8836 7.05125 21.8551 7.2419 21.8329C7.44654 21.8091 7.60636 21.795 7.72325 21.7917C7.75847 21.7907 7.78414 21.7909 7.80167 21.7915C11.7651 23.585 16.588 22.8649 19.8513 19.6001C24.045 15.4059 24.0539 8.5989 19.8512 4.39674Z" fill="white" />
                                </svg>
                            </div>
                            <p className=' overflow-hidden text-text-gray3 text-ellipsis typography-body-14-light h-fit self-stretch'>
                                مجمع اليرموك هو مجمع سكني حديث مصمم بمعايير عالية ليوفر بيئة معيشية راقية وآمنة للسكان. يتميز بتصميم عصري يدمج بين المساحات الخضراء الواسعة والمرافق المتكاملة، مما يجعل الحياة اليومية أكثر راحة وسهولة.
                                يوفر المجمع مجموعة متنوعة من الخدمات التي تشمل الأمان، الترفيه، التعليم، والتسوق، مما يجعله خيارًا مثاليًا للعائلات الباحثة عن حياة متكاملة داخل بيئة آمنة ومريحة.
                            </p>
                            <Button mode="text" className='w-full '>
                                قراءة المزيد
                            </Button>
                        </div>

                    </div>


                    <div
                        className="flex flex-col justify-center items-end gap-4 self-stretch px-6 py-4 rounded-[16px] border"
                        style={{
                            borderColor: "var(--stroke-border, #212F43)",
                            backgroundColor: "var(--opacity-white-5, rgba(255, 255, 255, 0.05))",
                            backdropFilter: "blur(9px)",
                        }}
                    >
                        <div className="flex flex-col items-start gap-4 h-[229px] self-stretch">
                            <FeatureItem title="مميزات والخدمات" />
                            <div className="flex items-start gap-4 self-stretch overflow-y-auto">
                                <div className="flex w-full flex-col justify-center   self-stretch">
                                    <HeaderItem title="️المرافق والخدمات العامة" />
                                    <div className="flex flex-col items-end self-stretch">
                                        <ServiceItem text="️المرافق والخدمات العامة" />
                                        <ServiceItem text="مطاعم" />
                                        <ServiceItem text="مركز صحي" />
                                        <ServiceItem text="قاعة مناسبات" />
                                    </div>

                                </div>
                                <div className="flex w-full flex-col justify-center  self-stretch">
                                    <HeaderItem title="️المرافق والخدمات العامة" />
                                    <div className="flex flex-col items-end self-stretch">
                                        <ServiceItem text="️المرافق والخدمات العامة" />
                                        <ServiceItem text="مطاعم" />
                                        <ServiceItem text="مركز صحي" />
                                        <ServiceItem text="قاعة مناسبات" />
                                    </div>

                                </div>
                                <div className="flex w-full flex-col justify-center  self-stretch">
                                    <HeaderItem title="️المرافق والخدمات العامة" />
                                    <div className="flex flex-col items-end self-stretch">
                                        <ServiceItem text="️المرافق والخدمات العامة" />
                                        <ServiceItem text="مطاعم" />
                                        <ServiceItem text="مركز صحي" />
                                        <ServiceItem text="قاعة مناسبات" />
                                    </div>

                                </div>
                            </div>
                        </div>
                        <Button mode="text" className='w-full bg-transparent '>
                            قراءة المزيد
                        </Button>
                    </div>
                    <div className="flex flex-col gap-4 self-stretch">
                        <p className='text-white typography-title-24-light'>
                            المدن
                        </p>
                        <div className="flex items-start content-start gap-6 self-stretch flex-wrap">
                            <CardProperty />
                            <CardProperty />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
function FeatureItem({ title, svg }: { title: string, svg?: string }) {
    return (
        <div
            className="flex items-center gap-2 py-2 self-stretch border-b"
            style={{ borderColor: "rgba(255, 255, 255, 0.07)" }}
        >
            {svg ? svg :
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.97076 2.94141C6.29597 2.94141 6.58413 3.15099 6.6843 3.46039C6.972 4.34899 7.66804 5.04471 8.55787 5.33357C8.86708 5.43395 9.07642 5.72212 9.07629 6.04722C9.07617 6.37232 8.8666 6.66032 8.55731 6.76046C7.66831 7.04828 6.97212 7.74447 6.6843 8.63347C6.58413 8.94287 6.29597 9.15246 5.97076 9.15246C5.64555 9.15246 5.3574 8.94287 5.25723 8.63347C4.96948 7.74471 4.27244 7.04828 3.38404 6.7604C3.07484 6.66021 2.86536 6.37225 2.86523 6.04722C2.86511 5.72219 3.07435 5.43407 3.38348 5.33363C4.27271 5.04471 4.96961 4.34876 5.25723 3.46039C5.3574 3.15099 5.64556 2.94141 5.97076 2.94141ZM5.19369 6.04671C5.48394 6.27222 5.74501 6.5332 5.97064 6.82345C6.19617 6.53321 6.45716 6.27223 6.74741 6.04671C6.45719 5.82123 6.19619 5.56034 5.97064 5.27016C5.74499 5.56035 5.48391 5.82124 5.19369 6.04671Z" fill="white" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M19.0667 15.5547C19.4809 15.5547 19.8167 15.8905 19.8167 16.3047V17.0198H20.534C20.9482 17.0198 21.284 17.3556 21.284 17.7698C21.284 18.184 20.9482 18.5198 20.534 18.5198H19.8167V19.2352C19.8167 19.6494 19.4809 19.9852 19.0667 19.9852C18.6525 19.9852 18.3167 19.6494 18.3167 19.2352V18.5198H17.6035C17.1893 18.5198 16.8535 18.184 16.8535 17.7698C16.8535 17.3556 17.1893 17.0198 17.6035 17.0198H18.3167V16.3047C18.3167 15.8905 18.6525 15.5547 19.0667 15.5547Z" fill="white" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.06326 9.95313C9.38835 9.95312 9.67643 10.1626 9.7767 10.4718C10.441 12.5208 12.0471 14.1269 14.0962 14.7913C14.4054 14.8916 14.6148 15.1796 14.6148 15.5047C14.6148 15.8298 14.4054 16.1179 14.0961 16.2182C12.0472 16.8824 10.4411 18.4885 9.77673 20.5384C9.67649 20.8477 9.38839 21.0572 9.06326 21.0572C8.73813 21.0572 8.45002 20.8477 8.34979 20.5384C7.68544 18.4885 6.07937 16.8824 4.03043 16.2182C3.72118 16.1179 3.51173 15.8298 3.51172 15.5047C3.51171 15.1796 3.72115 14.8916 4.0304 14.7913C6.07941 14.1269 7.68549 12.5208 8.34982 10.4718C8.45008 10.1626 8.73816 9.95313 9.06326 9.95313ZM9.06326 12.5317C8.34701 13.7633 7.32189 14.7884 6.09031 15.5047C7.32189 16.221 8.34702 17.2462 9.06326 18.4781C9.77952 17.2462 10.8047 16.221 12.0362 15.5047C10.8047 14.7884 9.77952 13.7633 9.06326 12.5317Z" fill="white" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M18.1218 3.42578C18.4469 3.42579 18.735 3.63527 18.8353 3.94455C19.2981 5.37273 20.4177 6.4923 21.846 6.95524C22.1552 7.05549 22.3647 7.34359 22.3647 7.6687C22.3647 7.99382 22.1552 8.28192 21.846 8.38216C20.4177 8.84509 19.2981 9.96466 18.8353 11.3928C18.735 11.7021 18.4469 11.9116 18.1218 11.9116C17.7967 11.9116 17.5086 11.7021 17.4084 11.3929C16.9454 9.96466 15.8258 8.84508 14.3976 8.38216C14.0884 8.28191 13.8789 7.99382 13.8789 7.6687C13.8789 7.34359 14.0884 7.0555 14.3976 6.95525C15.8258 6.49231 16.9454 5.37274 17.4084 3.94452C17.5086 3.63524 17.7967 3.42577 18.1218 3.42578ZM16.3477 7.6687C17.0539 8.13253 17.6579 8.7366 18.1218 9.44281C18.5856 8.7366 19.1897 8.13253 19.8959 7.6687C19.1897 7.20487 18.5856 6.60079 18.1218 5.89458C17.6579 6.60079 17.0539 7.20487 16.3477 7.6687Z" fill="white" />
                </svg>
            }
            <p className='text-text-gray1 typography-body-16-medium'> {title}</p>
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
function ServiceItem({ text, svg }: { text: string, svg?: string }) {
    return (
        <div className="flex items-center gap-2 py-1 self-stretch">
            {svg ? svg : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M19 7.1875L9.375 16.8125L5 12.4375" stroke="#B8C6E3" stroke-linecap="round" stroke-linejoin="round" />
            </svg>}
            <p className='text-text-gray2 typography-body-14-light'>{text}</p>
        </div>

    )
}
function CardProperty() {
    return (
        <Link href={`/residential-complexes/3/3}`}
            className="
    flex  items-end gap-2 p-4
    h-[178.853px] min-w-[232px] min-h-[149.259px]
    flex-[1_0_0] aspect-[278/178.85]
    rounded-[16px] border border-white/10
     bg-center bg-cover bg-no-repeat
    backdrop-blur-[8.5px] overflow-hidden relative
  "
        >
            <div className='w-full absolute inset-0 bg-[linear-gradient(180deg,rgba(8,24,47,0)_0%,rgba(8,24,47,0.81)_86.5%)] z-10'></div>
            <Image
                src="/images/city.png"
                fill
                alt="صورة تفصيلية للمجمع السكني"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={true}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                className="object-cover "
            />
            <div className="flex flex-col z-20 gap-2 w-[203.5px]">
                <div className="flex flex-col justify-center self-stretch">
                    <p className='text-text-main typography-body-16-medium'>مدينة الزهراء </p>
                </div>
                <div className="flex  items-start gap-4">
                    <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                            <path d="M12.4704 15.569C12.4647 16.5315 11.6807 17.3066 10.7182 17.301H4.64322C3.68154 17.3058 2.89744 16.5298 2.89258 15.5674V11.175C2.89664 10.797 3.07584 10.4427 3.37747 10.2149L6.6801 7.56418C7.2631 7.10361 8.08612 7.10361 8.66833 7.56418L11.9855 10.2125C12.2856 10.4403 12.4639 10.7938 12.4704 11.17V15.569Z" stroke="white" stroke-width="0.833333" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M7.67969 14.1465V17.1037" stroke="white" stroke-width="0.833333" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M15.0294 17.2122H16.1111C17.0946 17.2122 17.8917 16.4151 17.8917 15.4315V4.90174C17.8917 3.91816 17.0946 3.12109 16.1111 3.12109H11.7584C10.7805 3.12109 9.98828 3.9133 9.98828 4.89119V5.62339" stroke="white" stroke-width="0.833333" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M15.1973 13.7598V13.7681" stroke="white" stroke-width="0.833333" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M15.1973 10.2486V10.2402" stroke="white" stroke-width="0.833333" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M12.6484 6.7207V6.72904" stroke="white" stroke-width="0.833333" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M15.1973 6.7207V6.72904" stroke="white" stroke-width="0.833333" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <p className='text-text-main typography-body-12-light'>30 عقار</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                            <path d="M13.0422 17.7109V12.8728V7.71604C15.726 7.34145 17.6298 6.41389 17.6298 5.30795C17.6298 4.21174 15.726 3.26877 13.0422 2.89418C12.2347 2.77824 11.3396 2.71094 10.4168 2.71094C9.49333 2.71094 8.599 2.77824 7.79066 2.89418C5.10689 3.26877 3.20312 4.21174 3.20312 5.30795C3.20312 6.41389 5.10689 7.34145 7.79066 7.71604V12.8728V17.7109" stroke="white" stroke-width="0.833333" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M7.79004 12.8738C8.5976 12.7587 9.49276 12.6914 10.4163 12.6914C11.3389 12.6914 12.2333 12.7587 13.0416 12.8738" stroke="white" stroke-width="0.833333" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M13.042 17.7115C15.7257 17.3361 17.6295 16.3939 17.6295 15.288V5.30859" stroke="white" stroke-width="0.833333" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M3.20312 5.30859V15.288C3.20312 16.3939 5.10771 17.3361 7.79066 17.7115" stroke="white" stroke-width="0.833333" stroke-linecap="round" stroke-linejoin="round" />
                        </svg><p className='text-text-main typography-body-12-light'>5 سامبل</p>
                    </div>
                </div>

            </div>


        </Link>
    )
}