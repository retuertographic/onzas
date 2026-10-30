import Image from "next/image";

export function Hero() {
  return (
    <section className="relative flex h-[660px] items-center justify-center overflow-hidden max-md:h-[560px]">
      <div className="absolute inset-0 bg-fixed bg-cover bg-center max-lg:bg-scroll" style={{ backgroundImage: "url(/sites/ochoonzas/img/despiece.jpg)" }} />
      <div className="absolute inset-0 bg-black/45" />
      <div className="relative flex flex-col items-center px-6 pt-4 text-center">
        <h1 className="sr-only">Ocho Onzas, frescos y congelados</h1>
        <Image
          src="/sites/ochoonzas/img/logo-blanco.png"
          alt="Ocho Onzas, frescos y congelados"
          width={400}
          height={125}
          priority
          className="h-auto w-[400px] max-w-[80vw] drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)]"
        />
        <p className="mt-8 font-display text-[33px] uppercase leading-none text-white max-md:text-[24px]">
          Tu aliado en la mesa
        </p>
      </div>
    </section>
  );
}
