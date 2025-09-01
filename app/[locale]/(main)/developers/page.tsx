"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getDevelopers } from "@/actions/developers";
import { Developer } from "./_components/DeveloperCard";
import Link from "next/link";

const DevelopersPage = () => {
    const { data, isLoading, error } = useQuery({
        queryKey: ["developers"],
        queryFn: () => getDevelopers(),
    });

    return (
        <div className='flex flex-col gap-8'>
            <div className="flex flex-col items-start gap-4 self-stretch">
                {/* Title */}
                <h1 className='text-white typography-title-32-bold mb-2'>المطورين</h1>


                {/* Loading / Error */}
                {isLoading && (
                    <div className="text-center text-gray-400 text-lg animate-pulse">
                        جار التحميل...
                    </div>
                )}

                {error && (
                    <div className="text-center text-red-400 text-lg font-medium">
                        خطأ في تحميل المطورين
                    </div>
                )}

                {/* Instagram stories style */}
                <div className="flex gap-6  flex-wrap px-2">
                    {data?.items?.map((developer: any) => (
                        developer.cities.length > 0 ? (
                            <Link
                                href={`/developers/${developer.id}`}
                                key={developer.id}
                                className="flex flex-col items-center flex-shrink-0 cursor-pointer group"
                            >
                                <div className="p-[3px] bg-gradient-to-tr from-pink-500 via-purple-500 to-indigo-500 rounded-full">
                                    <div className="w-32 h-32 rounded-full bg-white flex items-center justify-center overflow-hidden">
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
                                <p className="mt-2 text-xs text-gray-400 truncate w-20 text-center">
                                    عدد المدن {developer.cities.length}
                                </p>
                            </Link>
                        ) : (
                            <div
                                key={developer.id}
                                className="flex flex-col items-center flex-shrink-0 group cursor-not-allowed"
                            >
                                <div className="p-[3px] bg-gradient-to-tr from-pink-500 via-purple-500 to-indigo-500 rounded-full">
                                    <div className="w-32 h-32 rounded-full bg-white flex items-center justify-center overflow-hidden">
                                        <img
                                            src={developer.logo || "/images/developer-placeholder.png"}
                                            alt={developer.name.ar}
                                            className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform"
                                        />
                                    </div>
                                </div>
                                <p className="mt-2 text-sm text-gray-300 truncate w-20 text-center">
                                    {developer.name.ar}
                                </p>
                                <p className="mt-2 text-xs text-gray-500 truncate w-20 text-center">
                                    لا يوجد مدن
                                </p>
                            </div>
                        )

                    ))}

                </div>
            </div>
        </div>
    );
};

export default DevelopersPage;
