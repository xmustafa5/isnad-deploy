import Company from "@/app/_components/Company";

export default function Home() {
  return (
    <div className="w-full flex flex-wrap flex-1 p-4 gap-4 bg-secondary-950 h-screen">
      <div className="flex flex-wrap gap-4">
        {Array.from({ length: 10 }).map((_, index) => (
          <Company key={index} />
        ))}
      </div>
    </div>
  );
}