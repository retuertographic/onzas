"use client";

import { useState, type FormEvent } from "react";
import { contact, whatsappLink } from "./site-data";

const inputClass =
  "w-full bg-[#a0a0a0] px-4 text-[12px] text-white placeholder:text-white/90 outline-none focus:bg-[#8f8f8f]";

const buttonClass =
  "inline-block rounded-[5px] border-2 border-onzas px-[15px] py-[3px] text-[15px] font-medium leading-[1.7] text-onzas transition-colors hover:bg-onzas hover:text-white";

/**
 * El formulario no tiene servidor: abre WhatsApp con el mensaje ya escrito,
 * que es el canal principal de pedidos de Ocho Onzas.
 */
export function Contact() {
  const [error, setError] = useState("");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("nombre") ?? "").trim();
    const reply = String(data.get("contacto") ?? "").trim();
    const message = String(data.get("mensaje") ?? "").trim();
    if (!name || !message) {
      setError("Dinos tu nombre y qué necesitas.");
      return;
    }
    if (!data.get("privacidad")) {
      setError("Acepta la política de privacidad para enviar el mensaje.");
      return;
    }
    setError("");
    const text = `Hola, soy ${name}${reply ? ` (${reply})` : ""}.\n${message}`;
    window.open(whatsappLink(text), "_blank", "noopener,noreferrer");
  }

  const stores = [
    { title: "Los Realejos", lines: contact.realejos.lines },
    { title: "Mercado del Puerto", lines: contact.puerto.lines },
  ];

  return (
    <section id="contacto" className="scroll-mt-16 bg-[#f2f2f2] px-5 pt-[54px] pb-[80px]">
      <div className="mx-auto grid max-w-[1296px] grid-cols-2 gap-x-[5.5%] gap-y-14 max-lg:grid-cols-1">
        <div>
          <h2 className="text-[20px] font-normal uppercase leading-none text-black">Contáctanos</h2>
          <p className="mt-3 text-[13px] leading-[1.6] text-onzas-body">
            ¿Buscas algo concreto o quieres encargar? Escríbenos y te lo preparamos para que lo recojas sin colas.
          </p>
          <form onSubmit={onSubmit} className="mt-5" noValidate>
            <div className="grid grid-cols-2 gap-[3%] max-sm:grid-cols-1 max-sm:gap-3">
              <label className="sr-only" htmlFor="nombre">Nombre</label>
              <input id="nombre" name="nombre" placeholder="Nombre" autoComplete="name" className={`${inputClass} h-[47px]`} />
              <label className="sr-only" htmlFor="contacto">Teléfono o correo</label>
              <input id="contacto" name="contacto" placeholder="Teléfono o correo" autoComplete="tel" className={`${inputClass} h-[47px]`} />
            </div>
            <label className="sr-only" htmlFor="mensaje">Mensaje</label>
            <textarea
              id="mensaje"
              name="mensaje"
              placeholder="¿Qué te ponemos? Cuéntanos qué necesitas, el peso y el corte."
              className={`${inputClass} mt-[20px] h-[150px] resize-y py-4`}
            />
            <label className="mt-[18px] flex items-center gap-2 text-[12px] text-onzas-body">
              <input type="checkbox" name="privacidad" className="size-[13px] accent-onzas" />
              He leído y acepto la{" "}
              <a href={contact.legal.privacidad} target="_blank" rel="noopener noreferrer" className="font-bold text-black underline">
                Política de privacidad
              </a>
            </label>
            {error && (
              <p role="alert" className="mt-3 text-[13px] text-red-700">
                {error}
              </p>
            )}
            <div className="mt-[14px] text-right">
              <button type="submit" className={buttonClass}>
                Enviar por WhatsApp
              </button>
            </div>
          </form>

          <div id="hosteleria" className="mt-[22px] scroll-mt-24 text-right">
            <a
              href={whatsappLink("Hola, tengo un negocio de hostelería y quería pediros propuesta.")}
              target="_blank"
              rel="noopener noreferrer"
              className={`${buttonClass} uppercase`}
            >
              ¿Tienes bar, restaurante o guachinche?
            </a>
            <p className="mt-1 text-[12px] text-onzas-body">Cuéntanos tu carta y te preparamos propuesta</p>
          </div>
        </div>

        <div className="grid grid-cols-[1fr_1.15fr_1.35fr] gap-6 self-start pt-[78px] text-center max-lg:pt-0 max-sm:grid-cols-1">
          {stores.map((s) => (
            <div key={s.title}>
              <h3 className="text-[18px] font-bold leading-none text-onzas-ink">{s.title}</h3>
              <p className="mt-[14px] text-[12px] leading-[1.5] text-onzas-body">
                {s.lines.map((l) => (
                  <span key={l} className="block">
                    {l}
                  </span>
                ))}
              </p>
            </div>
          ))}
          <div>
            <h3 className="text-[18px] font-bold leading-none text-onzas-ink">Pedidos</h3>
            <p className="mt-[14px] text-[12px] leading-[1.5] text-onzas-body">
              <span className="block">
                Tel.: <a href={contact.phoneHref} className="hover:text-onzas">{contact.phone}</a>
              </span>
              <span className="block">
                WhatsApp:{" "}
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="hover:text-onzas">
                  {contact.whatsapp}
                </a>
              </span>
              <a href={`mailto:${contact.email}`} className="block [overflow-wrap:anywhere] hover:text-onzas">
                {contact.email}
              </a>
            </p>
          </div>

          <iframe
            title="Mapa de la tienda de Ocho Onzas en Los Realejos"
            src="https://www.google.com/maps?q=C.%20la%20Zamora%2C%2012%2C%2038419%20Los%20Realejos&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="col-span-3 mt-10 h-[340px] w-full border-0 max-sm:col-span-1"
          />
        </div>
      </div>
    </section>
  );
}
