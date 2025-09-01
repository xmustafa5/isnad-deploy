"use client";
import { getDevelopers } from '@/actions/developers';
import { useCitiesInfinite } from '@/hooks/useCitiesInfinite';
import { cn } from '@/lib/utils';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Abs from './_components/Abs';

export default function Page() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["developers"],
    queryFn: () => getDevelopers(),
  });
  const { data: dataCity, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading: isloadingCity, error: errorCity } = useCitiesInfinite(1);
  const allCities = dataCity?.pages.flatMap(page => page.items) || [];

  return (
    <div className=' w-full h-full pt-[121px] flex flex-col gap-4'>
      <div
        className="bg-cover bg-no-repeat bg-center pointer-events-none h-full w-full absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(0, 0, 0, 0.37) 0%, rgba(0, 0, 0, 0.39) 78.5%), url('/images/home.jpg')",
          backgroundColor: "lightgray",
        }}
      ></div>
      <div className='flex gap-4 flex-col z-10 '>

        <h1 className='text-xl font-bold text-white'>المطورين</h1>
        <div className="flex gap-6 overflow-x-auto scrollbar-hide px-2 z-10">
          {data?.items?.map((developer: any) => (
            <div
              key={developer.id}
              className="flex flex-col items-center flex-shrink-0 cursor-pointer group"
            >
              {/* Circle border like IG stories */}
              <div className="p-[3px] bg-gradient-to-tr from-pink-500 via-purple-500 to-indigo-500 rounded-full">
                <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center overflow-hidden">
                  <img
                    src={developer.logo || "/images/developer-placeholder.png"}
                    alt={developer.name.ar}
                    className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform"
                  />
                </div>
              </div>
              <p className="mt-2 text-sm text-gray-200 truncate w-20 text-center">
                {developer.name.ar}
              </p>
            </div>
          ))}

        </div>
      </div>
      <div className='flex gap-4 flex-col z-10 '>
        <h1 className='text-xl font-bold text-white'>تعرف على مدننا ومجمعاتنا</h1>
        <div className='flex gap-6'>
          <ComplexCard />
          <CityCard />
        </div>
      </div>
      <div className='flex gap-4 flex-col z-10 '>
        <div className='flex justify-between'>

          <h1 className='text-xl font-bold text-white'>المدن العقارية</h1>
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
      <div className='flex gap-4 flex-col z-10 '>
        <h1 className='text-xl font-bold text-white'> عروض حصرية</h1>
        <Abs />

      </div>
    </div>
  )
}

function ComplexCard() {
  return (
    <div className="relative w-64 h-80 rounded-2xl overflow-hidden shadow-lg">
      {/* Background Image */}
      <img
        src="/images/building.jpg" // replace with your image path
        alt="Building"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,24,47,0)_41.78%,rgba(8,24,47,0.9)_84.1%),url('/images/building.jpg')] bg-cover bg-center"
      />
      {/* Content */}
      <div className="relative h-full flex flex-col justify-end p-4 text-white ">
        {/* Top Button */}
        <div className='flex  items-end justify-end absolute w-full top-10 left-0'>

          <Link
            href="/complexes"
            className="self-start bg-white/20 backdrop-blur-md text-white text-sm px-3 py-1 hover:bg-white/30 transition"
          >
            ← عرض المجمعات
          </Link>
        </div>

        {/* Bottom Content */}
        <div className="text-center">
          <p className="text-4xl font-bold">10+</p>
          <p className="mt-2 text-sm leading-relaxed">
            مجمعات سكنية تثق بنا <br />
            والخدمات التي نقدمها
          </p>
        </div>
      </div>
    </div>
  );
}

function CityCard() {
  return (
    <div className="relative w-64 h-80 rounded-2xl overflow-hidden shadow-lg">
      {/* Background Image */}
      <img
        src="/images/city2.jpg" // replace with your city image path
        alt="City"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0)_50%,var(--bg-primary,rgba(197,115,64,0.9))_90%),url('/images/city.jpg')] bg-cover bg-center"
      />

      {/* Content */}
      <div className="relative h-full flex flex-col justify-end p-4 text-white">
        {/* Top Button */}
        <div className='flex  items-end justify-end absolute w-full top-10 left-0'>
          <Link
            href="/cities"
            className="self-start bg-white/20 backdrop-blur-md text-white text-sm px-3 py-1 hover:bg-white/30 transition"
          >
            ← عرض المدن
          </Link>
        </div>

        {/* Bottom Content */}
        <div className="text-center">
          <p className="text-4xl font-bold">5+</p>
          <p className="mt-2 text-sm leading-relaxed">
            مدن رئيسية نعمل بها <br />
            والمشاريع التي نقدمها
          </p>
        </div>
      </div>
    </div>
  );
}

