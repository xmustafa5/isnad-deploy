import { cn } from '@/lib/utils'
import React from 'react'

export default function SelectOptionNumber({ max, setValue, label, value }: { max: number, setValue: (value: number) => void, label: string, value: number }) {
    return (
        <div className="flex w-[399.656px] flex-col items-start gap-[8px]">
            <p className="self-stretch text-white text-[16px] font-medium leading-[24px]">
                {label}
            </p>
            <div className='flex gap-2 self-stretch'>
                {Array.from({ length: max }, (_, index) => (
                    <div key={index} onClick={() => setValue(index + 1)} className={cn("flex h-[48px] text-text-whaite typography-body-16-medium px-[24px] py-[13px] justify-center items-center gap-[8px] flex-1 rounded-[12px] border border-stroke-white-5 bg-opacity-white-5", index + 1 === value && "border-white ")}>
                        {index + 1}{index + 1 === max ? "+" : null}
                    </div>
                ))}
            </div>
        </div>
    )
}
