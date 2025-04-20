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
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>EcoRally - Restore Ukraine’s Beauty</title>
        <meta
          name="description"
          content="Ukraine’s forests, rivers, and fields face growing threats from pollution—plastic waste, industrial debris, and neglected landfills harm our environment and communities. EcoRally is here to change that. We’re building a platform where anyone, from city residents to rural volunteers, can take action to clean up their surroundings.
            Our vision is a Ukraine where every region thrives in its natural beauty. EcoRally connects people passionate about environmental change, enabling them to organize cleanup events, share resources, and inspire others. Whether it’s clearing a park in Dnipro, a beach in Odesa, or a village roadside in Ternopil, every step forward counts.
            We’re starting small but dreaming big. By empowering communities to act locally, we aim to create a nationwide movement for a cleaner, healthier Ukraine."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="EcoRally - Restore Ukraine’s Beauty"
        />
        <meta
          property="og:description"
          content="Ukraine’s forests, rivers, and fields face growing threats from pollution—plastic waste, industrial debris, and neglected landfills harm our environment and communities. EcoRally is here to change that. We’re building a platform where anyone, from city residents to rural volunteers, can take action to clean up their surroundings.
            Our vision is a Ukraine where every region thrives in its natural beauty. EcoRally connects people passionate about environmental change, enabling them to organize cleanup events, share resources, and inspire others. Whether it’s clearing a park in Dnipro, a beach in Odesa, or a village roadside in Ternopil, every step forward counts.
            We’re starting small but dreaming big. By empowering communities to act locally, we aim to create a nationwide movement for a cleaner, healthier Ukraine."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ecorally.vercel.app/" />
        <meta
          property="og:image"
          content="https://ecorally.vercel.app/og.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="EcoRally - Restore Ukraine’s Beauty"
        />
        <meta
          name="twitter:description"
          content="Ukraine’s forests, rivers, and fields face growing threats from pollution—plastic waste, industrial debris, and neglected landfills harm our environment and communities. EcoRally is here to change that. We’re building a platform where anyone, from city residents to rural volunteers, can take action to clean up their surroundings.
            Our vision is a Ukraine where every region thrives in its natural beauty. EcoRally connects people passionate about environmental change, enabling them to organize cleanup events, share resources, and inspire others. Whether it’s clearing a park in Dnipro, a beach in Odesa, or a village roadside in Ternopil, every step forward counts.
            We’re starting small but dreaming big. By empowering communities to act locally, we aim to create a nationwide movement for a cleaner, healthier Ukraine."
        />
        <meta
          name="twitter:image"
          content="https://ecorally.vercel.app/og.png"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
