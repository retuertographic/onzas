import Link from "next/link";
import { SectionHeading } from "./section-heading";

export function WhatWeDo() {
  return (
    <section id="que-hacemos" className="scroll-mt-16 px-5 py-[54px]">
      <div className="mx-auto max-w-[1080px]">
        <SectionHeading title="¿Qué hacemos?" subtitle="Del mostrador a tu cocina: carne, pescado y congelados cortados a tu medida" />
        <div className="mt-[26px] space-y-[22px] text-[15px] leading-[1.5] text-onzas-body">
          <p>
            En <strong className="font-bold text-onzas-ink">Ocho Onzas</strong> cortamos, preparamos y te llevamos lo que
            necesitas para la mesa. Pollo, cerdo, vaca y embutidos frescos; pescado, marisco, verdura, fruta y
            precocinados congelados para cuando no hay tiempo. Elegimos a cada proveedor y miramos cada pieza:{" "}
            <strong className="font-bold text-onzas-ink">si algo no está a la altura, no llega al mostrador</strong>.
          </p>
          <p>
            Y hacemos algo que casi nadie hace: <strong className="font-bold text-onzas-ink">troceamos el pescado congelado a tu medida</strong>.
            Dinos el peso y el corte y te lo dejamos listo. Además, <strong className="font-bold text-onzas-ink">repartimos</strong>{" "}
            a negocios y a particulares, y trabajamos con <strong className="font-bold text-onzas-ink">producto de cosecheros del norte</strong>,
            para que comas mejor y el dinero se quede en la zona.
          </p>
          <blockquote className="border-l-[5px] border-onzas pl-[20px] italic">
            ¿Buscas algo concreto o quieres encargar? Escríbenos por WhatsApp o pásate por Los Realejos o el Mercado del Puerto.
          </blockquote>
        </div>
        <div className="mt-[22px] text-center">
          <Link
            href="/productos"
            className="inline-block rounded-[5px] border-2 border-onzas px-[15px] py-[3px] text-[15px] font-medium leading-[1.7] text-onzas transition-colors hover:bg-onzas hover:text-white"
          >
            Ver productos +
          </Link>
        </div>
      </div>
    </section>
  );
}
