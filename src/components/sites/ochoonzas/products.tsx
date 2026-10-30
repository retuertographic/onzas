import Image from "next/image";
import Link from "next/link";
import { ImageSlider } from "./image-slider";
import { moreSlides, productCards } from "./site-data";

export function Products() {
  return (
    <section id="productos" className="scroll-mt-16 px-5 pt-[54px] pb-[60px]">
      <div className="mx-auto max-w-[1080px]">
        <h2 className="text-center text-[40px] font-normal uppercase leading-none text-[#666]">Productos</h2>
        <div className="mx-auto mt-[18px] h-[3px] w-[108px] bg-[#666]" />

        <div className="mt-[64px] grid grid-cols-3 gap-[3%] max-md:grid-cols-1 max-md:gap-6">
          {productCards.map((card) => (
            <Link
              key={card.title.join(" ")}
              href={card.href}
              className="group relative block aspect-[720/1191] overflow-hidden max-md:mx-auto max-md:w-full max-md:max-w-[360px]"
            >
              <Image
                src={card.image}
                alt=""
                fill
                sizes="(max-width: 768px) 360px, 340px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span className="absolute inset-x-0 bottom-[3%] flex min-h-[25%] flex-col items-center justify-center bg-white/35 py-3 font-condensed text-[34px] font-normal uppercase leading-[1.05] text-white [text-shadow:0_1px_4px_rgba(0,0,0,0.3)]">
                {card.title.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </span>
            </Link>
          ))}
        </div>

        <ImageSlider
          slides={moreSlides}
          variant="band"
          interval={3000}
          dots={false}
          label="Más productos"
          className="mt-[27px] h-[200px]"
        />

        <div className="mx-auto mt-[60px] h-px w-[248px] bg-onzas-light" />
      </div>
    </section>
  );
}
