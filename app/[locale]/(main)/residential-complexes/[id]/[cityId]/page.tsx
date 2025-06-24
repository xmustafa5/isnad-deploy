'use client';
import { AspectRatio } from '@/app/_components/aspect-ratio'
import Image from 'next/image'
import React, { useState } from 'react'

function page({ params }: { params: { id: string, cityId: string } }) {
    return (
        <div className='flex gap-[32px]'>
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
      url('/images/card.png')
    `,
                    backgroundColor: 'lightgray',
                }}
            >
                <div className="flex flex-col items-center gap-6 px-6 pb-4 self-stretch">
                    <div className='flex flex-col items-start gap-4 self-stretch'>
                        <div className="flex flex-col items-center gap-2 self-stretch">
                            <div className="flex justify-center items-end gap-[25px] self-stretch">
                                <div className="flex flex-col justify-center items-center w-[122px] h-[42px]">
                                    <div className="flex items-center gap-1">
                                        <p className="text-[#D3D9E1] text-right text-[19px] font-bold leading-[140%]">
                                            10+
                                        </p>

                                    </div>
                                    <p className="text-[#AAB7CB] text-right text-[12px] font-normal leading-[120%]">
                                        اكثر من 10 ابراج سكنية
                                    </p>

                                </div>
                                <div className="flex justify-center items-center w-[80px] h-[80px] px-[12.444px] py-[26.667px] rounded-[145.455px] border-[3.333px] border-[rgba(255,255,255,0.09)]" style={{ backgroundColor: "var(--bg-secondry, #08182F)" }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="56" height="28" viewBox="0 0 56 28" fill="none">
                                        <g clip-path="url(#clip0_3149_48707)">
                                            <path d="M3.911 17.5996H0.444336V27.1552H3.86656V17.5996H3.911Z" fill="#C57340" />
                                            <path d="M49.3773 17.5996H44.0884V27.1552H49.2439C53.9995 27.1552 55.555 24.7996 55.555 21.9996C55.555 19.1996 53.8217 17.5996 49.3328 17.5996H49.3773ZM52.1773 22.0441C52.1773 24.2218 51.155 26.3107 48.8884 26.3107H47.5106V18.3552H48.8884C51.2439 18.3552 52.1328 20.0885 52.1773 21.9552V22.0441Z" fill="#C57340" />
                                            <path d="M16.4889 24.3095C16.3111 27.3762 11.2 27.5095 9.15559 26.8428C7.4667 26.3095 6.40003 25.5095 6.40003 25.5095L7.02225 24.5317C7.02225 24.5317 7.8667 25.3317 9.02225 25.5984C11.2445 26.2206 12.9778 25.6428 13.0667 24.6206C13.0667 23.0651 5.8667 22.7984 5.8667 19.6873C5.8667 16.5762 8.53337 16.6206 12.8445 17.4206C14.4889 17.7317 15.9111 18.3984 15.9111 18.3984C15.7778 18.7095 15.5111 19.1095 15.5111 19.1984C15.5111 19.1984 14.6223 18.754 12.9778 18.3984C11.6 18.0873 9.37781 18.354 9.37781 19.4651C9.33337 21.3317 16.5778 21.1095 16.5778 24.2651L16.4889 24.3095Z" fill="#C57340" />
                                            <path d="M42.6222 27.1552H39.3333C37.8666 24.3107 36.5777 21.5107 35.1111 18.6663C34.4444 20.2218 33.7333 21.8218 33.0666 23.4218C32.5333 24.6663 32 25.9107 31.5111 27.1552H30.1333C31.6444 23.9552 33.0666 20.8441 34.6222 17.5996H38.0444C39.5555 20.7107 41.0666 23.9996 42.6222 27.1552Z" fill="#C57340" />
                                            <path d="M27.4665 17.5991H28.6665V27.1547H25.1998C23.2887 24.1325 22.1332 22.5769 19.4221 18.8436C19.4665 20.2214 19.511 21.5991 19.5554 22.9769C19.5998 24.3547 19.6443 25.7325 19.6887 27.1102H18.6221V17.5547H21.911C22.9332 18.9325 23.911 20.3102 24.9332 21.7325C25.911 23.1102 26.8443 24.4436 27.7776 25.7769C27.7332 24.3991 27.6887 23.0214 27.5998 21.6436C27.5554 20.2658 27.511 18.888 27.4665 17.5547V17.5991Z" fill="#C57340" />
                                            <path d="M55.3775 13.0216C54.4441 13.5993 53.733 13.1993 53.733 13.1993C53.9108 12.6216 54.2219 12.5327 54.7997 12.8882L54.8886 12.7993V12.4882C54.2219 12.1771 53.5553 12.3104 53.2441 13.466C53.2441 13.466 53.4219 13.866 53.9997 13.7771L53.333 14.0438L53.2441 14.4438L55.2886 13.6438L55.4664 13.1549L55.3775 13.066V13.0216Z" fill="#FBF5EF" />
                                            <path d="M17.2441 0.933594L9.99963 3.02248L9.51074 3.64471L17.3774 1.51137L17.5552 1.33359L17.2441 0.933594Z" fill="#FBF5EF" />
                                            <path d="M35.6443 1.73242C35.0665 1.73242 34.5332 2.3102 34.5332 2.97687C34.5332 3.64353 35.0665 4.08798 35.6443 4.08798C36.2221 4.08798 36.7554 3.55464 36.7554 2.97687C36.7554 2.39909 36.2221 1.73242 35.6443 1.73242ZM36.1776 3.24353C35.9999 3.42131 35.7776 3.42131 35.6443 3.42131C35.511 3.42131 35.2888 3.42131 35.1554 3.24353C34.9776 3.06576 34.9776 2.84353 34.9776 2.79909C34.9776 2.48798 35.2443 2.13242 35.6443 2.13242C36.0443 2.13242 36.2665 2.53242 36.311 2.79909C36.311 2.79909 36.311 3.06576 36.1776 3.24353Z" fill="#FBF5EF" />
                                            <path d="M54.9333 0.978101H54.7556C54.7556 0.933656 54 1.86699 54 1.86699V11.6892L54.6667 11.467C54.7111 11.2892 54.8889 10.667 54.9778 10.1781C55.1111 9.51143 55.1111 6.71143 54.9778 0.978101H54.9333Z" fill="#FBF5EF" />
                                            <path d="M13.5553 5.6878C13.3331 5.86558 13.1109 6.04336 12.8886 6.26558C12.6664 6.4878 12.4442 6.71003 12.2664 6.93225C12.0886 6.75447 11.9109 6.53225 11.6886 6.31003C11.4664 6.0878 11.2442 5.86558 11.022 5.6878C11.2442 5.51003 11.4664 5.33225 11.6886 5.11003C11.9109 4.8878 12.1331 4.66558 12.2664 4.44336C12.4442 4.66558 12.622 4.8878 12.8886 5.11003C13.1109 5.33225 13.3331 5.55447 13.5553 5.6878Z" fill="#FBF5EF" />
                                            <path d="M52.533 11.7771C52.3996 12.266 51.8663 13.3771 50.5774 13.3771C49.1996 13.3326 48.5774 12.3549 48.4885 10.7993H48.4441C48.3997 11.7326 46.6219 13.466 43.3774 13.466C40.133 13.466 39.6441 12.1771 39.6441 10.4882H39.5108C37.8663 13.6882 32.3108 13.5104 22.8885 13.466H22.6663C18.9774 13.466 15.8219 13.5993 15.1997 10.4882H15.0663C14.4885 12.666 13.1108 13.466 10.7552 13.466C7.91076 13.4215 7.42188 10.8438 7.42188 9.73264V1.77708L8.17743 0.84375L8.35521 1.02153V7.77708C8.35521 7.77708 8.22188 10.5326 10.7108 10.5326C13.1997 10.5326 13.8219 10.5326 14.7997 9.24375C14.8441 9.11042 14.3997 7.82153 14.3997 7.6882H15.5997C16.1774 10.1771 16.3552 10.5326 21.5997 10.5326C25.6441 10.5326 37.733 10.7549 39.5108 8.8882C39.733 8.39931 39.9996 7.6882 39.9996 7.6882H40.6663C40.6663 9.42153 42.2219 10.5326 43.9552 10.5326C45.6885 10.5326 47.6885 10.3993 48.2663 9.42153L48.0441 7.99931L48.8885 7.33264L49.0219 9.24375C49.0663 10.4882 50.9774 10.8438 51.8219 9.91042C51.7774 8.66597 50.8885 7.33264 50.8885 7.33264L51.7774 5.91042H52.0885C53.0219 8.22153 52.8885 10.3549 52.6219 11.7771H52.5774H52.533Z" fill="#FBF5EF" />
                                            <path d="M4.39998 4.93312C5.33331 6.04423 6.75553 7.95534 6.31109 12.7109C6.17775 13.0665 4.53331 13.4664 3.0222 13.4664C-0.533356 13.4664 0.6222 9.11089 0.6222 9.11089H0.933311C0.933311 11.0665 4.44442 10.5331 5.28887 9.82201C4.93331 8.22201 3.33331 7.19978 3.33331 7.19978L4.13331 5.06645L4.44442 4.88867L4.39998 4.93312Z" fill="#FBF5EF" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_3149_48707">
                                                <rect width="55.1111" height="26.6667" fill="white" transform="translate(0.444336 0.666016)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <div className="flex flex-col justify-center items-center w-[122px]">
                                    <div className="flex items-center gap-1">
                                        <p className="text-[#D3D9E1] text-right text-[20px] font-medium leading-[140%]">
                                            K
                                        </p>
                                        <p className="text-[#D3D9E1] text-right text-[19px] font-bold leading-[140%]">
                                            12.2
                                        </p>
                                    </div>
                                    <p className="text-[#AAB7CB] text-center text-[12px] font-normal leading-[120%]">
                                        عقار سكني
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col items-center gap-1 self-stretch">
                                <p className="text-text-main text-[20px] font-normal leading-[140%]">
                                    المجمع الذهبي للأبراج.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-end gap-2 pb-3 self-stretch border-b border-white/10">
                            <div className="time flex items-center gap-2 self-stretch">
                                <div
                                    className="flex items-center gap-2 flex-1"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M4.48779 9.66406H20.5293" stroke="white" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M16.1426 3V5.96174" stroke="white" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M8.87207 3V5.96174" stroke="white" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M16.3184 4.42188H8.69804C6.05446 4.42188 4.4043 5.89399 4.4043 8.59984V16.7456C4.4043 19.4943 6.05446 21.0004 8.69804 21.0004H16.3106C18.962 21.0004 20.6044 19.5205 20.6044 16.8137V8.59984C20.6121 5.89399 18.9698 4.42188 16.3184 4.42188Z" stroke="white" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M8.49414 13.3711H8.50414" stroke="white" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M8.49414 16.8477H8.50414" stroke="white" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M12.5137 13.3711H12.5237" stroke="white" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M12.5137 16.8477H12.5237" stroke="white" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M16.5234 13.3711H16.5334" stroke="white" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M16.5234 16.8477H16.5334" stroke="white" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <p className="text-text-main text-right text-[14px] font-light leading-[140%]">
                                        الأحد  -  الخميس
                                    </p>
                                </div> <div className="flex  items-center gap-2 flex-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M21.25 12C21.25 17.109 17.109 21.25 12 21.25C6.891 21.25 2.75 17.109 2.75 12C2.75 6.891 6.891 2.75 12 2.75C17.109 2.75 21.25 6.891 21.25 12Z" stroke="white" stroke-width="0.9" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M15.4316 14.9417L11.6616 12.6927V7.8457" stroke="white" stroke-width="0.9" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <p className="text-text-main text-right text-[14px] font-light leading-[140%]">8:00 ص  - 6:00 م</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 self-stretch">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5 10.5005C14.5 9.11924 13.3808 8 12.0005 8C10.6192 8 9.5 9.11924 9.5 10.5005C9.5 11.8808 10.6192 13 12.0005 13C13.3808 13 14.5 11.8808 14.5 10.5005Z" stroke="white" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9995 21C10.801 21 4.5 15.8984 4.5 10.5633C4.5 6.38664 7.8571 3 11.9995 3C16.1419 3 19.5 6.38664 19.5 10.5633C19.5 15.8984 13.198 21 11.9995 21Z" stroke="white" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <p className="text-text-main text-right text-[14px] font-light leading-[140%]">
                                    بغداد/اليرموك/شارع نادي الصيد
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-start gap-4 self-stretch">
                        <div className="flex h-10 px-6 py-[11px] justify-center items-center gap-2 flex-[1_0_0] rounded-[16px] bg-opacity-whaite">
                            <p className='text-[#08182F] text-[14px] font-medium leading-[126%]'>الغاء المتابعة</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M19 7.1875L9.375 16.8125L5 12.4375" stroke="#08182F" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <div className="flex h-10 px-8 py-[11px] justify-center items-center gap-2 rounded-[16px] border border-[rgba(255,255,255,0.11)]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M14.353 2.5C18.054 2.911 20.978 5.831 21.393 9.532" stroke="#FBF5EF" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M14.353 6.04297C16.124 6.38697 17.508 7.77197 17.853 9.54297" stroke="#FBF5EF" stroke-linecap="round" stroke-linejoin="round" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.0315 12.4724C15.0205 16.4604 15.9254 11.8467 18.4653 14.3848C20.9138 16.8328 22.3222 17.3232 19.2188 20.4247C18.8302 20.737 16.3613 24.4943 7.68447 15.8197C-0.993406 7.144 2.76157 4.67244 3.07394 4.28395C6.18377 1.17385 6.66682 2.58938 9.11539 5.03733C11.6541 7.5765 7.04253 8.48441 11.0315 12.4724Z" stroke="#FBF5EF" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <div className="flex h-10 px-8 py-[11px] justify-center items-center gap-2 rounded-[16px] border border-[rgba(255,255,255,0.11)]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M7.94939 20.0368C7.73048 19.9268 7.49016 19.8889 7.25179 19.9453C6.44132 20.136 5.13368 20.462 4.18213 20.7013C3.64117 20.8375 3.14886 20.3559 3.27437 19.813C3.5108 18.7875 3.83868 17.3612 3.99435 16.648C4.043 16.4262 4.01284 16.1975 3.91652 15.9922C3.34637 14.7712 3 13.4198 3 12.0002C3 6.48846 8.02139 2.09267 13.7151 3.16097C17.2926 3.8323 20.1677 6.70834 20.839 10.2849C21.9073 15.9786 17.5115 21 11.9998 21C10.59 21 9.18115 20.6595 7.94939 20.0368Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M8.60085 8.46082C7.2144 9.85408 8.26518 12.0675 10.1138 13.9161C11.9624 15.7648 14.1408 16.7805 15.5341 15.3941L15.6625 15.2656C16.221 14.7081 16.1393 13.7809 15.4923 13.3295C15.2831 13.1845 15.0642 13.0308 14.8316 12.8683C14.3286 12.5151 13.6407 12.5696 13.2058 13.0025L12.9704 13.2361C11.9575 12.6328 11.4438 12.0529 10.7598 11.0255L10.9933 10.7901C11.4253 10.3542 11.4798 9.6663 11.1276 9.16329C10.9641 8.93075 10.8114 8.71184 10.6655 8.50266C10.215 7.85565 9.28775 7.77489 8.72928 8.33239L8.60085 8.46082Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col w-full gap-[32px] overflow-y-auto max-h-[calc(99.3vh-110px)] pb-4'>

                <AspectRatio ratio={22 / 9} >
                    <div className='flex flex-col justify-between p-[24px] h-full  relative z-30'>
                        <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(0,0,0,0)_44%,_rgba(5,15,30,0.64)_58.5%,_#08182F_100%)]">
                        </div>
                        <div className='flex w-[48px] backdrop-blur-[65px] relative z-20 p-3 items-center gap-2 rounded-2xl border border-[rgba(247,245,245,0.15)] bg-[rgba(0,0,0,0.16)]'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M14.0459 5.57422L20.4992 11.9998L14.0459 18.4265" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path opacity="0.4" d="M20.5 12H4.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg></div>
                        <div className='relative z-20 flex flex-col gao-[32px] self-stretch'>
                            <div className='flex flex-col gap-2'>
                                <div className='flex flex-col justify-center gap-1'>
                                    <p className='text-text-main text-[28px]'>مدينة الزهراء </p>
                                </div> <div className="flex flex-col z-20 gap-2 w-[203.5px]">
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
                            </div>
                        </div>
                    </div>

                    <Image
                        src="/images/company.png"
                        fill
                        alt="صورة تفصيلية للمجمع السكني"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority={true}
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                        className="object-cover object-center bg-center rounded-2xl"
                    />
                </AspectRatio>
                <div className="flex flex-col gap-4 self-stretch">
                    <p className='text-white typography-title-24-light'>
                        عقارات مشابهه
                    </p>
                    <div className="flex items-start content-start gap-6 self-stretch flex-wrap">
                        <CardProperty />
                        <CardProperty />
                    </div>
                </div>
            </div>
        </div>
    )
}
function CardProperty() {
    const [isFavorite, setIsFavorite] = useState(false)
    return (
        <div
            className="flex h-[347px] min-w-[320px] relative overflow-hidden max-w-[536px] p-[16px] justify-end items-end gap-[8px] flex-1 rounded-[16px] border border-stroke-border bg-[linear-gradient(180deg,rgba(8,24,47,0)_0%,var(--opacity-secondary-90,rgba(8,24,47,0.81))_86.5%),url('/images/company.png')] bg-[lightgray] bg-cover bg-no-repeat bg-center">
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
export default page