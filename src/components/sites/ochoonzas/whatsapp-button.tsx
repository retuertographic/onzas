import { contact, whatsappLink } from "./site-data";
import { WhatsappIcon } from "./whatsapp-icon";

/** Burbuja flotante de WhatsApp: siempre visible, abre el chat con un saludo de pedido. */
export function WhatsappButton() {
  return (
    <a
      href={whatsappLink("Hola, Ocho Onzas. Quería hacer un pedido:\n")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Escríbenos por WhatsApp al ${contact.whatsapp}`}
      className="group fixed right-5 bottom-5 z-40 flex items-center gap-3 max-sm:right-4 max-sm:bottom-4"
    >
      <span className="rounded-full bg-white px-4 py-2 text-[14px] font-normal text-onzas-ink shadow-[0_2px_10px_rgba(0,0,0,0.15)] transition-transform group-hover:-translate-x-1 max-sm:hidden">
        ¿Qué te ponemos?
      </span>
      <span className="relative flex size-[60px] items-center justify-center rounded-full bg-[#25d366] text-white shadow-[0_4px_14px_rgba(0,0,0,0.25)] transition-transform group-hover:scale-105 max-sm:size-[56px]">
        <span className="absolute inset-0 animate-ping rounded-full bg-[#25d366] opacity-25 motion-reduce:hidden [animation-duration:2.5s]" />
        <WhatsappIcon className="relative size-[32px]" />
      </span>
    </a>
  );
}
