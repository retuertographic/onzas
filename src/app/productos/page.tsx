import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { asset } from "@/components/sites/ochoonzas/asset";
import { Footer } from "@/components/sites/ochoonzas/footer";
import { Header } from "@/components/sites/ochoonzas/header";
import { freshGroups, frozenGroups } from "@/components/sites/ochoonzas/products-data";
import { OrderButton } from "@/components/sites/ochoonzas/order-button";
import { SectionHeading } from "@/components/sites/ochoonzas/section-heading";
import { brand, whatsappLink } from "@/components/sites/ochoonzas/site-data";
import type { ProductGroup } from "@/components/sites/ochoonzas/types";
import { WhatsappButton } from "@/components/sites/ochoonzas/whatsapp-button";

export const metadata: Metadata = {
  title: "Productos · Ocho Onzas",
  description: "Carne fresca, pescado, marisco, fruta y precocinados congelados en Los Realejos, por mayor y por menor.",
};

export default function ProductosPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="relative flex h-[420px] items-center justify-center overflow-hidden max-md:h-[340px]">
          <Image src={asset("/sites/ochoonzas/img/carnes-variadas.jpg")} alt="" fill priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-black/35" />
          <div className="relative px-6 pt-10 text-center text-white">
            <h1 className="font-display text-[44px] uppercase leading-none max-md:text-[32px]">Productos</h1>
            <p className="mt-4 font-display text-[20px] max-md:text-[17px]">Lo bueno, a precio de barrio.</p>
          </div>
        </section>

        <section className="px-5 pt-[70px] pb-[20px]">
          <p className="mx-auto max-w-[760px] text-center text-[15px] leading-[1.6] text-onzas-body">
            Carne, pescado, marisco y congelados elegidos como si fueran para nuestra mesa. Buena calidad, buen precio y
            alguien que te aconseja. Por caja, por pieza o por unidad: si tienes negocio, con tarifa de negocio, y si te
            llevas la caja entera, con descuento.
          </p>
        </section>

        <Category
          id="frescos"
          title="Frescos"
          subtitle="Te cortamos la pieza como la necesitas"
          intro="Pollo, cerdo, vaca y embutidos frescos. La carne fresca es producto local; la refrigerada la traemos de los mejores productores de Sudamérica. Para la plancha, el horno o la brasa: tú dices cómo y nosotros la cortamos."
          groups={freshGroups}
        />
        <Category
          id="congelados"
          title="Congelados"
          subtitle="Congelado bien elegido, comida bien resuelta"
          intro="Pescado, marisco, verdura, fruta y precocinados listos para cuando no hay tiempo. Todo ultracongelado, para que conserve su sabor y su textura. Te lo vendemos por caja o por unidad: 40 croquetas o solo las que necesites. El cerdo y la vaca también los tienes congelados."
          groups={frozenGroups}
          muted
        />

        <section className="bg-onzas-grey px-5 py-[54px] text-center text-white">
          <p className="text-[20px] font-light">¿Buscas algo que no ves aquí o quieres encargar?</p>
          <p className="mt-2 text-[15px] text-white/80">Escríbenos, te lo preparamos y lo recoges en Los Realejos (de lunes a sábado, de 9:00 a 20:30). Si tienes negocio, te lo llevamos: repartimos a empresas por el norte los martes y viernes, a partir de 50 €.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href={whatsappLink("Hola, Ocho Onzas. Quería hacer un pedido:\n")}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-[5px] border-2 border-white px-[15px] py-[3px] text-[15px] font-medium leading-[1.7] transition-colors hover:bg-white hover:text-onzas-grey"
            >
              Escríbenos por WhatsApp
            </a>
            <Link
              href="/#contacto"
              className="rounded-[5px] border-2 border-white px-[15px] py-[3px] text-[15px] font-medium leading-[1.7] transition-colors hover:bg-white hover:text-onzas-grey"
            >
              Dónde estamos
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsappButton />
    </>
  );
}

/** Iconos de categoría del manual corporativo (porcino, res, ave, pescado, marisco, fruta). */
const groupIcons: Record<string, string> = {
  pollo: "ave",
  pavo: "ave",
  cerdo: "porcino",
  embutidos: "porcino",
  vaca: "res",
  piezas: "pescado",
  enteros: "pescado",
  cefalopodos: "pescado",
  "del-mar": "pescado",
  mariscos: "marisco",
  frutas: "fruta",
};

function Category({
  id,
  title,
  subtitle,
  intro,
  groups,
  muted = false,
}: {
  id: string;
  title: string;
  subtitle: string;
  intro: string;
  groups: ProductGroup[];
  muted?: boolean;
}) {
  return (
    <section id={id} className={`scroll-mt-16 px-5 py-[60px] ${muted ? "bg-[#f2f2f2]" : ""}`}>
      <div className="mx-auto max-w-[1080px]">
        <SectionHeading title={title} subtitle={subtitle} />
        <p className="mx-auto mt-[22px] max-w-[820px] text-center text-[15px] leading-[1.5] text-onzas-body">{intro}</p>

        <nav aria-label={`Secciones de ${title}`} className="mt-6 flex flex-wrap justify-center gap-2">
          {groups.map((g) => (
            <a
              key={g.id}
              href={`#${g.id}`}
              className="rounded-[5px] border border-onzas-light px-3 py-1 text-[13px] font-normal text-onzas transition-colors hover:bg-onzas-light"
            >
              {g.title}
            </a>
          ))}
        </nav>

        {groups.map((g) => (
          <div key={g.id} id={g.id} className="mt-[54px] scroll-mt-24">
            <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-1 border-b border-onzas-light pb-2">
              <div className="flex items-center gap-3">
                {groupIcons[g.id] && (
                  <Image src={brand(`icono-${groupIcons[g.id]}.png`)} alt="" width={44} height={44} className="size-11 rounded-[6px]" />
                )}
                <h3 className="font-condensed text-[28px] font-light uppercase leading-none text-onzas-ink">{g.title}</h3>
              </div>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                <p className="text-[13px] italic text-onzas-body">{g.note}</p>
                <OrderButton category={`${g.title.toLowerCase()} (${title.toLowerCase()})`} label={`Pedir ${g.title.toLowerCase()}`} />
              </div>
            </div>
            <ul className="mt-5 grid grid-cols-4 gap-5 max-md:grid-cols-3 max-sm:grid-cols-2 max-sm:gap-3">
              {g.items.map((p) => (
                <li key={p.name} className="group flex flex-col overflow-hidden bg-white shadow-[0_1px_3px_rgba(0,0,0,0.08)]">
                  <div className="relative aspect-[2/1] overflow-hidden">
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      sizes="(max-width: 640px) 50vw, 260px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <p className="px-3 py-2 text-center font-condensed text-[15px] uppercase tracking-[0.04em] text-onzas-grey">
                    {p.name}
                  </p>
                  <OrderButton
                    category={`${g.title.toLowerCase()} (${title.toLowerCase()})`}
                    product={p.name.toLowerCase()}
                    variant="compact"
                    className="mt-auto"
                  />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
