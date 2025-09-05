import { getDevelopers } from "@/actions/developers";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";


const DeveloperHomePage = () => {
    const { data, isLoading, error } = useQuery({
        queryKey: ["developers"],
        queryFn: () => getDevelopers(),
    });
    return (
        <div className='flex gap-4 flex-col z-10 '>
            <h1 className='text-xl font-bold text-white'>المطورين</h1>
            <div className="flex gap-6 overflow-x-auto scrollbar-hide px-2 z-10">
                {data?.items?.map((developer: any) => (
                    <div
                        key={developer.id}
                        className="flex w-[195px] h-[144px] min-w-[171px] p-3 flex-col justify-center items-center gap-[9px] rounded-2xl border border-[rgba(255,255,255,0.05)] bg-[#0D1F39] backdrop-blur-[37px]"
                    >
                        {/* Circle border like IG stories */}
                        <div className="flex items-center gap-2 p-1 rounded-[48px] border border-[#8FABDA]">
                            <Image
                                src={developer.logo || "/images/developer-placeholder.png"}
                                alt={developer.name.ar}
                                width={44}
                                height={44}
                                className="w-full h-full  rounded-full group-hover:scale-105 transition-transform"
                            />

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