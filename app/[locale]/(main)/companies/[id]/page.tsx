import React from "react";
import WrapperQueryDetailsCompany from "../_components/WrapperQueryDetailsCompany";

export default function Page({ params }: any) {
  return (
    <WrapperQueryDetailsCompany
      id={params.id}
      locale={params.locale as "ar" | "en"}
    />
  );
}