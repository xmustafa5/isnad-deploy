"use client";
import { getDevelopers } from '@/actions/developers';
import { useCitiesInfinite } from '@/hooks/useCitiesInfinite';
import { cn } from '@/lib/utils';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Abs from './_components/Abs';
import DeveloperHomePage from './_components/DeveloperHomePage';
import CityAndComplexe from './_components/CityAndComplexe';
import RealEstateCities from './_components/RealEstateCities';
import HeroSectionTitle from './_components/HeroSectionTitle';

export default function Page() {


  return (
    <div className=' w-full h-full pt-[121px] flex flex-col gap-4' style={{ paddingTop: "20px" }}>
      <div
        className="bg-cover bg-no-repeat bg-center pointer-events-none h-full w-full absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(0, 0, 0, 0.37) 0%, rgba(0, 0, 0, 0.39) 78.5%), url('/images/home.jpg')",
          backgroundColor: "lightgray",
        }}
      >
      </div >
      <div className='w-full flex gap-4  z-10 h-fit'>
        <HeroSectionTitle />
        <CityAndComplexe />
      </div>
      <RealEstateCities />
      <div className=' relative z-10 w-full pt-12 '>
        <div
          className=" bg-[#071427] translate-x-[10%]  w-[117.5%] pointer-events-none h-full  absolute inset-0"

        >s
        </div >
        <div className="flex flex-col content-between gap-12   ">
          <DeveloperHomePage />
          <Abs />
        </div>
      </div>
    </div>
  )
}


