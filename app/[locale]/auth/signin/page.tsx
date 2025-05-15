'use client'
import { Button } from "@/app/_components/Button";
import { burgerMenuSvg, IsnadSvg, mobilelogin, NotificationSvg } from "@/public/svg/login";
import { useState } from "react";

function Page() {
  const [isSignin, setIsSignin] = useState(false)
  function signinwithphone() {
    setIsSignin(true)
  }
  return (
    <div className="background-login h-[100dvh] flex justify-between   flex-col items-center px-4 py-12">
      {/* <div
        className="w-full absolute top-0 left-0 h-full flex-shrink-0 pointer-events-none"

        style={{
          background: "linear-gradient(180deg, rgba(8, 24, 47, 0.10) 0%, rgba(8, 24, 47, 0.90) 54.18%)",
          color: "#FFFFFF"
        }}
      ></div> */}
      <div
        className="w-full absolute top-0 z-1 left-0 h-full flex-shrink-0 pointer-events-none"
        style={{
          background:
            `linear-gradient(180deg, rgba(8, 24, 47, ${isSignin ? "0.10" : "0.00"}) ${isSignin ? "0%" : "50%"},  ${isSignin ? "rgba(8, 24, 47, 0.90) 54.18%" : "#08182F 91.19%"} )`,
        }}
      ></div>
      <div className="flex justify-between items-center w-[398px] h-[47px] relative z-10">
        <Component2>
          {NotificationSvg}
        </Component2>
        {IsnadSvg}
        <Component2>
          {burgerMenuSvg}
        </Component2>
      </div>
      <div className="flex flex-col items-center gap-[29px] w-[398px] relative z-10 ">
        <div className="flex flex-col items-start gap-4 w-[341.273px]">
          <p className="self-stretch text-center typography-title-24-light text-white">
            Finding your ideal property has never been easier
          </p>
          <p className="self-stretch text-center typography-body-14-medium text-white">
            Sign in to your account to continue
          </p>
        </div>
        <div className="flex flex-col items-start gap-4 self-stretch">
          <Button size="lg" className="w-full" onClick={() => signinwithphone()}>
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
  );
}
function Component2({ children }: { children: React.ReactNode; }) {
  return (
    <div className="flex items-center gap-2 px-3 py-[11px] rounded border border-white/10 bg-white/5 backdrop-blur-[8.5px]">
      {children}
    </div >
  )
}
export default Page;
