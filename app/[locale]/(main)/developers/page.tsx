
"use client";
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getDevelopers } from "@/actions/developers";
import DeveloperCard, { Developer } from "./_components/DeveloperCard";
import CityDetails from "./_components/CityDetails";


const DevelopersPage = () => {
    const [selectedCity, setSelectedCity] = useState<any>(null);
    const { data, isLoading, error } = useQuery({
        queryKey: ["developers"],
        queryFn: () => getDevelopers(),
    });

    const handleCityClick = (city: any) => {
        setSelectedCity(city);
    };

    const handleCloseCity = () => {
        setSelectedCity(null);
    };

    return (
        <div
            style={{
                minHeight: '100vh',
                padding: '40px 0',
            }}
        >
            <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 16px' }}>
                <h1 style={{
                    textAlign: 'center',
                    fontSize: 36,
                    fontWeight: 800,
                    color: '#fff',
                    marginBottom: 32,
                    letterSpacing: 1.5,
                }}>
                    المطورين
                </h1>
                {isLoading && <div style={{ textAlign: 'center', color: '#888', fontSize: 18 }}>جار التحميل...</div>}
                {error && <div style={{ textAlign: 'center', color: '#e74c3c', fontSize: 18 }}>خطأ في تحميل المطورين</div>}
                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 32,
                    justifyContent: 'center',
                }}>
                    {/* @ts-ignore */}
                    {data?.items?.map((developer: Developer) => (
                        <DeveloperCard key={developer.id} developer={developer} onCityClick={handleCityClick} />
                    ))}
                </div>
            </div>
            {selectedCity && (
                <CityDetails city={selectedCity} onClose={handleCloseCity} />
            )}
        </div>
    );
};

export default DevelopersPage;
