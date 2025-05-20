'use client'
import { Button } from "@/app/_components/Button";
import { burgerMenuSvg, iraqflaq, IsnadSvg, mobilelogin, NotificationSvg, svgArrow } from "@/public/svg/login";
import { useState, useRef, useEffect } from "react";

function Page() {

  const [step, setStep] = useState(3)
  return (
    <div className="background-login h-[100dvh] flex justify-between   flex-col items-center px-4 py-12">
      <div
        className="w-full absolute top-0 z-1 left-0 h-full flex-shrink-0 pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, rgba(8, 24, 47, 0.40) 13.08%, rgba(25, 76, 149, 0.00) 100%)'
        }}
      ></div>
      <div className="flex flex-col relative z-10 justify-center md:justify-center h-full max-w-[398px] md:min-w-[494px] ">
        <div className="md:h-fit h-full  md:p-10 md:rounded-4xl overflow-hidden relative z-10">
          <div className="md:absolute md:inset-0 md:bg-[rgba(0,0,0,0.08)] md:backdrop-blur-[20px]"></div>
          {step === 1 ? <Step1 setStep={setStep} /> : step === 2 ? <Step2 setStep={setStep} /> : <Step3 />}
        </div>
      </div>
    </div>
  );
}
function Step1({ setStep }: { setStep: (step: number) => void }) {
  return (
    <div className=" h-full md:h-fit flex flex-col justify-between">
      <div className="flex justify-between  md:hidden items-center h-[47px] relative z-10">
        <Component2>
          {NotificationSvg}
        </Component2>
        {IsnadSvg}
        <Component2>
          {burgerMenuSvg}
        </Component2>
      </div>
      <div className="flex flex-col items-center gap-[29px] md:gap-[48px] w-full  relative z-10 ">
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
function Step2({ setStep }: { setStep: (step: number) => void }) {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
      <div className="flex flex-col items-end gap-4 w-[356px] mb-[32px]">
        <p className="self-stretch typography-title-28-light text-white">
          Enter your phone number
        </p>
        <p className="self-stretch typography-body-14-light text-white">
          Enter your phone number to receive the verification code via WhatsApp or SMS.
        </p>
      </div>
      <InputPhoneNumber />
      <div className="flex flex-col gap-4 mt-[32px] min-w-[398px]">
        <Button size="lg" className="w-full" onClick={() => setStep(3)}>
          Send via WhatsApp.
        </Button>
        <Button size="lg" variant="buttons" className="w-full" onClick={() => setStep(3)}>
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
        {iraqflaq}
        <p className="text-right text-[14px] font-medium leading-[140%] text-[#08182F] font-[Alilato]">
          IRAQ
        </p>
        {/* {svgArrow("up")} */}
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
        <input type="text" className=" relative z-10 text-[#fff] focus:outline-none font-[Alilato] text-[20px] not-italic font-semibold leading-[140%] placeholder:text-[#AEBACD]" placeholder="Enter your phone number" />
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
function Step3() {
  const [verificationCode, setVerificationCode] = useState(['', '', '', '', '']);
  const inputRefs = Array(5).fill(0).map(() => useRef<HTMLInputElement>(null));
  const [timer, setTimer] = useState(45);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer(prev => prev - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const handleInputChange = (index: number, value: string) => {
    if (value.length <= 1) {
      const newCode = [...verificationCode];
      newCode[index] = value;
      setVerificationCode(newCode);

      // Move to next input if value is entered
      if (value && index < 4) {
        inputRefs[index + 1].current?.focus();
      }
    }
  };

  return (
    <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
      <div className="flex flex-col items-center gap-4 w-full mb-8">
        <div className="flex items-center justify-center w-[64px] h-[64px] rounded-full bg-[#E65C40] mb-4">
          <LockIcon className="text-white" />
        </div>
        <p className="text-center text-white text-xl font-medium">
          Enter verification code
        </p>
        <p className="text-center text-[#AEBACD] text-sm">
          You received a message on your phone number:
        </p>
        <p className="text-center text-white text-sm">
          +964 0771234
        </p>
      </div>

      <div className="flex gap-3 mb-4">
        {verificationCode.map((digit, index) => (
          <div
            key={index}
            className="w-[52px] h-[52px] rounded-lg bg-[#1F2937] flex items-center justify-center"
          >
            <input
              ref={inputRefs[index]}
              type="password"
              maxLength={1}
              value={digit}
              onChange={(e) => handleInputChange(index, e.target.value)}
              className="w-full h-full bg-transparent text-center text-white text-2xl focus:outline-none caret-white"
              inputMode="numeric"
              pattern="[0-9]*"
            />
          </div>
        ))}
      </div>

      <div className="flex items-center gap-2">
        <button
          className={`text-sm ${timer > 0 ? 'text-[#AEBACD]' : 'text-white'}`}
          disabled={timer > 0}
        >
          Resend code
        </button>
        {timer > 0 && (
          <span className="text-[#AEBACD] text-sm">
            {`00:${timer.toString().padStart(2, '0')}`}
          </span>
        )}
      </div>
    </div>
  );
}

const LockIcon = ({ className }: { className?: string }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 13C11.4477 13 11 13.4477 11 14C11 14.5523 11.4477 15 12 15C12.5523 15 13 14.5523 13 14C13 13.4477 12.5523 13 12 13Z"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M18 8H17V6C17 3.24 14.76 1 12 1C9.24 1 7 3.24 7 6V8H6C4.9 8 4 8.9 4 10V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V10C20 8.9 19.1 8 18 8ZM12 17C10.89 17 10 16.1 10 15C10 13.89 10.89 13 12 13C13.1 13 14 13.89 14 15C14 16.1 13.11 17 12 17ZM15.1 8H8.9V6C8.9 4.29 10.29 2.9 12 2.9C13.71 2.9 15.1 4.29 15.1 6V8Z"
      fill="currentColor"
    />
  </svg>
);

export default Page;
