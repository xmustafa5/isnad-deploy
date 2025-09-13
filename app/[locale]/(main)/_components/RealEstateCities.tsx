import { useCitiesInfinite } from "@/hooks/useCitiesInfinite";
import Link from "next/link"
import CardCity from "./CardCity";

const RealEstateCities = () => {
    const { data: dataCity, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading: isloadingCity, error: errorCity } = useCitiesInfinite(1);
    const allCities = dataCity?.pages.flatMap(page => page.items) || [];

    return (
        <div className='flex gap-4 flex-col z-10 '>
            <div className='flex justify-between'>

                <h1 className='text-right font-normal text-[22px] leading-[1.4] text-white'>المدن العقارية</h1>
                <Link href={"/cities"} className='self-start bg-white/20 backdrop-blur-md text-white text-sm px-3 py-1 hover:bg-white/30 transition flex rounded-full'>
                    <p className='text-[#e9e9e9]'>
                        عرض الكل
                    </p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M17 12H7M7 12L11 16M7 12L11 8" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                </Link>
            </div>
            <div className="flex gap-6 overflow-x-auto scroll-white  px-2 z-10">
                {allCities.map((city) => (
                    <>
                        <CardCity key={city.id} city={city} />
                    </>
                ))}

            </div>

        </div>
    )
}
export default RealEstateCities