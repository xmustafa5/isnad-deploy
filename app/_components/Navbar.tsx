'use client'
import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { IsnadSvg } from '@/public/svg/login';
import Link from 'next/link';
export default function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    // Close drawer when clicking outside or pressing ESC
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const drawer = document.getElementById('mobile-drawer');
            const hamburger = document.getElementById('hamburger-button');

            if (isOpen && drawer && !drawer.contains(event.target as Node) &&
                hamburger && !hamburger.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        const handleEscapeKey = (event: KeyboardEvent) => {
            if (event.key === 'Escape' && isOpen) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
            document.addEventListener('keydown', handleEscapeKey);
            // Prevent body scroll when drawer is open
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleEscapeKey);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    // Close drawer when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    return (
        <div className='flex pt-4 pb-2 px-4 md:px-16 justify-between items-center relative'>
            <div className='account xl:flex hidden items-center gap-6 self-stretch'>
                <div className='flex items-center gap-2'>
                    <button className='flex py-3 px-6 justify-center items-center'>
                        <p className="text-[#B8C6E3] text-right  text-[14px] font-light leading-[140%]">تسجيل</p>
                    </button>
                    <button className='rounded-[32px] flex py-2.5 border border-stroke-border px-6 justify-center items-center'>
                        <p className="text-[#B8C6E3] whitespace-nowrap text-right  text-[14px] font-light leading-[140%]">أنشاء حساب</p>
                    </button>
                </div>
                <LanguageSwitcher />
            </div>
            <div className=" navbar  xl:flex hidden h-12 p-1 items-center gap-4 rounded-[40px] bg-[rgba(8,24,47,0.10)] backdrop-blur-[68.5px]">
                <NavbarButton text="الرئيسية" pathname={pathname} path="/ar" />
                <NavbarButton text="المجمعات السكنية" pathname={pathname} path="/ar/residential-complexes" />
                <NavbarButton text="العقارات العامة" pathname={pathname} path="/ar/public-properties" />
            </div>
            <div
                id="hamburger-button"
                className="flex xl:hidden rounded-[4px] border border-white/10 bg-white/5 backdrop-blur-[8.5px] items-center gap-2 px-3 py-[11px] cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
            >
                <svg xmlns="http://www.w3.org/2000/svg" className='size-4 md:size-6' viewBox="0 0 24 25" fill="none">
                    <path d="M4.32007 19.4751H19.6801" stroke="white" stroke-width="0.96" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M4.32007 6.03516H19.6801" stroke="white" stroke-width="0.96" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M4.32007 12.7549H19.6801" stroke="white" stroke-width="0.96" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </div>
            <div className='language and currency flex h-[60px] items-center gap-[56px]'>
                <SelectCurrency />
                {IsnadSvg}
            </div>
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 xl:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}
            <div
                id="mobile-drawer"
                className={`fixed top-0 pt-[56px] right-0 h-full w-80 max-w-[85vw] bg-slate-900/95 backdrop-blur-lg border-r border-white/10 z-50 xl:hidden transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className="flex flex-col px-4 gap-[64px]">
                    <div className=' flex justify-between items-center'>
                        <div className='flex gap-2 items-center'>

                            <button
                                onClick={() => setIsOpen(false)}
                                className=" rounded-[4px] border border-white/10 bg-white/5 backdrop-blur-[8.5px] items-center gap-2 px-3 py-[11px] cursor-pointer"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className='size-4 md:size-6' viewBox="0 0 24 24" fill="none">
                                    <path d="M6.56912 6.54443L17.4303 17.4056" stroke="white" stroke-width="0.96" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M6.56912 16.9658L17.4303 6.10466" stroke="white" stroke-width="0.96" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </button>
                            <p className="text-white text-center text-[14px] font-light leading-[140%]"
                            >اغلاق</p>
                        </div>
                        {IsnadSvg}
                    </div>
                    <div className="space-y-2">
                        <NavbarButtonMobile text="الرئيسية" pathname={pathname} path="/ar" />
                        <NavbarButtonMobile text="المجمعات السكنية" pathname={pathname} path="/ar/residential-complexes" />
                        <NavbarButtonMobile text="العقارات العامة" pathname={pathname} path="/ar/public-properties" />
                    </div>
                    {/* <div className="border-t border-white/10 pt-4 space-y-2">
                        <button className="w-full flex py-3 px-4 justify-center items-center rounded-lg hover:bg-white/5 transition-colors">
                            <p className="text-[#B8C6E3] text-[14px] font-light">تسجيل</p>
                        </button>
                        <button className="w-full rounded-lg flex py-2.5 border border-stroke-border px-4 justify-center items-center hover:bg-white/5 transition-colors">
                            <p className="text-[#B8C6E3] text-[14px] font-light">أنشاء حساب</p>
                        </button>
                    </div> */}
                    <div className="border-t border-white/10 pt-4">
                        <LanguageSwitcher />
                    </div>
                </div>
            </div>
        </div>
    )
}
function SelectCurrency() {
    const [isOpen, setIsOpen] = useState(false);
    const [currency, setCurrency] = useState("IQD");
    return (
        <div className='relative xl:flex hidden select-none'>
            <div onClick={() => setIsOpen(!isOpen)} className="inline-flex cursor-pointer px-4 py-2 justify-center items-center gap-1 rounded-[24px] border border-[rgba(255,255,255,0.10)] bg-[rgba(255,255,255,0.05)] backdrop-blur-[12px]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M5.25 8.5L12.25 15.5" stroke="#B8C6E3" stroke-width="1.5" stroke-linecap="square" />
                    <path opacity="0.4" d="M12.25 15.5L19.25 8.5" stroke="#B8C6E3" stroke-width="1.5" stroke-linecap="square" />
                </svg>
                <p className='typography-body-14-medium text-white'>IQD</p>
            </div>
            {isOpen && (
                <div className="flex flex-col w-[258px] px-4 py-2 items-end gap-2 top-10 z-30 absolute right-[-172px] mt-1 rounded-[16px] bg-[rgba(255,255,255,0.05)] backdrop-blur-[65px]">
                    <OpetionSelectCurrency isActive={currency === "IQD"} props={{ onClick: () => setCurrency("IQD") }}>
                        دولار امريكيUSD
                    </OpetionSelectCurrency>
                    <OpetionSelectCurrency isActive={currency === "CD"} props={{ onClick: () => setCurrency("CD") }}>
                        دينار عراقي IQD
                    </OpetionSelectCurrency>
                </div>
            )
            }
        </div >

    )
}
function OpetionSelectCurrency({ isActive, children, props }: { isActive: boolean, children: React.ReactNode, props?: any }) {
    return (
        <div {...props} className={cn("flex h-12 px-6 py-[13px] relative justify-center items-center gap-2 self-stretch rounded-[12px] border border-[rgba(245,246,249,0.18)] bg-[rgba(255,255,255,0.05)]", isActive ? 'border-white' : '')}>
            {isActive &&
                <div className="flex p-1 items-center gap-2 absolute right-[-7.5px] top-[-4px] rounded-[40px] border border-[#C57340] bg-white">
                    <div className="flex w-[18px] h-[18px] p-[2.857px] items-center gap-[5.714px] rounded-[28.571px] bg-[#C57340]">
                    </div>
                </div>
            }
            <p className='typography-body-14-light text-text-whaite'>{children}</p>
        </div>
    )
}
const NavbarButtonMobile = ({ text, pathname, path }: { text: string, pathname: string, path: string }) => {
    return (
        <Link href={path || "/"} className={cn('flex w-full cursor-pointer hover:bg-[rgba(255,255,255,0.05)] p-2  items-center justify-between typography-body-14-light text-text-gray2', {
            'text-white border-stroke-border bg-[rgba(255,255,255,0.05)]': pathname === path,
            'text-[#B8C6E3]': pathname !== path
        })}>{text} {<svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
            <path d="M15.5 5.75L8.5 12.75" stroke="#B8C6E3" stroke-width="1.5" stroke-linecap="square" />
            <path opacity="0.4" d="M8.5 12.75L15.5 19.75" stroke="#B8C6E3" stroke-width="1.5" stroke-linecap="square" />
        </svg>
            }</Link>
    )
}
function NavbarButton({ text, pathname, path }: { text: string, pathname: string, path: string }) {
    return (
        <Link href={path || "/"} className={cn('flex cursor-pointer py-[11px] border border-transparent px-4 items-center justify-center gap-1 rounded-[48px] text-[12px] text-[#B8C6E3] text-right font-[300] leading-[1.4]', {
            'text-white border-stroke-border bg-[rgba(255,255,255,0.05)]': pathname === path,
            'text-[#B8C6E3]': pathname !== path
        })}>{text}</Link>
    )
}
function LanguageSwitcher() {
    const { i18n } = useTranslation();
    const router = useRouter();
    const pathname = usePathname();

    function handleLanguageChange(language: string) {
        i18n.changeLanguage(language);
        const newPathname = pathname.replace(/^\/[^\/]+/, `/${language}`);
        router.push(newPathname);
    }
    return (
        <div className='flex p-1 items-center gap-1 rounded-[40px] bg-[rgba(249,249,251,0.02)] backdrop-blur-md'>
            <button className={cn('bg-white rounded-3xl flex py-2 px-3 items-center justify-center gap-1 self-stretch typography-body-16-regular', {
                'bg-white': i18n.language === 'en',
                'bg-transparent text-[#B8C6E3]': i18n.language === 'ar'
            })} onClick={() => handleLanguageChange('en')} >
                EN
            </button>
            <button className={cn('bg-white rounded-3xl flex py-2 px-3 items-center justify-center gap-1 self-stretch typography-body-16-regular', {
                'bg-white': i18n.language === 'ar',
                'bg-transparent text-[#B8C6E3]': i18n.language === 'en'
            })} onClick={() => handleLanguageChange('ar')} >
                AR
            </button>
        </div>
    )
}
// function MobileNavButton({ text, pathname, path, onClick }: {
//     text: string,
//     pathname: string,
//     path: string,
//     onClick: () => void
// }) {
//     return (
//         <button
//             className={cn(
//                 'w-full flex py-3 px-4 items-center justify-start gap-2 rounded-lg text-[14px] text-right font-light transition-colors',
//                 {
//                     'text-white bg-white/10 border border-stroke-border': pathname === path,
//                     'text-[#B8C6E3] hover:bg-white/5': pathname !== path
//                 }
//             )}
//             onClick={onClick}
//         >
//             {text}
//         </button>
//     )
// }