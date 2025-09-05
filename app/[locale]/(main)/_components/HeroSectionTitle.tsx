import { Button } from "@/app/_components/Button"

const HeroSectionTitle = () => {

    return (
        <div className="flex w-1/2 z-10 flex-col justify-center  gap-12">
            <div className="flex flex-col justify-center  gap-6 ">

                <p className="w-[569px] text-white text-right font-[var(--main-font,'Expo Arabic')] text-[48px] not-italic font-normal leading-normal">
                    شركة عراقية مختصة في مجال التسويق العقاري
                </p>
                <p className="text-white text-right font-[Alilato] text-[16px] not-italic font-light leading-[150%] w-[412px] [font-feature-settings:'liga'_off,'clig'_off]">
                    "اكتشف عقارات فاخرة تجمع بين التصميم الأنيق، الموقع المثالي، والمرافق المتكاملة لتناسب أسلوب حياتك."
                </p>

            </div>
            <div className="flex  items-center gap-4">
                <Button >
                    ابدء البحث الان
                </Button>
                <Button variant="gray">
                    تواصل معنا
                </Button>
            </div>

        </div>

    )
}
export default HeroSectionTitle