import Image from "next/image";
import Link from "next/link";

const RowDevloperAndRingPrice = ({ item }: any) => {
    return (
        <div className="flex flex-col items-start gap-6 self-stretch">
            <div className="flex flex-col items-start gap-4 self-stretch">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                    {item?.developer &&
                        <div className="flex item-center justify-between  gap-2 p-4 rounded-[12px] border text-white border-white/10 bg-white/5">
                            <div className="flex item-center  gap-2 p-4 rounded-[12px]  text-white ">
                                <Image src={item?.developer?.logo} alt='fd' width={40} height={40} className='rounded-md' />
                                <p className='h-full flex items-center'>
                                    {item?.developer?.name?.ar}
                                </p>
                                {/* {item?.developer?.logo} */}
                            </div>
                            <Link href={`/developers/${item?.developer?.id}`} className='flex items-center gap-2' >
                                <p>عرض</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                    <path d="M15.5 5.75L8.5 12.75" stroke="#B8C6E3" stroke-width="1.5" stroke-linecap="square" />
                                    <path opacity="0.4" d="M8.5 12.75L15.5 19.75" stroke="#B8C6E3" stroke-width="1.5" stroke-linecap="square" />
                                </svg>
                            </Link>
                        </div>
                    }
                    <PriceCard item={item} />


                </div>
            </div>
        </div>
    )
}
function PriceCard({ item }: any) {
    console.log(item);

    return (
        <div className="w-[100%] rounded-[16px] overflow-hidden  border-white/10 bg-white/5">
            {/* Top Section */}
            <div className="flex justify-between items-center bg-[#0B1D34] px-6 py-4 text-white text-sm">
                {/* Right side */}
                <div className='flex flex-col  w-full'>

                    <p>
                        مقدمة:
                    </p>
                    <p className="text-[#F58634] font-medium">{item?.payment_introduction}% <span className='text-[#97A8BF]'> من السعر
                    </span></p>

                </div>
                {/* Divider */}
                <div className="w-px h-6 bg-white/20 mx-4" />
                <div className='flex flex-col  w-full'>

                    <p>
                        تقسيط لغاية :
                    </p>
                    <p className="text-[#F58634] font-medium">{item?.years} <span className='text-[#97A8BF]'> سنوات
                    </span></p>

                </div>

                {/* Left side */}

            </div>

            {/* Bottom Section */}
            <div className=" bg-white/5 px-6 py-4">
                <p className="text-[#8795A1] text-sm font-medium text-right">
                    ريح السعر
                </p>
                <p className='text-white'>
                    تبدا الاسعار من {item?.min_price} الى {item?.max_price} د.ع
                </p>
            </div>
        </div>
    );
}
export default RowDevloperAndRingPrice