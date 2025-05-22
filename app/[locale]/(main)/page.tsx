import Company from "@/app/_components/Company";

export default function Home() {
  return (
    <div className="w-full grid grid-cols-3 gap-4 justify-center items-center h-screen">
      <Company />
    </div>
  );
}