import React from 'react'
import WrapperQueryDetailsCompany from '../_components/WrapperQueryDetailsCompany'

export default function page({ params }: { params: { id: string, locale: string } }) {

    return (
        <WrapperQueryDetailsCompany id={params.id} locale={params.locale as "ar" | "en"} />
    )
}
