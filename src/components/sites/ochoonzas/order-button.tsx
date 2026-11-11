import { cn } from "@/lib/utils";
import { orderLink } from "./site-data";
import { WhatsappIcon } from "./whatsapp-icon";

interface OrderButtonProps {
  /** Categoría del pedido, p. ej. "Pollo (frescos)". */
  category: string;
  /** Producto concreto; si falta, el pedido es de toda la categoría. */
  product?: string;
  label?: string;
  variant?: "solid" | "outline" | "compact";
  className?: string;
}

/** Abre WhatsApp con un mensaje de pedido ya escrito para el producto o la categoría. */
export function OrderButton({ category, product, label, variant = "solid", className }: OrderButtonProps) {
  const text = label ?? (product ? "Pedir" : `Pedir ${category}`);
  return (
    <a
      href={orderLink(category, product)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Pedir ${product ? `${category}: ${product}` : category} por WhatsApp`}
      className={cn(
        "inline-flex items-center justify-center gap-1.5 rounded-[5px] font-normal leading-none transition-colors",
        variant === "solid" && "bg-[#25d366] px-3.5 py-2 text-[13px] text-white hover:bg-[#1ebe5b]",
        variant === "outline" && "border border-[#25d366] px-3 py-1.5 text-[13px] text-[#128c47] hover:bg-[#25d366] hover:text-white",
        variant === "compact" && "w-full border-t border-black/5 py-2 text-[12px] uppercase tracking-[0.04em] text-[#128c47] hover:bg-[#25d366] hover:text-white",
        className,
      )}
    >
      <WhatsappIcon className={variant === "compact" ? "size-3.5" : "size-4"} />
      {text}
    </a>
  );
}
