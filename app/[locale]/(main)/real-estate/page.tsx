import React from 'react'
import WrapperRealEstate from './components/WrapperRealEstate'
import { getRealEstates } from '@/actions/realEstates'

export default async function page() {
    const data = await getRealEstates()
    return (
        <WrapperRealEstate initialData={data} />
    )
}
