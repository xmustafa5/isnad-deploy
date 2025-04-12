// components/RealEstateCard.jsx
import React from "react";
import { IconlyFire } from "../icons/Fire";

import RealEstateCard from "./RealEstateCard";

const RealEstateCardBordered = ({
  title,
  price,
  description,
  address,
  details,
}) => {
  return (
    <div className="border-primary border-2 pt-4 p-1 rounded-[20px] overflow-hidden relative">
      <img
        src="/images/up-fire.svg"
        alt="fire"
        className="absolute top-0 right-2"
      />
      <div className="flex items-center justify-start gap-3 ms-4 text-white mb-3">
        <IconlyFire size={30} />
        <span>عقار مميز</span>
      </div>
      {/* <img src="/images/1.jpg" alt="ss" /> */}
      <RealEstateCard />
    </div>
  );
};

// Default props
RealEstateCardBordered.defaultProps = {
  details: ["300", "2", "2"],
};

export default RealEstateCardBordered;
