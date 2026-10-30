import { About } from "@/components/sites/ochoonzas/about";
import { Contact } from "@/components/sites/ochoonzas/contact";
import { Footer } from "@/components/sites/ochoonzas/footer";
import { Header } from "@/components/sites/ochoonzas/header";
import { Hero } from "@/components/sites/ochoonzas/hero";
import { ImageSlider } from "@/components/sites/ochoonzas/image-slider";
import { Products } from "@/components/sites/ochoonzas/products";
import { highlightSlides, serviceSlides } from "@/components/sites/ochoonzas/site-data";
import { WhatsappButton } from "@/components/sites/ochoonzas/whatsapp-button";
import { WhatWeDo } from "@/components/sites/ochoonzas/what-we-do";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <div className="px-5">
          <ImageSlider
            slides={highlightSlides}
            variant="haze"
            interval={2000}
            label="Lo que nos diferencia"
            className="mx-auto h-[492px] max-w-[1152px] max-md:h-[300px]"
          />
        </div>
        <WhatWeDo />
        <ImageSlider slides={serviceSlides} variant="box" interval={2000} label="Cómo trabajamos" className="h-[400px] max-md:h-[300px]" />
        <Products />
        <Contact />
      </main>
      <Footer />
      <WhatsappButton />
    </>
  );
}
