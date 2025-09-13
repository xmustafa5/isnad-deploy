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
    const [expandedBranches, setExpandedBranches] = useState<Set<number>>(new Set());

    const toggleBranchExpansion = (branchIndex: number) => {
        const newExpanded = new Set(expandedBranches);
        if (newExpanded.has(branchIndex)) {
            newExpanded.delete(branchIndex);
        } else {
            newExpanded.add(branchIndex);
        }
        setExpandedBranches(newExpanded);
    };

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
                className="rounded-[16px] border border-[#212F43] h-fit bg-cover bg-no-repeat bg-center pt-[152px] xl:w-[400px] w-full"
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
                            <div className="flex justify-center w-full gap-3 pb-3">
                                <button
                                    onClick={() => setShowBranchesModal(true)}
                                    className="flex w-1/2 items-center justify-center gap-2 px-4 py-2 bg-[rgba(255,255,255,0.1)] backdrop-blur-sm border border-[rgba(255,255,255,0.2)] rounded-[12px] hover:bg-[rgba(255,255,255,0.15)] transition-colors"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M8.28197 3H16.7163C19.6643 3 21.4993 5.08111 21.4993 8.02618V15.9731C21.4993 18.9182 19.6643 20.9993 16.7154 20.9993H8.28197C5.33398 20.9993 3.5 18.9182 3.5 15.9731V8.02618C3.5 5.08111 5.34274 3 8.28197 3Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M12.7158 13.8103C12.7158 15.7153 14.9652 17.5357 15.3933 17.5357C15.8214 17.5357 18.0708 15.7153 18.0708 13.8103C18.0708 12.3315 16.8722 11.1328 15.3933 11.1328C13.9145 11.1328 12.7158 12.3315 12.7158 13.8103Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M15.3936 13.7952V13.7852" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                                        <path opacity="0.4" d="M3.55469 8.21094H21.4898M9.26172 8.31641V21.0012" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <span className="text-[#B8C6E3] text-[14px] font-medium">عرض الفروع</span>

                                </button>
                                <Button className="w-1/2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.6303 12.8742C15.3365 16.5795 16.4384 12.0313 18.7983 14.3893C21.0738 16.6648 22.3813 17.1197 19.4996 20.0024C19.1378 20.2915 16.8438 23.7833 8.78158 15.723C0.719323 7.66267 4.20727 5.36582 4.49729 5.005C7.38678 2.11551 7.8349 3.43077 10.1104 5.70531C12.4693 8.06423 7.92414 9.16901 11.6303 12.8742Z" stroke="#EEF5FF" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M14.3613 5.03981V3M18.0105 6.48926L19.4528 5.04694M19.4597 10.1383H21.4996" stroke="#EEF5FF" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    اتصال
                                </Button>
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
                            {/* {company.branches?.length > 0 && (
                                <div className="flex items-center gap-2 self-stretch">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M3 21h18" stroke="white" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M5 21V7l8-4v18" stroke="white" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M19 21V11l-6-4" stroke="white" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <p className="text-text-main text-right text-[14px] font-light leading-[140%]">
                                        {company.branches.length} فرع
                                    </p>
                                </div>
                            )} */}
                        </div>
                    </div>
                </div>
                {/* Contact Buttons */}
                <div className="flex items-start gap-4 self-stretch px-6 pb-4">
                    <div className="flex items-start gap-4 self-stretch w-full">
                        {company?.links?.map((itemLink) => (
                            <div key={itemLink.id} className="flex relative flex-col items-center px-2 py-1 gap-2 flex-[1_0_0]">
                                <div className="flex items-center  gap-2">
                                    {itemLink?.icon?.image ? (
                                        <div className="w-6 h-6">
                                            <img
                                                src={itemLink.icon.image}
                                                alt="icon"
                                                className="w-full h-full object-contain filter brightness-0 invert"
                                                style={{
                                                    filter: 'brightness(0) invert(1)',
                                                }}
                                            />
                                        </div>
                                    ) : (
                                        <div className="w-6 h-6 bg-white/20 rounded"></div>
                                    )}
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>

            {/* Right Content Area */}
            <div className="flex flex-col gap-8 flex-1">
                {/* Back Button */}
                {/* <div className="flex justify-between items-center self-stretch">
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
                </div> */}

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
                {/* {company.branches?.length > 0 && (
                    <div
                        className="flex flex-col justify-center items-end gap-4 self-stretch px-6 py-4 rounded-[16px] border"
                        style={{
                            borderColor: "var(--stroke-border, #212F43)",
                            backgroundColor: "var(--opacomplex-white-5, rgba(255, 255, 255, 0.05))",
                            backdropFilter: "blur(9px)",
                        }}
                    >
                        {/* <div className="flex flex-col items-end gap-[7px] self-stretch rounded-[16px]">
                            <div className="flex items-center gap-2 w-full">
                                <p className='text-text-gray1 typography-body-14-medium'>الفروع</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M3 21h18" stroke="white" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M5 21V7l8-4v18" stroke="white" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M19 21V11l-6-4" stroke="white" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
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
                        </div> */}
                {/* </div>
                )} */}

                {/* Departments Section */}
                {company.departments?.length > 0 && (
                    <div
                        className="flex flex-col justify-center items-end gap-4 self-stretch rounded-[16px] "

                    >
                        <div className="flex flex-col items-end gap-[7px] self-stretch rounded-[16px]">
                            <div className="flex items-center gap-2 w-full">
                                <p className='text-white text-[24px] '>الأقسام والخصومات</p>

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

            </div>

            {/* Branches Modal */}
            {
                showBranchesModal && (
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
                                        <path d="M18 6L6 18" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M6 6l12 12" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </div>

                            {/* Modal Content */}
                            <div className="overflow-y-auto max-h-[60vh]">
                                {company.branches?.map((branch: any, index: number) => (
                                    <div key={branch.id} className="p-4 border-b border-[rgba(255,255,255,0.05)] last:border-b-0">
                                        <div className="flex items-start gap-3">
                                            <div className="flex items-center p-2 gap-2 rounded-[16px] bg-white/10">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path opacity="0.4" fillRule="evenodd" clipRule="evenodd" d="M14.7368 10.8064C14.7368 9.43255 13.6236 8.31934 12.2507 8.31934C10.8769 8.31934 9.76367 9.43255 9.76367 10.8064C9.76367 12.1792 10.8769 13.2924 12.2507 13.2924C13.6236 13.2924 14.7368 12.1792 14.7368 10.8064Z" stroke="#FBF5EF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M12.2498 21.2499C12.2498 21.2499 4.97391 16.5107 4.79058 10.5972C4.66185 6.44502 8.12963 2.75 12.2498 2.75C16.3699 2.75 19.8368 6.44496 19.7099 10.5972C19.5255 16.6319 12.2498 21.2499 12.2498 21.2499Z" stroke="#FBF5EF" strokeWidth="1.5" strokeLinecap="round" />
                                                </svg>
                                            </div>
                                            <div className="flex-1 flex item-center justify-center flex-col">
                                                <div className="flex items-center justify-between w-full">
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
                                                    <div
                                                        onClick={() => toggleBranchExpansion(bran)}
                                                        className="flex items-center gap-1 rounded-[8px] px-2 py-1 cursor-pointer hover:bg-white/5 transition-colors"
                                                    >
                                                        <p className="text-[#97A8BF] text-[12px]">{company.branches.length - index} فروع</p>
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="20"
                                                            height="20"
                                                            viewBox="0 0 20 20"
                                                            fill="none"
                                                            className={`transition-transform duration-200 ${expandedBranches.has(index) ? 'rotate-180' : ''}`}
                                                        >
                                                            <path d="M4.375 7.08366L10.2083 12.917" stroke="white" strokeWidth="1.25" strokeLinecap="square" />
                                                            <path opacity="0.4" d="M10.208 12.917L16.0413 7.08366" stroke="white" strokeWidth="1.25" strokeLinecap="square" />
                                                        </svg>
                                                    </div>
                                                </div>
                                                {expandedBranches.has(index) && (
                                                    <div className="mt-3 p-3 bg-white/5 rounded-[8px] border border-white/10">
                                                        <div className="space-y-2">
                                                            <p className="text-white text-[14px] font-medium">
                                                                {branch.name || branch.governorate?.name?.[locale] || branch.governorate?.name?.en || 'اسم الفرع غير محدد'}
                                                            </p>
                                                            {branch.address && (
                                                                <p className="text-text-gray1 text-[12px]">
                                                                    <span className="text-white">العنوان:</span> {branch.address}
                                                                </p>
                                                            )}
                                                            {branch.phone && (
                                                                <p className="text-text-gray1 text-[12px]">
                                                                    <span className="text-white">الهاتف:</span> {branch.phone}
                                                                </p>
                                                            )}
                                                            {branch.email && (
                                                                <p className="text-text-gray1 text-[12px]">
                                                                    <span className="text-white">البريد الإلكتروني:</span> {branch.email}
                                                                </p>
                                                            )}
                                                            {branch.location && (
                                                                <a
                                                                    href={branch.location.startsWith("http") ? branch.location : `https://${branch.location}`}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className="text-blue-400 text-[12px] hover:text-blue-300 transition-colors"
                                                                >
                                                                    عرض الموقع على الخريطة
                                                                </a>
                                                            )}
                                                        </div>
                                                    </div>
                                                )}
                                                {/* Collapsible Branch Details */}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )
            }
        </div >
    );
}