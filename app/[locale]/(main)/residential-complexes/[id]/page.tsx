'use client';
import { AspectRatio } from '@/app/_components/aspect-ratio';
import { Button } from '@/app/_components/Button'
import Image from 'next/image'
import Link from 'next/link';
import React, { useState } from 'react'

export default function page({ params }: { params: { id: string } }) {
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
                        <div className="flex justify-end items-start content-start gap-6 self-stretch flex-wrap">
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
        <div
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


        </div >
    )
}