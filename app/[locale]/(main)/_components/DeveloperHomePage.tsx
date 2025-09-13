import { getDevelopers } from "@/actions/developers";
import { cn } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";


const DeveloperHomePage = ({ className }: any) => {
    const { data, isLoading, error } = useQuery({
        queryKey: ["developers"],
        queryFn: () => getDevelopers(),
    });
    return (
        <div className={cn('flex gap-4 flex-col z-10 ', className)}>
            <h1 className='text-right font-normal text-[22px] leading-[1.4] text-white'>المطورين العقارين</h1>
            <div className="flex gap-6 overflow-x-auto scrollbar-hide px-2 z-10">
                {data?.items?.map((developer: any) => (
                    <div
                        key={developer.id}
                        className="flex w-[80px] !h-[80px] md:!h-[144px] md:w-[195px] h-[144px]  p-3 flex-col justify-center items-center gap-1 md:gap-[9px] rounded-2xl border border-[rgba(255,255,255,0.05)] bg-[#0D1F39] backdrop-blur-[37px]"
                    >
                        {/* Circle border like IG stories */}
                        <div className="flex  items-center gap-2 md:p-1 p-0 rounded-[48px]  md:border border-[#8FABDA]">
                            <div className="relative size-[32px] md:!size-[44px]">

                                <Image
                                    src={developer.logo || "/images/developer-placeholder.png"}
                                    alt={developer.name.ar}
                                    fill
                                    className="w-full h-full  rounded-full group-hover:scale-105 transition-transform"
                                />
                            </div>

                        </div>
                        <p className="text-[#EEF5FF] text-right text-[14px] not-italic font-normal leading-[140%]">
                            {developer.name.ar}
                        </p>
                    </div>
                ))}

            </div>
        </div>
    )
}
export default DeveloperHomePage