function CardCity({ city }: { city: any }) {
  const formatPrice = (price: number) => {
    if (price >= 1000000) {
      return `${(price / 1000000).toFixed(1)}M`;
    } else if (price >= 1000) {
      return `${(price / 1000).toFixed(1)}K`;
    }
    return price.toString();
  };
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
  return (
    <Link
      href={`/cities/${city.id}`}
      className="flex flex-col justify-end items-end h-[296px] min-w-[330px] overflow-hidden max-w-[540px] min-h-[237.99px] max-h-[446.231px] p-4 gap-2 flex-[1_0_0] rounded-[16px]
       bg-[lightgray] bg-center bg-cover bg-no-repeat relative"
      style={{
        backgroundImage: `url(${city.background_img || "/images/city.png"})`,
      }}
    >
      {/* Blur circle like residential */}
      <div className="absolute right-[-45.31px] z-30 bottom-[-133.309px] w-[346.619px] h-[346.619px] rounded-full bg-[rgba(8,24,47,0.8)] blur-[54px]"></div>

      {/* Decorative SVG background like residential */}
      <div className="absolute w-full h-[191.715px] right-0 bottom-[-5.239px] z-20">
        <RectangleComplexSvg />
      </div>

      {/* Info */}
      <div className="info flex flex-col gap-2 z-30 w-full">
        <div className="flex gap-4 w-full">
          {/* City icon/logo placeholder */}
          <div className="size-[56px] rounded-full bg-bg-secondry overflow-hidden">
            <img
              src={city.logo || "/images/city-icon.png"}
              alt={city.name || city.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col gap-1">
            <p className="text-text-main typography-subtitle-18-Light">
              {city.name.ar}
            </p>
            <div className="flex gap-2">
              <p className="text-text-gray1 text-[12px]">
                {city.total_units} وحدة
              </p>
              <p className="text-text-gray1 text-[12px]">
                {city.years} سنوات
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-opacity-white-10 flex pt-3 gap-2 flex-col">
          <p className='text-text-gray1 typography-body-14-medium'>
            من {formatPrice(city.min_price)} الى {formatPrice(city.max_price)} IQD
          </p>
          {/* <p className="text-text-gray1 typography-body-14-medium">
                      عدد المشاريع: {city.total_units || 0}
                  </p> */}
          <div className="flex gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.5 10.9878C14.5 9.60654 13.3808 8.4873 12.0005 8.4873C10.6192 8.4873 9.5 9.60654 9.5 10.9878C9.5 12.3681 10.6192 13.4873 12.0005 13.4873C13.3808 13.4873 14.5 12.3681 14.5 10.9878Z"
                stroke="#EEF5FF"
                strokeWidth="0.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.9995 21.4873C10.801 21.4873 4.5 16.3857 4.5 11.0506C4.5 6.87394 7.8571 3.4873 11.9995 3.4873C13.3808 13.4873 19.5 6.87394 19.5 11.0506C19.5 16.3857 13.198 21.4873 11.9995 21.4873Z"
                stroke="#EEF5FF"
                strokeWidth="0.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="text-text-gray1 typography-body-14-light flex items-center">
              {city.governorate.name.ar || "غير محدد"}
            </p>
          </div>
        </div>
      </div>
      <div className={`flex items-center justify-center gap-2  h-[36px]  py-2 absolute left-4 top-4 rounded-[16px] border border-white/10 ${getStatusBgColor(city.built_status.value)} backdrop-blur-[14px]`}>
        <p className="text-[#EEF5FF] text-[14px] font-[400] leading-[140%] whitespace-nowrap px-2">
          {getStatusLabel(city.built_status.value)}
        </p>
      </div>
    </Link>
  );
}
function RectangleComplexSvg() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="537" height="192" viewBox="0 0 537 192" fill="none">
      <path d="M536.683 54.9912V0H487.859C504.127 18.3228 520.415 36.6684 536.683 54.9912Z" fill="#2e2e4cba" fillOpacity="0.3" />
      <path d="M146.473 54.9912V0H97.6486C113.917 18.3228 130.205 36.6684 146.473 54.9912Z" fill="#2e2e4cba" fillOpacity="0.3" />
      <path d="M439.034 54.9912H487.859V0C471.591 18.3228 455.303 36.6684 439.034 54.9912Z" fill="#2e2e4cba" fillOpacity="0.3" />
      <path d="M439.217 54.9912V0H390.393C406.661 18.3228 422.949 36.6684 439.217 54.9912Z" fill="#2e2e4cba" fillOpacity="0.3" />
      <path d="M341.568 54.9912H390.392V0C374.124 18.3228 357.836 36.6684 341.568 54.9912Z" fill="#2e2e4cba" fillOpacity="0.3" />
      <path d="M341.568 54.9912V0H292.743C309.011 18.3228 325.3 36.6684 341.568 54.9912Z" fill="#2e2e4cba" fillOpacity="0.3" />
      <path d="M243.919 54.9912H292.744V0C276.476 18.3228 260.187 36.6684 243.919 54.9912Z" fill="#2e2e4cba" fillOpacity="0.3" />
      <path d="M244.122 54.9912V0H195.297C211.565 18.3228 227.854 36.6684 244.122 54.9912Z" fill="#2e2e4cba" fillOpacity="0.3" />
      <path d="M146.474 54.9912H195.298V0C179.03 18.3228 162.742 36.6684 146.474 54.9912Z" fill="#2e2e4cba" fillOpacity="0.3" />
      <path d="M48.8247 191.715V54.9688H0.000270656C16.2683 100.558 32.5566 146.125 48.8247 191.715Z" fill="#2e2e4cba" fillOpacity="0.3" />
      <path d="M48.8245 191.715H97.6489V54.9688C81.3809 100.558 65.0925 146.125 48.8245 191.715Z" fill="#2e2e4cba" fillOpacity="0.3" />
      <path d="M48.8247 54.9912V0H0.000270656C16.2683 18.3228 32.5566 36.6684 48.8247 54.9912Z" fill="#2e2e4cba" fillOpacity="0.3" />
      <path d="M48.8235 54.9912H97.6479V0C81.3799 18.3228 65.0916 36.6684 48.8235 54.9912Z" fill="#2e2e4cba" fillOpacity="0.3" />
      <path d="M536.683 191.715V54.9688H487.859C504.127 100.558 520.415 146.125 536.683 191.715Z" fill="#2e2e4cba" fillOpacity="0.3" />
      <path d="M146.473 191.715V54.9688H97.6486C113.917 100.558 130.205 146.125 146.473 191.715Z" fill="#2e2e4cba" fillOpacity="0.3" />
      <path d="M439.034 191.715H487.859V54.9688C471.591 100.558 455.303 146.125 439.034 191.715Z" fill="#2e2e4cba" fillOpacity="0.3" />
      <path d="M439.217 191.715V54.9688H390.393C406.661 100.558 422.949 146.125 439.217 191.715Z" fill="#2e2e4cba" fillOpacity="0.3" />
      <path d="M341.568 191.715H390.392V54.9688C374.124 100.558 357.836 146.125 341.568 191.715Z" fill="#2e2e4cba" fillOpacity="0.3" />
      <path d="M341.568 191.715V54.9688H292.743C309.011 100.558 325.3 146.125 341.568 191.715Z" fill="#2e2e4cba" fillOpacity="0.3" />
      <path d="M243.919 191.715H292.744V54.9688C276.476 100.558 260.187 146.125 243.919 191.715Z" fill="#2e2e4cba" fillOpacity="0.3" />
      <path d="M244.123 191.715V54.9688H195.298C211.566 100.558 227.855 146.125 244.123 191.715Z" fill="#2e2e4cba" fillOpacity="0.3" />
      <path d="M146.473 191.715H195.297V54.9688C179.029 100.558 162.741 146.125 146.473 191.715Z" fill="#2e2e4cba" fillOpacity="0.3" />
    </svg>
  );
}

