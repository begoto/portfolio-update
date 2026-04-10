import Hero from "@/pages/home/components/Hero";
import Navbar from "@/pages/home/components/Navbar";
import { Suspense, lazy } from "react";

const About = lazy(() => import("@/pages/home/components/About"));
const Competences = lazy(() => import("@/pages/home/components/Competences"));
const Contact = lazy(() => import("@/pages/home/components/Contact"));
const Footer = lazy(() => import("@/pages/home/components/Footer"));
const Portfolio = lazy(() => import("@/pages/home/components/Portfolio"));
const Services = lazy(() => import("@/pages/home/components/Services"));

export default function Home() {
  return (
    <div className="font-space-grotesk bg-[#0a0a0a] min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<div className="min-h-[320px] bg-[#0a0a0a] animate-pulse" />}>
          <Competences />
          <Services />
          <Portfolio />
          <About />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={<div className="h-24 bg-[#0a0a0a]" />}>
        <Footer />
      </Suspense>
    </div>
  );
}
