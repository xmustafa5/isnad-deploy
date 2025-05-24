import { getCompanies } from "@/actions/componies";
import Company from "@/app/_components/Company";
import WrapperQueryCompanies from "./_components/WrapperQueryCompanies";

export default async function Home({ params }: { params: { locale: string } }) {
  const companies = await getCompanies();
  const locale = params.locale;
  console.log(companies);
  return (
    <WrapperQueryCompanies initialCompanies={companies} locale={locale} />
  );
}