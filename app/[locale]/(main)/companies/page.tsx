import WrapperQueryCompanies from "./_components/WrapperQueryCompanies";

export default async function Home({ params }: { params: any }) {
  if (params.locale !== "en" && params.locale !== "ar") {
    throw new Error("Invalid locale");
  }
  return (
    <WrapperQueryCompanies
      locale={params.locale}
    />
  );
}
