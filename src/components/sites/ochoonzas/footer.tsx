import { contact } from "./site-data";

export function Footer() {
  const links = [
    { label: "Aviso legal", href: contact.legal.aviso },
    { label: "Política de privacidad", href: contact.legal.privacidad },
    { label: "Política de cookies", href: contact.legal.cookies },
    { label: "Instagram", href: contact.instagram },
    { label: "Facebook", href: contact.facebook },
  ];
  return (
    <footer className="bg-[rgba(0,0,0,0.84)] px-5 py-[46px] text-center text-[15px] leading-[1.7]">
      <p className="text-white/30">
        C. la Zamora, 12 // 38419 Los Realejos // {contact.phone} – Tenerife
      </p>
      <p className="mt-[10px] text-white/30">
        {links.map((l, i) => (
          <span key={l.label}>
            {i > 0 && " // "}
            <a href={l.href} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white/70">
              {l.label}
            </a>
          </span>
        ))}
      </p>
      <p className="mt-[10px] text-white/30">Ocho Onzas Canarias S.L. · Tu aliado en la mesa.</p>
      <p className="mx-auto mt-[22px] max-w-[900px] border-t border-white/10 pt-[18px] text-[13px] text-white/30">
        Desarrollado por{" "}
        <a
          href="https://retuertographicdesign.com/"
          target="_blank"
          rel="noopener"
          className="text-white/50 underline-offset-2 transition-colors hover:text-white/80 hover:underline"
        >
          Retuerto Graphic Design
        </a>
        . Ricardo Retuerto Barrera | Spain-Germany | 0034 922 971 723 · 0049 30 31878629
      </p>
    </footer>
  );
}
