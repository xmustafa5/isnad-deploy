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
import RealEstateComplexe from './_components/RealEstateComplexe';
import RealEstateCompines from './_components/RealEstateCompines';

export default function Page() {
    return (
        <div className='w-full h-full pt-4 md:pt-5 lg:pt-[121px] flex flex-col  gap-6 px-2 md:px-4 lg:px-0'>
            {/* Background Image */}
            <div
                className="bg-cover bg-no-repeat bg-center md:bg-top pointer-events-none h-full w-full absolute inset-0"
                style={{
                    backgroundImage:
                        "linear-gradient(180deg, rgba(0, 0, 0, 0.37) 0%, rgba(0, 0, 0, 0.39) 78.5%), url('/images/home.jpg')",
                    backgroundColor: "lightgray",
                }}
            />
            <DeveloperHomePage className="flex md:hidden" />

            {/* Hero Section */}
            <div className='w-full flex flex-col lg:flex-row gap-2 gap-4 px-2 z-10 h-fit'>
                <HeroSectionTitle />
                <CityAndComplexe />
            </div>

            {/* Cities Section */}
            <div className='z-10'>
                <RealEstateCities />
            </div>

            {/* Main Content Sections */}
            <div className='relative z-10 w-full '>
                {/* Remove the problematic background div */}
                <div className="flex flex-col gap-8  pb-6 md:pb-8 lg:pb-12">
                    <DeveloperHomePage className="hidden md:flex" />
                    <RealEstateComplexe />
                    <Abs />
                    <RealEstateCompines />
                </div>
            </div>
        </div>
    )
}