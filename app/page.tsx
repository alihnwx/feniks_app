import type { Metadata } from "next";

import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import SponsorsMarquee from "@/components/SponsorsMarquee";
import StatsBanner from "@/components/StatsBanner";
import Values from "@/components/Values";

export const metadata: Metadata = {
  title: "Феникс Логистикс — международные грузоперевозки",
  description:
    "Международные грузоперевозки под ключ: маршруты, таможенное оформление, складская логистика и доставка.",
};

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Values />
      <Services />
      <StatsBanner />
      <Contact />
      <SponsorsMarquee />
      <Footer />
    </>
  );
}
