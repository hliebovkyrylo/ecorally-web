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

export default function Home() {
  return (
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
  );
}
