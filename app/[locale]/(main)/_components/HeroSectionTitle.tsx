import { Button } from "@/app/_components/Button"
import Link from "next/link"

const HeroSectionTitle = () => {

    return (
        <div className="flex w-1/2 z-10 flex-col justify-center  gap-12 hidden md:flex">
            <div className="flex flex-col justify-center  gap-6 ">

                <p className="lg:w-[569px] w-[300px]  text-white text-right font-[var(--main-font,'Expo Arabic')] text-[38px] lg:text-[48px] not-italic font-normal leading-normal">
                    شركة عراقية مختصة في مجال التسويق العقاري
                </p>
                <p className="text-white text-right  text-[16px] w-[300px] font-light leading-[150%] lg:w-[412px] [font-feature-settings:'liga'_off,'clig'_off]">
                    "اكتشف عقارات فاخرة تجمع بين التصميم الأنيق، الموقع المثالي، والمرافق المتكاملة لتناسب أسلوب حياتك."
                </p>

            </div>
            <div className="flex  items-center gap-4">
                <Button asChild className="rounded-[60px]" >
                    <Link href="/residential-complexes">
                        ابدء البحث الان
                    </Link>
                </Button>
                {/* <Button variant="gray">
                    تواصل معنا
                </Button> */}
            </div>

        </div>

    )
}
export default HeroSectionTitle