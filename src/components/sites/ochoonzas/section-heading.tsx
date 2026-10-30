import { cn } from "@/lib/utils";

/** Título + subtítulo en azul, centrados, como "¿QUIÉNES SOMOS?" en la referencia. */
export function SectionHeading({ title, subtitle, className }: { title: string; subtitle?: string; className?: string }) {
  return (
    <div className={cn("text-center text-onzas", className)}>
      <h2 className="text-[22px] font-normal uppercase leading-none">{title}</h2>
      {subtitle && <p className="mt-[10px] text-[20px] font-light leading-[1.2]">{subtitle}</p>}
    </div>
  );
}
