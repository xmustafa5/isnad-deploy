"use client";
import AllRealEstateCard from "@/components/app/cards/AllRealEstateCard";
import RealEstateCard from "@/components/app/cards/RealEstateCard";
import RealEstateCardBordered from "@/components/app/cards/RealEstateCardBordered";
import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { IconlyArrowleftSM } from "@/components/app/icons/ArrowLeftSM";

export default function Home() {
  return (
    <div className="w-full min-h-screen p-6">
      {/* <div className="grid grid-cols-12 gap-4 p-4">
        <div className="col-span-12 md:col-span-3">
          <RealEstateCardBordered
            title="عقار معيار"
            price="$2,000"
            description="شقة سكنية في المخبور"
            address="بعد 1 نيرموك/شارع لاختي الحديد"
            details={["300", "2", "2"]}
          />
        </div>
        <div className="col-span-12 md:col-span-3">
          <RealEstateCardBordered
            title="عقار معيار"
            price="$2,000"
            description="شقة سكنية في المخبور"
            address="بعد 1 نيرموك/شارع لاختي الحديد"
            details={["300", "2", "2"]}
          />
        </div>
        <div className="col-span-12 md:col-span-3">
          <RealEstateCard
            title="عقار معيار"
            price="$2,000"
            description="شقة سكنية في المخبور"
            address="بعد 1 نيرموك/شارع لاختي الحديد"
            details={["300", "2", "2"]}
          />
        </div>
        <div className="col-span-12 md:col-span-3">
          <RealEstateCard
            title="عقار معيار"
            price="$2,000"
            description="شقة سكنية في المخبور"
            address="بعد 1 نيرموك/شارع لاختي الحديد"
            details={["300", "2", "2"]}
          />
        </div>
      </div> */}

      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-6 md:col-span-3">
          <AllRealEstateCard
            headingText="عرض  المجمعات"
            number="10"
            text="مجمعات سكنية تثق بنا وبالخدمات التي نقدمها"
            imagePath="/images/3.jpg"
            isComplex={true}
          />
        </div>
        <div className="col-span-6 md:col-span-3">
          <AllRealEstateCard
            headingText="عرض كل العقارات"
            number="230"
            text="عقارات مميزة متاحة الآن للتأجير أو الشراء"
            imagePath="/images/2.jpg"
          />
        </div>
      </div>

      <div className="flex items-center justify-between mt-8 mb-4">
        <p className="text-2xl text-white">عقارات مميزة</p>
        <div className="flex items-center gap-1 text-secondary-orange cursor-pointer">
          <span>عرض الكل</span>
          <IconlyArrowleftSM color="var(--secondary-orange)" />
        </div>
      </div>

      <div className="flex justify-center rtl">
        <Carousel
          opts={{
            align: "start",
            dragFree: true,
          }}
          className="w-full rtl"
        >
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem
                key={index}
                className="basis-2/3 md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1 rtl">
                  <RealEstateCardBordered
                    title="عقار معيار"
                    price="$2,000"
                    description="شقة سكنية في المخبور"
                    address="بعد 1 نيرموك/شارع لاختي الحديد"
                    details={["300", "2", "2"]}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* <CarouselPrevious />
          <CarouselNext /> */}
        </Carousel>
      </div>
    </div>
  );
}
