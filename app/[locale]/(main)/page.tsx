"use client";
import { Button } from '@/app/_components/Button'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import React, { useState } from 'react'

export default function page() {
  return (
    <div className=' w-full h-full pt-[121px] flex flex-col xl:flex-row '>
      <div
        className="bg-cover bg-no-repeat bg-center pointer-events-none h-full w-full absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(0, 0, 0, 0.37) 0%, rgba(0, 0, 0, 0.39) 78.5%), url('/images/home.jpg')",
          backgroundColor: "lightgray",
        }}
      ></div>
      <div className='w-full xl:w-1/2 xl:h-full flex flex-col '>
        {/* <div className='h-0 shrink-0 w-full xl:h-1/2 '></div> */}
        <div className='flex items-center   pb-4 relative z-10 flex-col xl:flex-row w-full xl:pt-[260px]  '>
          <div className="flex flex-col justify-center   shrink-0   h-full w-full">
            <div className="flex flex-col justify-center gap-6  h-full w-full">
              <div className="text-white xl:text-[56px] text-[32px] font-normal leading-normal">
                <p className='xl:max-w-[569px] max-w-full'>
                  البحــــــث عن عقـــــارك المثالي لم يكن أسهل
                </p>
                <p>
                  <span className='font-bold'>من ألان</span> !
                </p>
              </div>
              <p className='text-white text-[16px] font-light w-[300px] sm:w-[412px] '>اكتشف عقارات فاخرة تجمع بين التصميم الأنيق، الموقع المثالي، والمرافق المتكاملة لتناسب أسلوب حياتك</p>
              <div className='flex gap-4 pt-6 sm:flex-row flex-col items-center xl:items-start'>
                <Button>
                  ابدء البحث الان
                </Button>
                <Button mode="default" variant="gray">
                  تواصل معنا
                </Button>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className=' h-fit pb-7 justify-center items-center flex flex-col relative z-10 w-full xl:w-1/2'>
        <div className='flex w-full h-1/2 flex-col justify-center relative'>

          <div className="flex w-[320px] h-1/2 flex-col justify-center gap-4 relative xl:m-0 mt-6">
            <div className="flex items-center gap-[52px] self-stretch">
              <PresentationNumber number="230+" title="عقارات مميزة متاحة الآن للتأجير أو الشراء" />
              <PresentationNumber number="230+" title="عقارات مميزة متاحة الآن للتأجير أو الشراء" />
            </div>
            <div className="flex flex-col items-start gap-6 self-stretch relative top-[20px]">
              <div className="flex items-center gap-3.5 self-stretch ">
                <p className="text-white absolute right-[0px] text-[14px] font-light leading-[1.2] whitespace-nowrap">
                  انضم الئ عقارات اسناد
                </p>
                <div className="flex items-center absolute left-[0px]">
                  <ImageCarve image="/images/card.png" zIndex={0} position="left-[0px]" />
                  <ImageCarve image="/images/city.png" zIndex={4} position="left-[30px]" />
                  <ImageCarve image="/images/details.png" zIndex={6} position="left-[60px]" />
                  <ImageCarve image="/images/details.png" zIndex={10} position="left-[90px]" />
                </div>

              </div>
              <Button mode="default" variant="gray" className='w-full top-2 relative'>
                سجل مجمعك
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                  <path d="M16 16.8047L8 8.80469M8 8.80469V14.8047M8 8.80469H14" stroke="#FBF5EF" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </Button>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 mt-24 w-full">
          <div className="flex flex-col gap-4 self-stretch w-full">
            <p className='text-white typography-title-24-light'>
              عقارات مشابهه
            </p>
            <div className="flex scroll-white pb-4 items-start content-start gap-6 self-stretch overflow-x-auto w-full snap-x snap-mandatory">
              <div className="flex p-1 flex-col justify-center items-end">
                <div className="w-[298px] h-[296px] relative rounded-[20px] border-[2px] border-[#DE7432]">
                  <div className="flex items-center gap-[10px] px-4 py-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className='absolute right-[1px]' width="164" height="100" viewBox="0 0 164 100" fill="none">
                      <g filter="url(#filter0_f_3516_5332)">
                        <rect x="81.7207" y="36" width="45.7206" height="27.7573" fill="#FA9529" fill-opacity="0.25" />
                      </g>
                      <g filter="url(#filter1_f_3516_5332)">
                        <rect x="36" y="36" width="68.6558" height="27.7573" fill="#EF4F3A" fill-opacity="0.55" />
                      </g>
                      <defs>
                        <filter id="filter0_f_3516_5332" x="45.7207" y="0" width="117.721" height="99.7578" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                          <feFlood flood-opacity="0" result="BackgroundImageFix" />
                          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                          <feGaussianBlur stdDeviation="18" result="effect1_foregroundBlur_3516_5332" />
                        </filter>
                        <filter id="filter1_f_3516_5332" x="0" y="0" width="140.656" height="99.7578" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                          <feFlood flood-opacity="0" result="BackgroundImageFix" />
                          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                          <feGaussianBlur stdDeviation="18" result="effect1_foregroundBlur_3516_5332" />
                        </filter>
                      </defs>
                    </svg>
                    <p className='text-white text-[12px] font-normal leading-[140%]'>عقار مميز</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M18.804 7.74781C17.428 12.2729 23.476 16.7768 15.354 21C16.6476 17.4377 15.354 16.1723 14.4024 15.0788C14.266 16.3066 13.1708 17.864 12.6403 17.9777C13.2655 15.4483 11.3329 13.5062 10.5656 13.6293C10.9066 15.8462 8.09285 18.063 10.0824 21C2.53378 18.916 4.30435 11.9607 6.12326 8.86589C5.98684 11.1396 7.37285 12.9756 8.09285 13.4872C7.7518 7.98494 12.1855 9.02514 10.7842 3C15.377 4.65978 15.4922 9.09592 15.1018 10.9622C15.7109 8.80224 17.8677 7.87608 18.804 7.74781Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>
                  <CardProperty />
                </div>
              </div>
              <div className="flex p-1 flex-col justify-center items-end">
                <div className="w-[298px] h-[296px] relative rounded-[20px] border-[2px] border-[#DE7432]">
                  <div className="flex items-center gap-[10px] px-4 py-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className='absolute right-[1px]' width="164" height="100" viewBox="0 0 164 100" fill="none">
                      <g filter="url(#filter0_f_3516_5332)">
                        <rect x="81.7207" y="36" width="45.7206" height="27.7573" fill="#FA9529" fill-opacity="0.25" />
                      </g>
                      <g filter="url(#filter1_f_3516_5332)">
                        <rect x="36" y="36" width="68.6558" height="27.7573" fill="#EF4F3A" fill-opacity="0.55" />
                      </g>
                      <defs>
                        <filter id="filter0_f_3516_5332" x="45.7207" y="0" width="117.721" height="99.7578" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                          <feFlood flood-opacity="0" result="BackgroundImageFix" />
                          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                          <feGaussianBlur stdDeviation="18" result="effect1_foregroundBlur_3516_5332" />
                        </filter>
                        <filter id="filter1_f_3516_5332" x="0" y="0" width="140.656" height="99.7578" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                          <feFlood flood-opacity="0" result="BackgroundImageFix" />
                          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                          <feGaussianBlur stdDeviation="18" result="effect1_foregroundBlur_3516_5332" />
                        </filter>
                      </defs>
                    </svg>
                    <p className='text-white text-[12px] font-normal leading-[140%]'>عقار مميز</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M18.804 7.74781C17.428 12.2729 23.476 16.7768 15.354 21C16.6476 17.4377 15.354 16.1723 14.4024 15.0788C14.266 16.3066 13.1708 17.864 12.6403 17.9777C13.2655 15.4483 11.3329 13.5062 10.5656 13.6293C10.9066 15.8462 8.09285 18.063 10.0824 21C2.53378 18.916 4.30435 11.9607 6.12326 8.86589C5.98684 11.1396 7.37285 12.9756 8.09285 13.4872C7.7518 7.98494 12.1855 9.02514 10.7842 3C15.377 4.65978 15.4922 9.09592 15.1018 10.9622C15.7109 8.80224 17.8677 7.87608 18.804 7.74781Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>
                  <CardProperty />
                </div>
              </div>
              <div className="flex p-1 flex-col justify-center items-end">
                <div className="w-[298px] h-[296px] relative rounded-[20px] border-[2px] border-[#DE7432]">
                  <div className="flex items-center gap-[10px] px-4 py-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className='absolute right-[1px]' width="164" height="100" viewBox="0 0 164 100" fill="none">
                      <g filter="url(#filter0_f_3516_5332)">
                        <rect x="81.7207" y="36" width="45.7206" height="27.7573" fill="#FA9529" fill-opacity="0.25" />
                      </g>
                      <g filter="url(#filter1_f_3516_5332)">
                        <rect x="36" y="36" width="68.6558" height="27.7573" fill="#EF4F3A" fill-opacity="0.55" />
                      </g>
                      <defs>
                        <filter id="filter0_f_3516_5332" x="45.7207" y="0" width="117.721" height="99.7578" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                          <feFlood flood-opacity="0" result="BackgroundImageFix" />
                          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                          <feGaussianBlur stdDeviation="18" result="effect1_foregroundBlur_3516_5332" />
                        </filter>
                        <filter id="filter1_f_3516_5332" x="0" y="0" width="140.656" height="99.7578" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                          <feFlood flood-opacity="0" result="BackgroundImageFix" />
                          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                          <feGaussianBlur stdDeviation="18" result="effect1_foregroundBlur_3516_5332" />
                        </filter>
                      </defs>
                    </svg>
                    <p className='text-white text-[12px] font-normal leading-[140%]'>عقار مميز</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M18.804 7.74781C17.428 12.2729 23.476 16.7768 15.354 21C16.6476 17.4377 15.354 16.1723 14.4024 15.0788C14.266 16.3066 13.1708 17.864 12.6403 17.9777C13.2655 15.4483 11.3329 13.5062 10.5656 13.6293C10.9066 15.8462 8.09285 18.063 10.0824 21C2.53378 18.916 4.30435 11.9607 6.12326 8.86589C5.98684 11.1396 7.37285 12.9756 8.09285 13.4872C7.7518 7.98494 12.1855 9.02514 10.7842 3C15.377 4.65978 15.4922 9.09592 15.1018 10.9622C15.7109 8.80224 17.8677 7.87608 18.804 7.74781Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>
                  <CardProperty />
                </div>
              </div>
              <div className="flex p-1 flex-col justify-center items-end">
                <div className="w-[298px] h-[296px] relative rounded-[20px] border-[2px] border-[#DE7432]">
                  <div className="flex items-center gap-[10px] px-4 py-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className='absolute right-[1px]' width="164" height="100" viewBox="0 0 164 100" fill="none">
                      <g filter="url(#filter0_f_3516_5332)">
                        <rect x="81.7207" y="36" width="45.7206" height="27.7573" fill="#FA9529" fill-opacity="0.25" />
                      </g>
                      <g filter="url(#filter1_f_3516_5332)">
                        <rect x="36" y="36" width="68.6558" height="27.7573" fill="#EF4F3A" fill-opacity="0.55" />
                      </g>
                      <defs>
                        <filter id="filter0_f_3516_5332" x="45.7207" y="0" width="117.721" height="99.7578" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                          <feFlood flood-opacity="0" result="BackgroundImageFix" />
                          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                          <feGaussianBlur stdDeviation="18" result="effect1_foregroundBlur_3516_5332" />
                        </filter>
                        <filter id="filter1_f_3516_5332" x="0" y="0" width="140.656" height="99.7578" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                          <feFlood flood-opacity="0" result="BackgroundImageFix" />
                          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                          <feGaussianBlur stdDeviation="18" result="effect1_foregroundBlur_3516_5332" />
                        </filter>
                      </defs>
                    </svg>
                    <p className='text-white text-[12px] font-normal leading-[140%]'>عقار مميز</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M18.804 7.74781C17.428 12.2729 23.476 16.7768 15.354 21C16.6476 17.4377 15.354 16.1723 14.4024 15.0788C14.266 16.3066 13.1708 17.864 12.6403 17.9777C13.2655 15.4483 11.3329 13.5062 10.5656 13.6293C10.9066 15.8462 8.09285 18.063 10.0824 21C2.53378 18.916 4.30435 11.9607 6.12326 8.86589C5.98684 11.1396 7.37285 12.9756 8.09285 13.4872C7.7518 7.98494 12.1855 9.02514 10.7842 3C15.377 4.65978 15.4922 9.09592 15.1018 10.9622C15.7109 8.80224 17.8677 7.87608 18.804 7.74781Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>
                  <CardProperty />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
