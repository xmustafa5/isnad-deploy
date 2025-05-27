import Navbar from '@/app/_components/Navbar'
import React from 'react'
export default function page() {
    return (
        <div className='bg-secondary-950 h-screen'>
            <div className="bg-[linear-gradient(180deg,rgba(8,24,47,0.4)_13.08%,rgba(25,76,149,0)_100%)]">
                <Navbar />
            </div>
            <div className='px-[72px] pt-7'>
                <div className='flex justify-between shrink-0'>
                    <div className='filter flex w-[430px] pt-4 flex-col items-center shrink-0  rounded-t-[40px] rounded-b-0 border border-[rgba(255,255,255,0.10)] bg-[rgba(8,24,47,0.10)] backdrop-blur-[68.5px]'>
                        <div className='content filter flex flex-col px-4 items-start gap-6 flex-shrink-0 self-stretch'>
                            <div className="flex w-[396px] p-1 items-center gap-4 rounded-[40px] border border-[#212F43] bg-[rgba(8,24,47,0)] backdrop-blur-[37px]">
                                <button className="flex py-2 justify-center items-center gap-1 flex-[1_0_0] rounded-[48px] border border-[rgba(255,255,255,0.10)] bg-[rgba(255,255,255,0.10)] backdrop-blur-[32px] text-[#EEF5FF] text-right text-base font-medium leading-6">
                                    شقة
                                </button>
                                <button className="flex py-2 justify-center items-center gap-1 flex-[1_0_0] rounded-[48px] border border-transparent bg-transparent text-[#EEF5FF] text-right text-base font-medium leading-6">
                                    منزل
                                </button>
                            </div>
                            <div></div>
                        </div>
                        <div className='buttons'>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
