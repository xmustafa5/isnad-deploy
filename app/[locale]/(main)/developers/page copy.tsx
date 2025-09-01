"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getDevelopers } from "@/actions/developers";
import { Developer } from "./_components/DeveloperCard";

const DevelopersPage = () => {
    const { data, isLoading, error } = useQuery({
        queryKey: ["developers"],
        queryFn: () => getDevelopers(),
    });

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#0a1527] to-[#09101c] py-16">
            <div className="max-w-7xl mx-auto px-6">
                {/* Title */}
                <h1 className="text-center text-4xl md:text-5xl font-extrabold text-white mb-10 tracking-wide">
                    المطورين
                </h1>

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
                <div className="flex gap-6 overflow-x-auto scrollbar-hide px-2">
                    {data?.items?.map((developer: Developer) => (
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
        </div>
    );
};

export default DevelopersPage;
