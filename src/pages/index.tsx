import {
  CallToAction,
  Features,
  Footer,
  Header,
  Hero,
  HowItWorks,
  Mission,
  WhyItMatters,
} from "@/modules/landing";
import { SeoHead } from "@/modules/shared";
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Landing.Hero");

  return (
    <>
      <SeoHead title={t("title")} description={t("subtitle")} />
      <main>
        <Header />
        <Hero />
        <Mission />
        <HowItWorks />
        <Features />
        <WhyItMatters />
        <CallToAction />
        <Footer />
      </main>
    </>
  );
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`/public/locales/${locale}/translation.json`))
        .default,
    },
  };
}
