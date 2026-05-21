import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BrandBanner from "./components/BrandBanner";
import About from "./components/About";
import Stats from "./components/Stats";
import Programs from "./components/Programs";
import WhatYouGet from "./components/WhatYouGet";
import HowItWorks from "./components/HowItWorks";
import ForWhom from "./components/ForWhom";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <BrandBanner />
        <About />
        <Stats />
        <Programs />
        <WhatYouGet />
        <HowItWorks />
        <ForWhom />
        <Gallery />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
