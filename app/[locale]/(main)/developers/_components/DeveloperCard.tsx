import Link from 'next/link';
import React from 'react';

export interface Developer {
    id: string;
    name: string;
    logo: string;
    is_visible: { value: number; label: string };
    complexes: any[];
    cities: any[];
}

interface DeveloperCardProps {
    developer: Developer;
    onCityClick: (city: any) => void;
}

const DeveloperCard: React.FC<any> = ({ developer, onCityClick }) => {
    return (
        <Link
            href={`/developers/${developer.id}`}
            className="developer-card stroke-bg-bg-2 border border-b-bg-black"
            style={{
                borderRadius: 16,
                boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
                padding: 24,
                minWidth: 260,
                maxWidth: 320,
                margin: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                transition: 'box-shadow 0.2s',
            }}
        >
            <img
                src={developer.logo}
                alt={developer.name.ar}
                style={{
                    width: 96,
                    height: 96,
                    objectFit: 'cover',
                    borderRadius: '50%',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
                    marginBottom: 16,
                }}
            />

            <h2 style={{ fontSize: 22, fontWeight: 700, margin: '0 0 8px 0', color: '#fff' }}>{developer.name.ar}</h2>
            <div style={{ color: '#888', fontSize: 14, marginBottom: 12 }}>
                الحالة: <span style={{ color: developer.is_visible.value === 1 ? '#27ae60' : '#e74c3c', fontWeight: 600 }}>{developer.is_visible.label.ar}</span>
            </div>
            {developer.cities && developer.cities.length > 0 && (
                <div style={{ width: '100%' }}>
                    <h4 style={{ fontSize: 16, margin: '12px 0 6px 0', color: '#444' }}>المدن:</h4>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                        {developer.cities.map((city: any) => (
                            <li key={city.id}>
                                <button
                                    onClick={() => onCityClick(city)}
                                    style={{
                                        background: '#f5f6fa',
                                        border: '1px solid #dcdde1',
                                        borderRadius: 8,
                                        padding: '6px 14px',
                                        fontSize: 14,
                                        color: '#273c75',
                                        cursor: 'pointer',
                                        transition: 'background 0.2s, color 0.2s',
                                    }}
                                    onMouseOver={e => (e.currentTarget.style.background = '#dff9fb')}
                                    onMouseOut={e => (e.currentTarget.style.background = '#f5f6fa')}
                                >
                                    {city.name.ar}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </Link>
    );
};

export default DeveloperCard;
