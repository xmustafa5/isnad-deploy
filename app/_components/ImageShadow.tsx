import Image from 'next/image'
import React from 'react'

export default function ImageShadow() {
    return (
        <div className="absolute w-[341.184px] h-[243.939px] rtl:right-[-25.171px] ltr:left-[-25.171px] ltr:scale-x-[-1] bottom-[-31.184px]">
            <Image src={"/images/blurcompany.png"} alt='company' fill className='object-cover' />
        </div>
    )
}
