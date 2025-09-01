"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getAdvertisements } from "@/actions/advertisements";

export interface Advertisement {
    id: string;
    img: string;
    url: string;
    is_visible: {
        value: number;
        label: string;
    };
}

function Abs() {
    const { data, isLoading, error } = useQuery({
        queryKey: ["advertisements"],
        queryFn: getAdvertisements,
    });

    if (isLoading)
        return <div className="text-center text-gray-400">جار التحميل...</div>;
    if (error)
        return <div className="text-center text-red-500">خطأ في تحميل الإعلانات</div>;

    // ✅ نعرض بس المرئي ونكررهم حتى يصير infinite
    const ads = data?.items?.filter((ad) => ad.is_visible.value === 1) || [];
    const loopedAds = [...ads, ...ads];

    return (
        <div className="w-full overflow-hidden z-10">
            <div className="flex gap-4 animate-scroll">
                {loopedAds.map((ad, idx) => (
                    <a
                        key={`${ad.id}-${idx}`}
                        href={ad.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-shrink-0 w-64 h-40 rounded-xl overflow-hidden shadow-lg bg-gray-900 hover:scale-105 transition-transform"
                    >
                        <img
                            src={ad.img}
                            alt="Advertisement"
                            className="w-full h-full object-cover"
                        />
                    </a>
                ))}
            </div>

            {/* 🔑 CSS animation */}
            <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
          width: max-content;
        }
      `}</style>
        </div>
    );
}

export default Abs;
