import React from 'react';

interface CityDetailsProps {
    city: any;
    onClose: () => void;
}

const CityDetails: React.FC<CityDetailsProps> = ({ city, onClose }) => {
    if (!city) return null;
    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(0,0,0,0.35)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <div style={{
                background: '#fff',
                borderRadius: 16,
                boxShadow: '0 8px 32px rgba(0,0,0,0.18)',
                padding: 32,
                minWidth: 340,
                maxWidth: 420,
                position: 'relative',
                textAlign: 'center',
            }}>
                <button
                    onClick={onClose}
                    style={{
                        position: 'absolute',
                        top: 16,
                        right: 16,
                        background: '#f5f6fa',
                        border: 'none',
                        borderRadius: '50%',
                        width: 32,
                        height: 32,
                        fontSize: 18,
                        cursor: 'pointer',
                        boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
                    }}
                    aria-label="Close"
                >
                    ×
                </button>
                <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 12 }}>{city.name.ar}</h2>
                <img src={city.logo} alt={city.name} style={{ width: 160, height: 100, objectFit: 'cover', borderRadius: 12, marginBottom: 16 }} />
                <div style={{ color: '#444', marginBottom: 8 }}>الوصف: {city.description.ar}</div>
                <div style={{ color: '#444', marginBottom: 8 }}>النوع: {city.type?.label}</div>
                <div style={{ color: '#444', marginBottom: 8 }}>عدد الوحدات: {city.total_units}</div>
                <div style={{ color: '#444', marginBottom: 8 }}>الموقع: {city.location}</div>
                <div style={{ color: '#444', marginBottom: 8 }}>السعر: {city.min_price} - {city.max_price}</div>
                <div style={{ color: '#444', marginBottom: 8 }}>الحالة: {city.built_status?.label}</div>
                <div style={{ color: '#444', marginBottom: 8 }}>الظهور: {city.is_visible?.label}</div>
                <div style={{ color: '#444', marginBottom: 8 }}>عدد السنوات: {city.years}</div>
                <div style={{ color: '#444', marginBottom: 8 }}>حصري: {city.is_exclusive?.lable}</div>
                <div style={{ color: '#888', fontSize: 13, marginTop: 10 }}>أضيف بواسطة: {city.added_by}</div>
            </div>
        </div>
    );
};

export default CityDetails;
