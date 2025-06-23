import Navbar from "@/app/_components/Navbar";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='bg-secondary-950 h-screen'>
      <div className="bg-[linear-gradient(180deg,rgba(8,24,47,0.4)_13.08%,rgba(25,76,149,0)_100%)]">
        <Navbar />
      </div>
      <div className='px-4 md:px-[72px] xl:pt-6 h-[88vh] overflow-y-auto'>
        {children}
      </div>
    </div>
  );
}
