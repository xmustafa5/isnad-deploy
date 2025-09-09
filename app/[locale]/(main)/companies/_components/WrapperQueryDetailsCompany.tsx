'use client';
import { getCompanyById } from '@/actions/componies';
import { Button } from '@/app/_components/Button';
import Department from '@/app/_components/Department';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function WrapperQueryDetailsCompany({ id, locale = 'ar' }: { id: string; locale: 'ar' | 'en' }) {
    const { data, isLoading } = useQuery<any>({
        queryKey: ['company-details', id],
        queryFn: () => getCompanyById(id),
    });

    const company = data?.item;
    const { t } = useTranslation('home_transtion');
    const [showBranchesModal, setShowBranchesModal] = useState(false);

    if (isLoading) {
        return (
            <div className='flex justify-center items-center h-96'>
                <div className="text-text-gray1">جاري التحميل...</div>
            </div>
        );
    }

    if (!company) {
        return (
            <div className='flex justify-center items-center h-96'>
                <div className="text-red-500">حدث خطأ في تحميل البيانات</div>
            </div>
        );
    }

    return (
        <div className='flex gap-8 xl:flex-row flex-col'>
            {/* Left Sidebar - Company Info Card */}
            <div
                className="rounded-[16px] h-fit bg-cover bg-no-repeat bg-center pt-[152px] xl:w-[400px] w-full"
                style={{
                    backgroundImage: `
  linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.26) 30.77%,
    rgba(5, 15, 30, 0.90) 58.5%,
    #08182F 100%
  ),
  url(${company.background_img || '/fallback.jpg'})
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
                                    <img src={company.logo || "/images/company-icon.png"} alt="company-icon" className="w-full h-full object-cover" />
                                </div>
                                <div className="flex flex-col justify-center items-center w-[122px]">
                                </div>
                            </div>
                            <div className="flex flex-col items-center gap-1 self-stretch">
                                <p className="text-text-main text-[20px] font-normal leading-[140%]">
                                    {company.name?.[locale] || company.name?.en}
                                </p>
                            </div>
                        </div>
                        
                        {/* Show Branches Button */}
                        {company.branches?.length > 0 && (
                            <div className="flex justify-center w-full pb-3">
                                <button
                                    onClick={() => setShowBranchesModal(true)}
                                    className="flex items-center gap-2 px-4 py-2 bg-[rgba(255,255,255,0.1)] backdrop-blur-sm border border-[rgba(255,255,255,0.2)] rounded-[12px] hover:bg-[rgba(255,255,255,0.15)] transition-colors"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                                        <path d="M3 21h18" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M5 21V7l8-4v18" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M19 21V11l-6-4" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    <span className="text-text-main text-[14px] font-medium">عرض الفروع</span>
                                    <div className="bg-[rgba(255,255,255,0.2)] rounded-full px-2 py-1">
                                        <span className="text-text-main text-[12px]">{company.branches.length}</span>
                                    </div>
                                </button>
                            </div>
                        )}
                        
                        <div className="flex flex-col justify-center items-end gap-2 pb-3 self-stretch border-b border-white/10">
                            {company.governorate && (
                                <div className="flex items-center gap-2 self-stretch">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M14.5 10.5005C14.5 9.11924 13.3808 8 12.0005 8C10.6192 8 9.5 9.11924 9.5 10.5005C9.5 11.8808 10.6192 13 12.0005 13C13.3808 13 14.5 11.8808 14.5 10.5005Z" stroke="white" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M11.9995 21C10.801 21 4.5 15.8984 4.5 10.5633C4.5 6.38664 7.8571 3 11.9995 3C16.1419 3 19.5 6.38664 19.5 10.5633C19.5 15.8984 13.198 21 11.9995 21Z" stroke="white" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <p className="text-text-main text-right text-[14px] font-light leading-[140%]">
                                        {company.governorate?.name?.[locale] || company.governorate?.name?.en}
                                    </p>
                                </div>
                            )}
                            {company.branches?.length > 0 && (
                                <div className="flex items-center gap-2 self-stretch">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M3 21h18" stroke="white" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M5 21V7l8-4v18" stroke="white" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M19 21V11l-6-4" stroke="white" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    <p className="text-text-main text-right text-[14px] font-light leading-[140%]">
                                        {company.branches.length} فرع
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                {/* Contact Buttons */}
                <div className="flex items-start gap-4 self-stretch px-6 pb-4">
                    <div className="flex items-start gap-4 self-stretch w-full">
                        {company.phones?.map((phone: any) => {
                            if (phone.type?.value === 0) {
                                return (
                                    <button
                                        key={phone.id}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            window.open(`tel:${phone.number}`, "_self");
                                        }}
                                        className="flex w-full cursor-pointer h-10 px-8 py-[11px] justify-center items-center gap-2 rounded-[16px] border border-[rgba(255,255,255,0.11)]"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="white" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </button>
                                );
                            }
                            if (phone.type?.value === 1) {
                                const countryCode = "964";
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
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" stroke="white" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </button>
                                );
                            }
                            return null;
                        })}
                    </div>
                </div>
            </div>

            {/* Right Content Area */}
            <div className="flex flex-col gap-8 flex-1">
                {/* Back Button */}
                <div className="flex justify-between items-center self-stretch">
                    <Link
                        href={`/companies`}
                        className="flex items-center gap-2 w-[48px] p-3 rounded-[16px] border border-white/15 bg-black/20 backdrop-blur"
                        style={{ backdropFilter: "blur(65px)" }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M14.0459 5.57422L20.4992 11.9998L14.0459 18.4265" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path opacity="0.4" d="M20.5 12H4.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link>
                </div>

                {/* Company Description */}
                {company.description && (
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
                                <p className='text-text-gray1 typography-body-14-medium'>الوصف</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M15.1895 12.4121C15.1895 11.8598 15.6372 11.4121 16.1895 11.4121H16.1985C16.7508 11.4121 17.1985 11.8598 17.1985 12.4121C17.1985 12.9644 16.7508 13.4121 16.1985 13.4121H16.1895C15.6372 13.4121 15.1895 12.9644 15.1895 12.4121Z" fill="white" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M11.1807 12.4121C11.1807 11.8598 11.6284 11.4121 12.1807 11.4121H12.1897C12.742 11.4121 13.1897 11.8598 13.1897 12.4121C13.1897 12.9644 12.742 13.4121 12.1897 13.4121H12.1807C11.6284 13.4121 11.1807 12.9644 11.1807 12.4121Z" fill="white" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M7.17188 12.4121C7.17188 11.8598 7.61958 11.4121 8.17187 11.4121H8.18088C8.73316 11.4121 9.18088 11.8598 9.18088 12.4121C9.18088 12.9644 8.73316 13.4121 8.18088 13.4121H8.17187C7.61958 13.4121 7.17188 12.9644 7.17188 12.4121Z" fill="white" />
                                </svg>
                            </div>
                            <p className='overflow-hidden text-text-gray3 text-ellipsis typography-body-14-light h-fit self-stretch'>
                                {company.description?.[locale] || company.description?.en || 'لا يوجد وصف متاح'}
                            </p>
                        </div>
                    </div>
                )}

                {/* Branches Section */}
                {company.branches?.length > 0 && (
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
                                <p className='text-text-gray1 typography-body-14-medium'>الفروع</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M3 21h18" stroke="white" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M5 21V7l8-4v18" stroke="white" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M19 21V11l-6-4" stroke="white" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <div className="flex flex-wrap gap-2 w-full">
                                {company.branches.map((branch: any) => (
                                    <a
                                        href={branch.location?.startsWith("http") ? branch.location : `https://${branch.location}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        key={branch.id}
                                        className="px-4 py-2 border border-white/10 rounded-[8px] cursor-pointer hover:border-white/20 transition-colors"
                                    >
                                        <p className="text-text-main text-[14px]">{branch.governorate?.name?.[locale]}</p>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* Departments Section */}
                {company.departments?.length > 0 && (
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
                                <p className='text-text-gray1 typography-body-14-medium'>الأقسام والخصومات</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" stroke="white" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"/>
                                    <line x1="7" y1="7" x2="7.01" y2="7" stroke="white" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                                {company.departments.map((department: any) => (
                                    <Department key={department.id} department={department} locale={locale} />
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* Social Media Links */}
                {company.links?.length > 0 && (
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
                                <p className='text-text-gray1 typography-body-14-medium'>حسابات السوشيل ميديا</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" stroke="white" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <div className="flex flex-wrap gap-3 w-full">
                                {company.links.map((link: any) => (
                                    <Link
                                        key={link.id}
                                        href={`http://${link.url}`}
                                        className="w-[60px] h-[60px] relative border border-[rgba(238,238,238,0.1)] rounded-[12px] overflow-hidden hover:border-white/20 transition-colors"
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
                    </div>
                )}
            </div>
            
            {/* Branches Modal */}
            {showBranchesModal && (
                <div 
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                    onClick={() => setShowBranchesModal(false)}
                >
                    <div 
                        className="bg-[#1a2332] rounded-[16px] border border-[rgba(255,255,255,0.1)] w-full max-w-[400px] max-h-[80vh] overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Modal Header */}
                        <div className="flex items-center justify-between p-4 border-b border-[rgba(255,255,255,0.1)]">
                            <h3 className="text-white text-[18px] font-medium">فروع الشركة</h3>
                            <button
                                onClick={() => setShowBranchesModal(false)}
                                className="flex items-center justify-center w-8 h-8 rounded-full bg-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.2)] transition-colors"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none">
                                    <path d="M18 6L6 18" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M6 6l12 12" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </button>
                        </div>
                        
                        {/* Modal Content */}
                        <div className="overflow-y-auto max-h-[60vh]">
                            {company.branches?.map((branch: any, index: number) => (
                                <div key={branch.id} className="p-4 border-b border-[rgba(255,255,255,0.05)] last:border-b-0">
                                    <div className="flex items-start gap-3">
                                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[rgba(255,255,255,0.1)] mt-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M14.5 10.5005C14.5 9.11924 13.3808 8 12.0005 8C10.6192 8 9.5 9.11924 9.5 10.5005C9.5 11.8808 10.6192 13 12.0005 13C13.3808 13 14.5 11.8808 14.5 10.5005Z" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                                                <path fillRule="evenodd" clipRule="evenodd" d="M11.9995 21C10.801 21 4.5 15.8984 4.5 10.5633C4.5 6.38664 7.8571 3 11.9995 3C16.1419 3 19.5 6.38664 19.5 10.5633C19.5 15.8984 13.198 21 11.9995 21Z" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-start justify-between">
                                                <div>
                                                    <p className="text-white text-[16px] font-medium">
                                                        {branch.governorate?.name?.[locale] || branch.governorate?.name?.en}
                                                    </p>
                                                    {branch.address && (
                                                        <p className="text-text-gray1 text-[14px] mt-1">
                                                            {branch.address}
                                                        </p>
                                                    )}
                                                </div>
                                                <div className="flex items-center gap-1 bg-[rgba(255,255,255,0.1)] rounded-[8px] px-2 py-1">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none">
                                                        <path d="M9 11H15" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                                                    </svg>
                                                    <span className="text-white text-[12px]">{company.branches.length - index} فرع</span>
                                                </div>
                                            </div>
                                            {branch.location && (
                                                <a
                                                    href={branch.location?.startsWith("http") ? branch.location : `https://${branch.location}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-1 mt-2 text-blue-400 hover:text-blue-300 transition-colors text-[14px]"
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none">
                                                        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                    </svg>
                                                    عرض الموقع
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}