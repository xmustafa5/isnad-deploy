import React from "react";
import { IconlyArrowleftSM } from "../icons/ArrowLeftSM";

export default function AllRealEstateCard({
  headingText,
  number,
  text,
  imagePath,
  isComplex = false,
}) {
  return (
    <div
      className="h-[22.5rem] w-full rounded-[16px] py-6"
      style={{
        background: isComplex
          ? `
            linear-gradient(180deg, rgba(8, 24, 47, 0.00) 41.78%, rgba(8, 24, 47, 0.90) 84.1%),
            url(${imagePath}) lightgray 50% / cover no-repeat
            `
          : `
            linear-gradient(180deg, rgba(255, 255, 255, 0.00) 50%, rgba(197, 115, 64, 0.90) 90%),
            url(${imagePath}) center/cover no-repeat
            `,
        // backdropFilter: "blur(8.5px)",
      }}
    >
      <div className="flex flex-col justify-between h-full">
        <div className="ltr">
          <div className="blur-btn flex items-center gap-4 text-white text-lg w-[85%] p-2 rtl">
            <span>{headingText}</span>
            <IconlyArrowleftSM />
          </div>
        </div>

        <div className="text-white m-4">
          <div className="text-3xl">+ {number}</div>
          <div className="text-xl max-w-56">{text}</div>
        </div>
      </div>
    </div>
  );
}
