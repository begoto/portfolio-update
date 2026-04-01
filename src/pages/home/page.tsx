import Navbar from "@/pages/home/components/Navbar";
import Hero from "@/pages/home/components/Hero";
import Competences from "@/pages/home/components/Competences";
import Services from "@/pages/home/components/Services";
import Portfolio from "@/pages/home/components/Portfolio";
import About from "@/pages/home/components/About";
import Contact from "@/pages/home/components/Contact";
import Footer from "@/pages/home/components/Footer";

export default function Home() {
  return (
    <div className="font-space-grotesk bg-[#0a0a0a] min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Competences />
        <Services />
        <Portfolio />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
