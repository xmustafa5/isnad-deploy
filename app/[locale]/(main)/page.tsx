import { getCompanies } from "@/actions/componies";
import WrapperQueryCompanies from "./_components/WrapperQueryCompanies";

export default async function Home({ params }: { params: { locale: string } }) {
  const companies = await getCompanies();
  if (params.locale !== 'en' && params.locale !== 'ar') {
    throw new Error('Invalid locale');
  }
  return (
    <WrapperQueryCompanies initialCompanies={companies} locale={params.locale} />
  );
}