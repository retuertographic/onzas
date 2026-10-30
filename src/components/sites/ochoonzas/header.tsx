"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { asset } from "./asset";
import { ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { nav } from "./site-data";

/**
 * Cabecera fija: transparente sobre la portada y blanca al hacer scroll,
 * como en la referencia. `solid` la fuerza blanca desde el principio.
 */
export function Header({ solid = false }: { solid?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const light = solid || scrolled || open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 h-16 transition-[background-color,box-shadow] duration-300",
        light ? "bg-white shadow-[0_1px_0_rgba(0,0,0,0.1)]" : "bg-transparent",
      )}
    >
      <div className="flex h-full items-center justify-between px-[34px] max-md:px-5">
        <Link href="/" aria-label="Ocho Onzas, inicio" className="relative block h-[38px] w-[121px]">
          <Image
            src={asset("/sites/ochoonzas/img/logo-blanco.png")}
            alt="Ocho Onzas, frescos y congelados"
            fill
            sizes="121px"
            priority
            className={cn("object-contain transition-opacity duration-300", light && "opacity-0")}
          />
          <Image
            src={asset("/sites/ochoonzas/img/logo-gris.png")}
            alt=""
            fill
            sizes="121px"
            className={cn("object-contain transition-opacity duration-300", !light && "opacity-0")}
          />
        </Link>

        <nav className="h-full max-lg:hidden" aria-label="Principal">
          <ul className="flex h-full items-center gap-[22px]">
            {nav.map((item) => (
              <li key={item.label} className="group relative flex h-full items-center">
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-1 text-[13px] font-semibold uppercase transition-opacity hover:opacity-70",
                    light ? "text-onzas-ink" : "text-white",
                  )}
                >
                  {item.label}
                  {item.children && <ChevronDown className="size-3.5" strokeWidth={2.5} />}
                </Link>
                {item.children && (
                  <ul
                    className={cn(
                      "invisible absolute top-full left-0 w-[240px] border-t-[3px] border-onzas py-5 opacity-0 shadow-[0_2px_5px_rgba(0,0,0,0.1)] transition-[opacity,visibility] duration-200 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100",
                      light ? "bg-white" : "bg-black/15 backdrop-blur-sm",
                    )}
                  >
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <Link
                          href={child.href}
                          className={cn(
                            "block px-5 py-[6px] text-[13px] font-semibold leading-[1.5] transition-opacity hover:opacity-70",
                            light ? "text-onzas-ink" : "text-white",
                          )}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className={cn("lg:hidden", light ? "text-onzas" : "text-white")}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-7" /> : <Menu className="size-7" />}
        </button>
      </div>

      {open && (
        <nav
          className="absolute inset-x-0 top-full max-h-[calc(100dvh-4rem)] overflow-y-auto border-t-[3px] border-onzas bg-white px-5 py-4 shadow-md lg:hidden"
          aria-label="Menú móvil"
        >
          <ul>
            {nav.map((item) => (
              <li key={item.label} className="border-b border-black/5 last:border-0">
                <div className="flex items-center justify-between">
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block py-2.5 text-sm font-semibold uppercase text-onzas-ink"
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <button
                      type="button"
                      aria-label={`Ver ${item.label}`}
                      aria-expanded={expanded === item.label}
                      onClick={() => setExpanded((v) => (v === item.label ? null : item.label))}
                      className="p-2 text-onzas-ink"
                    >
                      <ChevronDown
                        className={cn("size-4 transition-transform", expanded === item.label && "rotate-180")}
                      />
                    </button>
                  )}
                </div>
                {item.children && expanded === item.label && (
                  <ul className="pb-2 pl-4">
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <Link
                          href={child.href}
                          onClick={() => setOpen(false)}
                          className="block py-1.5 text-sm text-onzas-body"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
