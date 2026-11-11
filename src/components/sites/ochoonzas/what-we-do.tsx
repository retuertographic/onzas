import Link from "next/link";
import { SectionHeading } from "./section-heading";
import { contact, delivery } from "./site-data";

const strong = "font-bold text-onzas-ink";

export function WhatWeDo() {
  const services = [
    {
      title: "Por mayor y por menor",
      lines: [
        "Por caja, por pieza o por unidad: 40 croquetas de pollo o solo las que necesites.",
        "Si tienes negocio, tarifa de negocio. Y si te llevas la caja entera, descuento.",
      ],
    },
    {
      title: "Reparto",
      lines: [delivery.area, `${delivery.days}. ${delivery.extraDays}.`, delivery.minimum],
    },
    {
      title: "La tienda",
      lines: [...contact.store.lines.slice(0, 2), `Horario: ${contact.hours.charAt(0).toLowerCase()}${contact.hours.slice(1)}`],
    },
  ];

  return (
    <section id="que-hacemos" className="scroll-mt-16 px-5 py-[54px]">
      <div className="mx-auto max-w-[1080px]">
        <SectionHeading title="¿Qué hacemos?" subtitle="Del mostrador a tu cocina, en la cantidad que necesites" />
        <div className="mt-[26px] space-y-[22px] text-[15px] leading-[1.5] text-onzas-body">
          <p>
            En <strong className={strong}>Ocho Onzas</strong> cortamos, preparamos y te llevamos lo que necesitas para
            la mesa. Pollo, cerdo, vaca y embutidos frescos; pescado, marisco, verdura, fruta y precocinados congelados
            para cuando no hay tiempo; y conservas, bebidas y licores para no tener que ir a otro sitio.
          </p>
          <p>
            Vendemos <strong className={strong}>por mayor y por menor</strong>: a bares y restaurantes y a la gente
            del barrio, con el mismo cuidado y una tarifa distinta para cada uno. Te cortamos la pieza como la quieres y
            te la llevamos: <strong className={strong}>repartimos por el norte</strong>, de Buenavista a Santa Cruz.
          </p>
          <p>
            Y cuando a un agricultor de la zona le sobra cosecha y no consigue venderla, le echamos una mano y la
            ponemos en el mostrador. Lo de aquí, cuando lo hay.
          </p>
          <blockquote className="border-l-[5px] border-onzas-light pl-[20px] italic">
            ¿Buscas algo concreto o quieres encargar? Escríbenos por WhatsApp o pásate por la tienda de Los Realejos,
            de lunes a viernes de 9:00 a 20:30.
          </blockquote>
        </div>

        <ul id="servicios" className="mt-[44px] grid scroll-mt-24 grid-cols-3 gap-8 text-center max-md:grid-cols-1">
          {services.map((s) => (
            <li key={s.title} className="border-t-[3px] border-onzas-light pt-5">
              <h3 className="text-[18px] font-bold leading-none text-onzas-ink">{s.title}</h3>
              {s.lines.map((l) => (
                <p key={l} className="mt-2 text-[13px] leading-[1.5] text-onzas-body">
                  {l}
                </p>
              ))}
            </li>
          ))}
        </ul>

        <div className="mt-[36px] text-center">
          <Link
            href="/productos"
            className="inline-block rounded-[5px] border-2 border-onzas-light px-[15px] py-[3px] text-[15px] font-medium leading-[1.7] text-onzas transition-colors hover:bg-onzas-light"
          >
            Ver productos +
          </Link>
        </div>
      </div>
    </section>
  );
}
