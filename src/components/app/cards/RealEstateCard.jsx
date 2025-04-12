"use  client";
import React, { useState } from "react";

import { IconlyLocation } from "../icons/Location";
import BorderIconBtn from "../reusable/BorderIconBtn";
import { IconlyDoublebed3 } from "../icons/Bath";
import { Iconlyheartlike } from "../icons/heartLike";

export default function RealEstateCard() {
  const [isLiked, setIsLiked] = useState(false);
  return (
    <div
      className="h-[22rem] w-full rounded-[16px] border-cardSimpleBorder border p-4"
      style={{
        background: `
            linear-gradient(180deg, rgba(8, 24, 47, 0.00) 40%, rgba(8, 24, 47, 0.83) 76%, #08182F),
            url('/images/1.jpg') center/cover no-repeat
            `,
        backdropFilter: "blur(8.5px)",
      }}
    >
      <div className="flex flex-col items-start justify-between h-full text-white relative">
        <div
          className="absolute left-2 top-2 cursor-pointer"
          onClick={() => setIsLiked(!isLiked)}
        >
          <Iconlyheartlike fillColor={isLiked ? "#df1111" : "transparent"} />
        </div>
        <p>2000$ / بالشهر</p>
        <div className="flex flex-col gap-2">
          <p>شقة سكنية في المنصور</p>
          <div className="flex gap-2 text-primary-0">
            <IconlyLocation color="#B8C6E3" />
            <p>بغداد/اليرموك/شارع نادي الصيد</p>
          </div>
          <div className="flex gap-2">
            <BorderIconBtn text="2" IconComponent={IconlyDoublebed3} />
            <BorderIconBtn text="300م" IconComponent={IconlyDoublebed3} />
            <BorderIconBtn text="2" IconComponent={IconlyDoublebed3} />
            <BorderIconBtn text="2" IconComponent={IconlyDoublebed3} />
          </div>
        </div>
      </div>
    </div>
  );
}
