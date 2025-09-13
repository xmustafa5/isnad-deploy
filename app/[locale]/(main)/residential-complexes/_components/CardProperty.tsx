import Link from "next/link";
import { useRouter } from "next/navigation";
import RectangleComplexSvg from "./RectangleComplexSvg";
import { ComplexItem } from "@/types/complexesType";
import { memo } from "react";

const CardProperty = memo(function CardProperty({ complex }: { complex: ComplexItem }) {
    // Format price to readable format
    const formatPrice = (price: number) => {
        if (price >= 1000000) {
            const millions = price / 1000000;
            // If it's a whole number, don't show decimal
            if (millions % 1 === 0) {
                return `${millions.toFixed(0)} مليون`;
            }
            // If decimal is .0, don't show it
            if (millions % 1 === 0.5) {
                return `${millions.toFixed(0)}.5 مليون`;
            }
            return `${millions.toFixed(1)} مليون`;
        } else if (price >= 1000) {
            const thousands = price / 1000;
            // If it's a whole number, don't show decimal
            if (thousands % 1 === 0) {
                return `${thousands.toFixed(0)} الف`;
            }
            // If decimal is .0, don't show it
            if (thousands % 1 === 0.5) {
                return `${thousands.toFixed(0)}.5 الف`;
            }
            return `${thousands.toFixed(1)} الف`;
        }
        return price.toString();
    };

    // Get status label based on built_status
    const getStatusLabel = (status: number) => {
        switch (status) {
            case 0:
                return "قيد الإنشاء";
            case 1:
                return "مكتمل";
            default:
                return "غير محدد";
        }
    };

    // Get status background color
    const getStatusBgColor = (status: number) => {
        switch (status) {
            case 0:
                return "bg-[rgba(255,165,0,0.25)]"; // Orange for under construction
            case 1:
                return "bg-[rgba(197,115,64,0.25)]"; // Brown for completed
            default:
                return "bg-[rgba(128,128,128,0.25)]"; // Gray for unknown
        }
    };
    const router = useRouter();

    return (
        <Link
            href={`/residential-complexes/${complex.id}`}
            className="flex !h-[238px] flex-col justify-end items-end h-[296px] min-w-[330px] overflow-hidden max-w-[440px] min-h-[237.99px] max-h-[446.231px] p-4 gap-2 flex-[1_0_0] rounded-[16px]
     bg-[lightgray] bg-center bg-cover bg-no-repeat relative"
            style={{
                backgroundImage: `url(${complex.background_img || "/images/city.png"})`,
            }}
        >
            <div className="absolute right-[-45.31px] z-30 bottom-[-133.309px] w-[346.619px] h-[346.619px] rounded-full bg-[rgba(8,24,47,0.8)] blur-[54px]"></div>
            <div className="absolute w-full h-[191.715px] right-0 bottom-[-5.239px] z-20">
                <RectangleComplexSvg />
            </div>
            <div className='info flex flex-col gap-2 z-30 w-full'>
                <div className='flex gap-4 w-full'>
                    <div className='size-[56px] rounded-full bg-bg-secondry overflow-hidden'>
                        {complex.logo && (
                            <img
                                src={complex.logo}
                                alt={complex.name.ar || complex.name.en}
                                className="w-full h-full object-cover"
                            />
                        )}
                    </div>
                    <div className="flex flex-col gap-1">
                        <p className='text-text-main typography-subtitle-18-Light'>
                            {complex.name.ar || complex.name.en}
                        </p>
                        <div className='flex gap-2'>
                            <p className='text-text-gray1 text-[12px]'>
                                {complex.type.label === 'Residential' ? 'عقار سكني' : 'عقار تجاري'}
                            </p>
                            <p className='text-text-gray1 typography-body-14-light'>
                                {complex.total_units}
                            </p>
                        </div>
                    </div>
                </div>
                <div className='border-t border-opacity-white-10 flex pt-3 gap-2 flex-col'>
                    <p className='text-text-gray1 typography-body-14-medium'>
                        من {formatPrice(complex.min_price)} الى {formatPrice(complex.max_price)} دينار عراقي
                    </p>
                    <a
                        href={complex.location.startsWith("http") ? complex.location : `https://${complex.location}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex gap-2 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M14.5 10.9878C14.5 9.60654 13.3808 8.4873 12.0005 8.4873C10.6192 8.4873 9.5 9.60654 9.5 10.9878C9.5 12.3681 10.6192 13.4873 12.0005 13.4873C13.3808 13.4873 14.5 12.3681 14.5 10.9878Z" stroke="#EEF5FF" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M11.9995 21.4873C10.801 21.4873 4.5 16.3857 4.5 11.0506C4.5 6.87394 7.8571 3.4873 11.9995 3.4873C13.3808 13.4873 19.5 6.87394 19.5 11.0506C19.5 16.3857 13.198 21.4873 11.9995 21.4873Z" stroke="#EEF5FF" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <p
                            className="text-text-gray1 typography-body-14-light flex items-center"
                        >
                            {complex.governorate.name.ar || complex.governorate.name.en}
                        </p>

                    </a>
                </div>
            </div>
            <div className={`flex items-center justify-center gap-2  h-[36px]  py-2 absolute left-4 top-4 rounded-[16px] border border-white/10 ${getStatusBgColor(complex.built_status.value)} backdrop-blur-[14px]`}>
                <p className="text-[#EEF5FF] text-[14px] font-[400] leading-[140%] whitespace-nowrap px-2">
                    {getStatusLabel(complex.built_status.value)}
                </p>
            </div>
        </Link >
    );
});
export default CardProperty