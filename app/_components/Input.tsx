import React from 'react'
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string,
    subLabel?: string,
}
export default function Input({ label = 'الحد الأدنى', subLabel = 'متر', ...props }: InputProps) {
    return (
        <div className="flex w-[175px] flex-col items-end gap-[8px]">
            <p className="text-text-gray1 w-full text-[14px] font-normal leading-[24px]">
                {label}
            </p>
            <div className="flex pl-[16px] items-center gap-[8px] self-stretch rounded-[12px] border border-stroke-white-5 bg-[rgba(13,31,57,0.05)]">
                <div className="flex w-[42px] p-[12px_8px] flex-col justify-center items-center gap-[8px] bg-[rgba(33,52,88,0.05)]">
                    <p className="text-text-gray1 font-alilato text-[14px] font-normal leading-[24px]">
                        {subLabel}
                    </p>
                </div>
                <input type="text" className='text-text-gray2  border-none typography-subtitle-18-medium w-full focus:outline-none' {...props} />
            </div>
        </div>
    )
}
