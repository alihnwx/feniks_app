import type { Metadata } from "next";

import Contact from "@/components/modules/Contact";
import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import Hero from "@/components/modules/Hero";
import Services from "@/components/modules/Services";
import SponsorsMarquee from "@/components/modules/SponsorsMarquee";
import StatsBanner from "@/components/modules/StatsBanner";
import Values from "@/components/modules/Values";

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
