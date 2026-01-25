"use client";

import Benefits from "./components/sections/Benefits";
import ChoosePlan from "./components/sections/ChoosePlan";
import Footer from "./components/sections/Footer";
import Hero from "./components/sections/Hero";
import Partner from "./components/sections/Partner";
import ProductFeatures from "./components/sections/ProductFeatures";
import TrustBarSection from "./components/sections/TrustBarSection";
import useScroll from "./hooks/useScroll";

export default function Home() {
  useScroll();

  return (
    <>
      <Hero />
      <Partner />
      <TrustBarSection />
      <ProductFeatures />
      <Benefits />
      <ChoosePlan />
      <Footer />
    </>
  );
}
