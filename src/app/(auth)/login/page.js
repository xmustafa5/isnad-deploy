import { Button } from "@/components/ui/button";
import { Smartphone } from "lucide-react";
import React from "react";

export default function page() {
  return (
    <div
      className="flex items-center justify-center w-full min-h-screen p-8"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, #08182F00, #08182F), url('/images/login-bg-3.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative isolate w-[31rem] h-[28rem]">
        {/* Add 'isolate' to create a new stacking context */}
        {/* Blur Box - Rendered FIRST */}
        <div className="blur-box opacity-90 absolute w-[31rem] h-[27rem] top-0 z-0"></div>
        {/* Content - Rendered SECOND with z-10 */}
        <div className="flex items-center justify-center flex-col gap-4 text-white z-10 relative w-[31rem] h-[28rem] px-8">
          <div className="text-xl">
            <p className="text-center">البحث عن عقارك</p>
            <p className="text-center">المثالي لم يكن أسهل من الآن ! </p>
          </div>

          <p className="text-sm max-w-sm text-center font-[300]">
            استمتع بتجربة فريدة للعثور على العقارات التي تناسب احتياجاتك بكل
            سهولة وراحة
          </p>

          <Button className="w-full mt-2" size="lg">
            <span>سجل بواسطة رقم الهاتف</span>
            <Smartphone />
          </Button>

          <Button className="w-full" size="lg" variant="outline">
            <span>سجل بواسطة google</span>
            <Smartphone />
          </Button>

          <Button className="w-full" size="lg" variant="link">
            دخول للمنصة كضيف
          </Button>
        </div>
      </div>
    </div>
  );
}
