import { HandCoins, Handshake, Slice, Sprout } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { values } from "./site-data";

const icons = { handshake: Handshake, slice: Slice, sprout: Sprout, coins: HandCoins };

export function About() {
  return (
    <section id="quienes-somos" className="scroll-mt-16 px-5 pt-[85px] pb-[60px]">
      <div className="mx-auto max-w-[1080px]">
        <SectionHeading title="¿Quiénes somos?" subtitle="Calidad de mercado, precio de barrio y trato de amigos" />
        <div className="mt-[42px] space-y-[22px] text-[15px] leading-[1.5] text-onzas-body">
          <p>
            <strong className="font-bold text-onzas-ink">OCHO ONZAS</strong> es el puesto de confianza del norte de
            Tenerife: carne, pescado, marisco y congelados, con productos de elaboración propia y lo de la tierra de
            cosecheros de la zona. Nos encuentras en la tienda de <strong className="font-bold text-onzas-ink">Los Realejos</strong>{" "}
            (C. la Zamora, 12) y en los <strong className="font-bold text-onzas-ink">puestos 16-17 del Mercado Municipal del Puerto de la Cruz</strong>.
          </p>
          <p>
            Nacimos con una idea sencilla: que comprar aquí se parezca a ir al mercado con tus padres o tus abuelos. Los
            aromas, los colores y alguien que te conoce por tu nombre y te dice qué está bueno hoy. Queremos que eso llegue
            a las nuevas generaciones sin perderlo para los mayores, con{" "}
            <strong className="font-bold text-onzas-ink">buena calidad a precio de barrio</strong>, para que nadie se quede
            sin el placer de comer bien.
          </p>
        </div>

        <SectionHeading title="Lo que nos define" className="mt-[110px] scroll-mt-24" />
        <ul id="valores" className="mt-[52px] grid grid-cols-4 gap-x-[5.5%] gap-y-12 max-md:grid-cols-2 max-sm:grid-cols-1">
          {values.map((v) => {
            const Icon = icons[v.icon];
            return (
              <li key={v.text} className="flex flex-col items-center text-center">
                <Icon className="size-[120px] text-onzas" strokeWidth={1.1} aria-hidden />
                <p className="mt-[30px] max-w-[220px] text-[15px] leading-[1.5] text-onzas">{v.text}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
