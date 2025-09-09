import Link from "next/link";


const CityAndComplexe = () => {

    return (
        <div className='flex gap-4 flex-col z-10 lg:w-1/2 '>
            <h1 className='text-xl font-bold text-white'>تعرف على مدننا ومجمعاتنا</h1>
            <div className='flex gap-6 w-full'>
                <ComplexCard />
                <CityCard />
            </div>
        </div>
    )
}
export default CityAndComplexe
function ComplexCard() {
    return (
        <div className="relative w-full  h-80 rounded-2xl overflow-hidden shadow-lg">
            {/* Background Image */}
            <img
                src="/images/building.jpg" // replace with your image path
                alt="Building"
                className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Overlay */}
            <div
                className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,24,47,0)_41.78%,rgba(8,24,47,0.9)_84.1%),url('/images/building.jpg')] bg-cover bg-center"
            />
            {/* Content */}
            <div className="relative h-full flex flex-col justify-end p-4 text-white ">
                {/* Top Button */}
                <div className='flex  items-end justify-end absolute w-full top-10 left-0'>

                    <Link
                        href="/residential-complexes"
                        className="self-start bg-white/20 backdrop-blur-md text-white text-sm px-3 py-1 hover:bg-white/30 transition"
                    >
                        ← عرض المجمعات
                    </Link>
                </div>

                {/* Bottom Content */}
                <div className="text-center">
                    <p className="text-4xl font-bold">10+</p>
                    <p className="mt-2 text-sm leading-relaxed">
                        مجمعات سكنية تثق بنا <br />
                        والخدمات التي نقدمها
                    </p>
                </div>
            </div>
        </div>
    );
}

function CityCard() {
    return (
        <div className="relative w-full h-80 rounded-2xl overflow-hidden shadow-lg">
            {/* Background Image */}
            <img
                src="/images/city2.jpg" // replace with your city image path
                alt="City"
                className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Overlay */}
            <div
                className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0)_50%,var(--bg-primary,rgba(197,115,64,0.9))_90%),url('/images/city.jpg')] bg-cover bg-center"
            />

            {/* Content */}
            <div className="relative h-full flex flex-col justify-end p-4 text-white">
                {/* Top Button */}
                <div className='flex  items-end justify-end absolute w-full top-10 left-0'>
                    <Link
                        href="/cities"
                        className="self-start bg-white/20 backdrop-blur-md text-white text-sm px-3 py-1 hover:bg-white/30 transition"
                    >
                        ← عرض المدن
                    </Link>
                </div>

                {/* Bottom Content */}
                <div className="text-center">
                    <p className="text-4xl font-bold">5+</p>
                    <p className="mt-2 text-sm leading-relaxed">
                        مدن رئيسية نعمل بها <br />
                        والمشاريع التي نقدمها
                    </p>
                </div>
            </div>
        </div>
    );
}