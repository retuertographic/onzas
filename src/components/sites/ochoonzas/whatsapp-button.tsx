import { MessageCircle } from "lucide-react";
import { whatsappLink } from "./site-data";

export function WhatsappButton() {
  return (
    <a
      href={whatsappLink("Hola, quería hacer un encargo")}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-5 bottom-5 z-40 flex items-center gap-2 rounded-full bg-[#25d366] px-5 py-3 text-[15px] font-medium text-white shadow-lg transition-transform hover:scale-105 max-sm:px-4"
    >
      <MessageCircle className="size-5" aria-hidden />
      <span>¿Qué te ponemos?</span>
    </a>
  );
}
