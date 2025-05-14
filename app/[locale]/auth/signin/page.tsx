import { Button } from "@/app/_components/Button";
import { mobilelogin } from "@/public/svg/login";

function Page() {
  return (
    <div className="background-login h-[100dvh] flex justify-center items-end">
      <div
        className="w-full absolute top-0 left-0 h-full flex-shrink-0 pointer-events-none"
        style={{ background: 'linear-gradient(180deg, rgba(8, 24, 47, 0.00) 50%, #08182F 91.19%)' }}
      ></div>
      <div className="flex flex-col items-center gap-[29px] w-[398px] ">
        <div className="flex flex-col items-start gap-4 w-[341.273px]">
          <p className="self-stretch text-center typography-title-24-light text-white">Finding your ideal property has never been easier</p>
          <p className="self-stretch text-center typography-body-14-medium text-white">Sign in to your account to continue</p>
        </div>
        <div className="flex flex-col items-start gap-4 self-stretch">
          <Button size="lg" className="w-full">Sign up with phone number {mobilelogin}</Button>
          <Button variant="gray" size="lg" className="w-full">Sign up with Google</Button>
          <Button variant="default" mode="text" size="lg" className="w-full">Login as a guest</Button>
        </div>
        <div className="flex flex-col items-start gap-4 self-stretch"></div>
      </div>
    </div>
  );
}

export default Page;
