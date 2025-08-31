'use client';
import { AspectRatio } from '@/app/_components/aspect-ratio';
import { Button } from '@/app/_components/Button'
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { useCityById } from '@/hooks/useCityById';
import { useParams } from 'next/navigation';

export default function CityDetailPage() {
    const params = useParams();
    const cityId = params.id as string;

    const { data: cityData, isLoading, error } = useCityById(cityId);

    if (isLoading) {
        return (
            <div className='flex justify-center items-center h-96'>
                <div className="text-text-gray1">جاري التحميل...</div>
            </div>
        );
    }

    if (error || !cityData?.item) {
        return (
            <div className='flex justify-center items-center h-96'>
                <div className="text-red-500">حدث خطأ في تحميل البيانات</div>
            </div>
        );
    }

    const city = cityData.item;

    return (
        <div className='flex gap-8 xl:flex-row flex-col '>
            <div
                className="rounded-[16px] h-fit bg-cover bg-no-repeat bg-center pt-[152px]"
                style={{
                    backgroundImage: `
      linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.26) 30.77%,
        rgba(5, 15, 30, 0.90) 58.5%,
        #08182F 100%
      ),
      url(${city.background_img})
    `,
                    backgroundColor: 'lightgray',
                }}
            >
                <div className="flex flex-col items-center gap-6 px-6 pb-4 self-stretch">
                    <div className='flex flex-col items-start gap-4 self-stretch'>
                        <div className="flex flex-col items-center gap-2 self-stretch">
                            <div className="flex justify-center items-end gap-[25px] self-stretch">
                                <div className="flex flex-col justify-center items-center w-[122px] h-[42px]">
                                    <div className="flex items-center gap-1">
                                        <p className="text-[#D3D9E1] text-right text-[19px] font-bold leading-[140%]">
                                            {city.total_units}+
                                        </p>
                                    </div>
                                    <p className="text-[#AAB7CB] text-right text-[12px] font-normal leading-[120%]">
                                        {city.type.label === 'سكني' ? 'مدينة سكنية' : 'مدينة تجارية'}
                                    </p>
                                </div>
                                <div className="flex justify-center items-center w-[80px] h-[80px] px-[12.444px] py-[26.667px] rounded-[145.455px] border-[3.333px] border-[rgba(255,255,255,0.09)]" style={{ backgroundColor: "var(--bg-secondry, #08182F)" }}>
                                    <div className="text-white text-center text-sm">Logo</div>
                                </div>
                                <div className="flex flex-col justify-center items-center w-[122px]">
                                    <div className="flex items-center gap-1">
                                        <p className="text-[#D3D9E1] text-right text-[20px] font-medium leading-[140%]">
                                            {city.years}
                                        </p>
                                        <p className="text-[#D3D9E1] text-right text-[19px] font-bold leading-[140%]">
                                            سنوات
                                        </p>
                                    </div>
                                    <p className="text-[#AAB7CB] text-center text-[12px] font-normal leading-[120%]">
                                        {city.type.label === 'سكني' ? 'مدينة سكنية' : 'مدينة تجارية'}
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col items-center gap-1 self-stretch">
                                <p className="text-text-main text-[20px] font-normal leading-[140%]">
                                    {city.name.ar}
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-end gap-2 pb-3 self-stretch border-b border-white/10">
                            <div className="time flex items-center gap-2 self-stretch">
                                <div className="flex items-center gap-2 flex-1">
                                    <div className="w-6 h-6 bg-white/20 rounded"></div>
                                    <p className="text-text-main text-right text-[14px] font-light leading-[140%]">
                                        الأحد  -  الخميس
                                    </p>
                                </div>
                                <div className="flex items-center gap-2 flex-1">
                                    <div className="w-6 h-6 bg-white/20 rounded"></div>
                                    <p className="text-text-main text-right text-[14px] font-light leading-[140%]">8:00 ص  - 6:00 م</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 self-stretch">
                                <div className="w-6 h-6 bg-white/20 rounded"></div>
                                <p className="text-text-main text-right text-[14px] font-light leading-[140%]">
                                    {city.governorate.name.ar}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-4 self-stretch">
                        <div className="flex flex-col items-center gap-2 self-stretch">
                            <p className="text-text-main text-[16px] font-normal leading-[140%]">
                                {city.description.ar}
                            </p>
                        </div>
                        <div className="flex items-center gap-2 self-stretch">

                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-8 flex-1">
                <div className="flex flex-col items-start gap-6 self-stretch">
                    <div className="flex flex-col items-start gap-4 self-stretch">
                        <h2 className='text-white typography-title-24-bold'>المميزات</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                            {city.advantages.map((advantage) => (
                                <div key={advantage.id} className="flex items-center gap-3 p-4 rounded-[12px] border border-white/10 bg-white/5">
                                    <div className="w-4 h-4 bg-primary rounded-full"></div>
                                    <p className="text-text-main text-[14px] font-normal leading-[140%]">
                                        {advantage.title.ar}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-start gap-6 self-stretch">
                    <div className="flex flex-col items-start gap-4 self-stretch">
                        <h2 className='text-white typography-title-24-bold'>معلومات الاتصال</h2>
                        <div className="flex flex-col gap-4 w-full">
                            {city.phones.map((phone) => (
                                <div key={phone.id} className="flex items-center justify-between p-4 rounded-[12px] border border-white/10 bg-white/5">
                                    <div className="flex items-center gap-3">
                                        <div className="w-4 h-4 bg-primary rounded-full"></div>
                                        <p className="text-text-main text-[14px] font-normal leading-[140%]">
                                            {phone.type.label}
                                        </p>
                                    </div>
                                    <p className="text-text-main text-[14px] font-medium leading-[140%]">
                                        {phone.number}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-start gap-6 self-stretch">
                    <div className="flex flex-col items-start gap-4 self-stretch">
                        <h2 className='text-white typography-title-24-bold'>معلومات إضافية</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                            <div className="flex flex-col gap-2 p-4 rounded-[12px] border border-white/10 bg-white/5">
                                <p className="text-text-gray1 text-[12px] font-normal leading-[120%]">السعر الأدنى</p>
                                <p className="text-text-main text-[16px] font-medium leading-[140%]">
                                    {city.min_price?.toLocaleString()} دينار عراقي
                                </p>
                            </div>
                            <div className="flex flex-col gap-2 p-4 rounded-[12px] border border-white/10 bg-white/5">
                                <p className="text-text-gray1 text-[12px] font-normal leading-[120%]">السعر الأقصى</p>
                                <p className="text-text-main text-[16px] font-medium leading-[140%]">
                                    {city.max_price?.toLocaleString()} دينار عراقي
                                </p>
                            </div>
                            <div className="flex flex-col gap-2 p-4 rounded-[12px] border border-white/10 bg-white/5">
                                <p className="text-text-gray1 text-[12px] font-normal leading-[120%]">دفعة مقدمة</p>
                                <p className="text-text-main text-[16px] font-medium leading-[140%]">
                                    {city.payment_introduction?.toLocaleString()} دينار عراقي
                                </p>
                            </div>
                            <div className="flex flex-col gap-2 p-4 rounded-[12px] border border-white/10 bg-white/5">
                                <p className="text-text-gray1 text-[12px] font-normal leading-[120%]">الحالة</p>
                                <p className="text-text-main text-[16px] font-medium leading-[140%]">
                                    {city.built_status.label}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {city.developer && (
                    <div className="flex flex-col items-start gap-6 self-stretch">
                        <div className="flex flex-col items-start gap-4 self-stretch">
                            <h2 className='text-white typography-title-24-bold'>المطور</h2>
                            <div className="flex items-center gap-4 p-4 rounded-[12px] border border-white/10 bg-white/5 w-full">
                                {city.developer.logo && (
                                    <div className="w-16 h-16 rounded-lg overflow-hidden">
                                        <Image
                                            src={city.developer.logo}
                                            alt={`شعار ${city.developer.name.ar}`}
                                            width={64}
                                            height={64}
                                            className="object-cover w-full h-full"
                                        />
                                    </div>
                                )}
                                <div className="flex flex-col gap-1">
                                    <p className="text-text-main text-[16px] font-medium leading-[140%]">
                                        {city.developer.name.ar}
                                    </p>
                                    <p className="text-text-gray1 text-[14px] font-normal leading-[140%]">
                                        مطور المدينة
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