function Abs(){
  return (
    <div></div>
  )
}
function PresentationNumber({ number, title }: { number: string, title: string }) {
  return (
    <div className="flex w-[134px] flex-col">
      <div className='flex gap-1 items-center'>
        <p className="text-white text-[40px] font-normal leading-normal">
          {number}
        </p>
      </div>
      <p className="text-white text-[12px] leading-[140%]">
        {title}
      </p>
    </div>
  )
}
function ImageCarve({ image, zIndex, position }: { image: string, zIndex: number, position: string }) {
  return (
    <div className={cn(`size-[49px] border-[2.3px] overflow-hidden border-[rgba(255,255,255,0.08)] rounded-full  hover:z-[100] transition-all duration-300 absolute`, zIndex && `z-[${zIndex}]`, position && ` ${position}`)}>
      <Image src={image} alt="logo" fill className='object-cover' />
    </div>
  )
}

function CardProperty() {
  const [isFavorite, setIsFavorite] = useState(false)
  return (
    <div
      className="flex h-[253px] min-w-full relative overflow-hidden max-w-[536px] p-[16px] justify-end items-end gap-[8px] flex-1 rounded-[18px] border border-stroke-border bg-[linear-gradient(180deg,rgba(8,24,47,0)_0%,var(--opacity-secondary-90,rgba(8,24,47,0.81))_86.5%),url('/images/company.png')] bg-[lightgray] bg-cover bg-no-repeat bg-center snap-center">
      <div
        className="flex items-center gap-1 px-3 z-40 py-2 absolute top-0 -right-0.5 rounded-bl-[24px] bg-[rgba(8,24,47,0.10)] backdrop-blur-[65px]"
      >
        <p className="text-text-main typography-body-14-light">بالشهر</p>
        <p className="text-text-main text-[18px] font-normal leading-[140%]">/</p>
        <p className="text-text-main text-[18px] font-normal leading-[140%]">$2,000</p>

      </div>
      <div
        onClick={() => setIsFavorite(!isFavorite)}
        className="flex items-center gap-2 p-2 absolute left-4 top-4 rounded-[12px]"
      ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M20.6449 11.915C21.6665 8.7294 20.4794 5.07389 17.1421 3.99873C16.2781 3.72338 15.3615 3.65915 14.4683 3.80996C13.5751 3.96175 12.7296 4.57863 12.0037 5.1235C11.2749 4.5835 10.4304 3.96953 9.53816 3.81872C8.64592 3.66693 7.73034 3.72921 6.86632 3.99873C3.52896 5.08362 2.33218 8.7294 3.35383 11.915C4.93007 16.9678 12.0037 20.2711 12.0037 20.2711C12.0037 20.2711 18.9713 17.0261 20.6449 11.915Z" fill={isFavorite ? "#F94566" : "none"} stroke="#FBF5EF" stroke-linecap="round" stroke-linejoin="round" />
        </svg></div>

      <div className="flex flex-col items-end gap-[8px] flex-1" >
        <div className="flex flex-col justify-center items-end gap-[8px] self-stretch">
          <p className='text-text-main w-full typography-body-16-medium'>شقة سكنية في المنصور</p>
          <div className="flex justify-end items-center gap-[8px] self-stretch">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M1.48926 8.39054C1.50367 4.14996 4.95302 0.723964 9.19361 0.738326C13.4342 0.752779 16.8602 4.20213 16.8458 8.44272V8.52968C16.7936 11.2862 15.2545 13.834 13.3675 15.8253C12.2884 16.946 11.0833 17.9381 9.77621 18.7818C9.42672 19.0842 8.90832 19.0842 8.55882 18.7818C6.61033 17.5136 4.90019 15.9124 3.50665 14.0514C2.26461 12.4286 1.55942 10.459 1.48926 8.41663V8.39054Z" stroke="#B8C6E3" stroke-linecap="round" stroke-linejoin="round" />
              <path opacity="0.4" d="M9.16741 10.9999C10.5265 10.9999 11.6283 9.8981 11.6283 8.53899C11.6283 7.17989 10.5265 6.07812 9.16741 6.07812C7.80831 6.07812 6.70654 7.17989 6.70654 8.53899C6.70654 9.8981 7.80831 10.9999 9.16741 10.9999Z" stroke="#B8C6E3" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <p className='text-text-gray2 w-full  typography-body-14-light'>بغداد/اليرموك/شارع نادي الصيد</p>
          </div>
        </div>
        <div className="flex  items-center content-center gap-[8px] self-stretch flex-wrap">
          <div className="flex justify-center items-center gap-[4px] px-[16px] py-[6px] rounded-[10px] border border-[rgba(234,28,28,0.05)] bg-opacity-secondary-10 backdrop-blur-[65px]">
            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
              <path d="M7.48078 15.827L5.25344 15.8314C4.79185 15.8324 4.41745 15.4579 4.41846 14.9964L4.4233 12.7695" stroke="#B8C6E3" stroke-width="0.833333" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M4.83154 15.416L7.75144 12.4961" stroke="#B8C6E3" stroke-width="0.833333" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M4.42477 7.23225L4.41992 5.00507C4.41892 4.54342 4.79342 4.16892 5.25507 4.16992L7.48225 4.17477" stroke="#B8C6E3" stroke-width="0.833333" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M16.076 12.7695L16.0809 14.9967C16.0819 15.4584 15.7074 15.8329 15.2457 15.8319L13.0186 15.827" stroke="#B8C6E3" stroke-width="0.833333" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M13.0171 4.17447L15.2449 4.16992C15.7066 4.16898 16.081 4.54357 16.0799 5.00525L16.0746 7.23196" stroke="#B8C6E3" stroke-width="0.833333" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M15.6666 4.58398L12.7466 7.50395" stroke="#B8C6E3" stroke-width="0.833333" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <p className='text-text-main typography-body-14-light'>300م</p>
          </div>
        </div>
      </div>
    </div>
  )
}