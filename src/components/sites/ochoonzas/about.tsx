import { HandCoins, Handshake, Slice, Sprout } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { values } from "./site-data";

const icons = { handshake: Handshake, slice: Slice, sprout: Sprout, coins: HandCoins };

const strong = "font-bold text-onzas-ink";

export function About() {
  return (
    <section id="quienes-somos" className="scroll-mt-16 px-5 pt-[85px] pb-[60px]">
      <div className="mx-auto max-w-[1080px]">
        <SectionHeading title="¿Quiénes somos?" subtitle="Calidad de mercado, precio de barrio y trato de amigos" />
        <div className="mt-[42px] space-y-[22px] text-[15px] leading-[1.5] text-onzas-body">
          <p>
            <strong className={strong}>OCHO ONZAS</strong> es la tienda de confianza del norte de Tenerife, en{" "}
            <strong className={strong}>Los Realejos</strong> (C. la Zamora, 12). Juntamos lo que casi nunca está en el
            mismo sitio: <strong className={strong}>carnicería, congelados, conservas, bebidas y licores</strong>. Carne,
            pescado, marisco, fruta, verdura y precocinados, con huevos, pan, bollería y carne fresca de producto local.
          </p>
          <p>
            No tenemos un producto estrella: lo que nos hace distintos es <strong className={strong}>la cercanía y la
            relación calidad-precio</strong>. Somos sinceros con quien entra por la puerta, te decimos qué está bueno hoy
            y no llenamos el mostrador de producto de baja gama. Queremos que comprar aquí se parezca a ir al mercado
            con tus padres o tus abuelos, para que nadie se quede sin el placer de comer bien.
          </p>
        </div>

        <div id="historia" className="mt-[54px] scroll-mt-24 border-l-[5px] border-onzas-light pl-[20px] text-[15px] leading-[1.5] text-onzas-body">
          <h3 className="text-[20px] font-light leading-[1.2] text-onzas">¿Por qué 8 onzas?</h3>
          <p className="mt-3">
            Antiguamente, <strong className={strong}>8 onzas de sal</strong> (unos 226 gramos) era el salario que se
            le daba a los jornaleros. De ahí viene el nombre: lo justo por un buen trabajo.
          </p>
          <p className="mt-3">
            Ocho Onzas empezó hacia <strong className={strong}>2014</strong> con la trayectoria de{" "}
            <strong className={strong}>Ricardo Molini</strong>. Desde <strong className={strong}>2018</strong> la
            lleva <strong className={strong}>Manuel Molini</strong>, con la gestión renovada y la misma forma de
            tratar a la gente.
          </p>
        </div>

        <SectionHeading title="Lo que nos define" className="mt-[110px]" />
        <ul id="valores" className="mt-[52px] grid scroll-mt-24 grid-cols-4 gap-x-[5.5%] gap-y-12 max-md:grid-cols-2 max-sm:grid-cols-1">
          {values.map((v) => {
            const Icon = icons[v.icon];
            return (
              <li key={v.text} className="flex flex-col items-center text-center">
                <Icon className="size-[120px] text-onzas-light" strokeWidth={1.1} aria-hidden />
                <p className="mt-[30px] max-w-[220px] text-[15px] leading-[1.5] text-onzas">{v.text}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
