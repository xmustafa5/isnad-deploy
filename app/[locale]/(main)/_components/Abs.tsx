"use client";
import React, { useEffect, useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import { getAdvertisements, Advertisement } from "@/actions/advertisements";

function Abs() {
    const { data, isLoading, error } = useQuery({
        queryKey: ["advertisements"],
        queryFn: getAdvertisements,
    });

    const scrollRef = useRef<HTMLDivElement>(null);

    // Auto-scroll effect
    useEffect(() => {
        const interval = setInterval(() => {
            if (scrollRef.current) {
                scrollRef.current.scrollBy({
                    left: 250, // move by one card
                    behavior: "smooth",
                });

                // reset when reach end
                if (
                    scrollRef.current.scrollLeft + scrollRef.current.clientWidth >=
                    scrollRef.current.scrollWidth
                ) {
                    scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
                }
            }
        }, 3000); // every 3s

        return () => clearInterval(interval);
    }, []);

    if (isLoading)
        return <div className="text-center text-gray-400">جار التحميل...</div>;
    if (error)
        return <div className="text-center text-red-500">خطأ في تحميل الإعلانات</div>;

    return (
        <div className="w-full overflow-hidden">
            <div
                ref={scrollRef}
                className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth"
            >
                {data?.items?.map((ad: Advertisement) => (
                    <a
                        key={ad.id}
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
        </div>
    );
}

export default Abs;
