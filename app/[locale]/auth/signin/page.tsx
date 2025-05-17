'use client'
import { Button } from "@/app/_components/Button";
import { burgerMenuSvg, IsnadSvg, mobilelogin, NotificationSvg, svgArrow } from "@/public/svg/login";
import { useState } from "react";

function Page() {

  const [step, setStep] = useState(1)
  return (
    <div className="background-login h-[100dvh] flex justify-between   flex-col items-center px-4 py-12">
      <div
        className="w-full absolute top-0 z-1 left-0 h-full flex-shrink-0 pointer-events-none"
        style={{
          background:
            `linear-gradient(180deg, rgba(8, 24, 47, ${step > 1 ? "0.10" : "0.00"}) ${step > 1 ? "0%" : "50%"},  ${step > 1 ? "rgba(8, 24, 47, 0.90) 54.18%" : "#08182F 91.19%"} )`,
        }}
      ></div>
      <div className="flex flex-col justify-between relative md:justify-center h-full min-w-[398px] md:max-w-[494px]">
        <div className="w-full flex flex-col h-full ">
          <div className="w-full h-full absolute "></div>
          <div className="flex justify-between bg-red-500  items-center h-full md:h-fit min-w-[398px] relative z-10">
            {step === 1 ? <Step1 setStep={setStep} /> : <Step2 />}
          </div>
        </div>
      </div>
    </div>
  );
}
function Step1({ setStep }: { setStep: (step: number) => void }) {
  return (
    <div className="flex flex-col justify-between md:justify-center h-full md:h-fit items-center w-full">
      <div className="flex justify-between  md:hidden items-center h-[47px] w-full relative z-10">
        <Component2>
          {NotificationSvg}
        </Component2>
        {IsnadSvg}
        <Component2>
          {burgerMenuSvg}
        </Component2>
      </div>
      <div className="flex flex-col items-center gap-[29px] w-full  relative z-10 ">
        <div className="flex flex-col items-start gap-4 w-[341.273px]">
          <p className="self-stretch text-center typography-title-24-light text-white">
            Finding your ideal property has never been easier
          </p>
          <p className="self-stretch text-center typography-body-14-medium text-white">
            Sign in to your account to continue
          </p>
        </div>
        <div className="flex flex-col items-start gap-4 self-stretch">
          <Button size="lg" className="w-full" onClick={() => setStep(2)}>
            Sign up with phone number {mobilelogin}
          </Button>
          <Button variant="gray" size="lg" className="w-full">
            Sign up with Google
          </Button>
          <Button variant="default" mode="text" size="lg" className="w-full">
            Login as a guest
          </Button>
        </div>
      </div>
    </div>
  )
}
function Step2() {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
      <div className="flex flex-col items-end gap-2 w-[356px] mb-[33px]">
        <p className="self-stretch typography-title-28-light text-white">
          Enter your phone number
        </p>
        <p className="self-stretch typography-body-14-light text-white">
          Enter your phone number to receive the verification code via WhatsApp or SMS.
        </p>
      </div>
      <InputPhoneNumber />
      <div className="flex flex-col gap-4 mt-[48px] min-w-[398px]">
        <Button size="lg" className="w-full">
          Send via WhatsApp.
        </Button>
        <Button size="lg" variant="gray" className="w-full">
          Send code
        </Button>
      </div>
    </div>
  )
}
function InputPhoneNumber() {
  return (
    <div className="flex min-w-[398px] flex-col gap-[-1]">
      <div className="flex relative items-center justify-end gap-2 px-5 py-2 rounded-t-lg bg-white w-fit">
        <p className="text-right text-[14px] font-medium leading-[140%] text-[#08182F] font-[Alilato]">
          IRAQ
        </p>
        {svgArrow("up")}
        <svg className="absolute -bottom-5 z-[2] " xmlns="http://www.w3.org/2000/svg" width="25" height="22" viewBox="0 0 25 22" fill="none">
          <path d="M12.7296 21.459L0.839632 0.864927L24.6196 0.864929L12.7296 21.459Z" fill="white" />
        </svg>
      </div>
      <div className="relative flex items-center gap-[18px] px-2 py-3 self-stretch rounded-br-[19px] rounded-bl-[19px] rounded-tr-[19px] border border-white/25 ">
        <div className="absolute inset-0 pointer-events-none backdrop-blur-[65px] rounded-br-[19px] rounded-bl-[19px] rounded-tr-[19px] z-[1]"></div>
        <div className="flex items-center justify-center gap-2 relative z-10 px-4 py-2 border-r border-[rgba(233,235,240,0.06)]">
          <p className="text-right text-[18px] font-medium leading-[140%] text-white relative z-10 font-[Alilato]">
            +964
          </p>
        </div>
        <input type="text" className=" relative z-10 text-[#fff] focus:outline-none font-[Alilato] text-[20px] not-italic font-semibold leading-[140%] placeholder:text-[#AEBACD]" />
      </div>

    </div>
  )
}
function Component2({ children }: { children: React.ReactNode; }) {
  return (
    <div className="flex items-center gap-2 px-3 py-[11px] rounded border border-white/10 bg-white/5 backdrop-blur-[8.5px]">
      {children}
    </div >
  )
}
export default Page;
