import type { NavItem, Slide } from "./types";
import { asset } from "./asset";

const img = (file: string) => asset(`/sites/ochoonzas/img/${file}`);

export const contact = {
  phone: "922 346 145",
  phoneHref: "tel:+34922346145",
  whatsapp: "629 52 92 20",
  whatsappNumber: "34629529220",
  email: "ochoonzascanarias@gmail.com",
  facebook: "https://www.facebook.com/ochoonzastiendas/",
  realejos: {
    name: "Tienda de Los Realejos",
    lines: ["C. la Zamora, 12", "38419 Los Realejos", "Santa Cruz de Tenerife"],
  },
  puerto: {
    name: "Mercado del Puerto",
    lines: ["Mercado Municipal del Puerto de la Cruz", "Avda. San Blas, nº 4", "Puestos 16-17"],
  },
  legal: {
    aviso: "https://ochoonzas.com/aviso-legal/",
    privacidad: "https://ochoonzas.com/politica-de-privacidad/",
    cookies: "https://ochoonzas.com/politica-de-cookies/",
  },
};

export const whatsappLink = (text?: string) =>
  `https://wa.me/${contact.whatsappNumber}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

export const nav: NavItem[] = [
  {
    label: "Ocho Onzas",
    href: "/#quienes-somos",
    children: [
      { label: "Quiénes somos", href: "/#quienes-somos" },
      { label: "Lo que nos define", href: "/#valores" },
      { label: "Tienda de Los Realejos", href: "/#contacto" },
      { label: "Mercado del Puerto", href: "/#contacto" },
    ],
  },
  {
    label: "Qué hacemos",
    href: "/#que-hacemos",
    children: [
      { label: "Hostelería", href: "/#hosteleria" },
      { label: "Troceado a medida", href: "/#que-hacemos" },
      { label: "Reparto", href: "/#que-hacemos" },
      { label: "Encargos por WhatsApp", href: whatsappLink() },
    ],
  },
  {
    label: "Productos",
    href: "/productos",
    children: [
      { label: "Frescos", href: "/productos#frescos" },
      { label: "Congelados", href: "/productos#congelados" },
      { label: "Marisco", href: "/productos#mariscos" },
      { label: "Precocinados", href: "/productos#del-mar" },
    ],
  },
  { label: "Contacto", href: "/#contacto" },
];

export const values = [
  { icon: "handshake", text: "Trato de barrio: aquí te conocemos por tu nombre" },
  { icon: "slice", text: "A tu medida: te cortamos la pieza como la necesitas" },
  { icon: "sprout", text: "De aquí: producto de cosecheros del norte" },
  { icon: "coins", text: "Comer bien sin pagar de más" },
] as const;

/** Primer carrusel: lo que nos diferencia (mismo formato que la referencia). */
export const highlightSlides: Slide[] = [
  { title: "A tu medida", subtitle: "Saber más", image: img("despiece.jpg"), href: "/#que-hacemos" },
  { title: "Fresco de hoy", subtitle: "Saber más", image: img("carnes-variadas.jpg"), href: "/productos#frescos" },
  { title: "De la tierra", subtitle: "Saber más", image: img("frutas.jpg"), href: "/productos#frutas" },
  { title: "Del mar", subtitle: "Saber más", image: img("cefalopodos.jpg"), href: "/productos#congelados" },
];

/** Segundo carrusel: a quién servimos y cómo. */
export const serviceSlides: Slide[] = [
  { title: "Hostelería", subtitle: "Pedido fijo", image: img("pescado-troceado.jpg"), href: "/#hosteleria" },
  { title: "Troceado", subtitle: "A tu medida", image: img("despiezando.jpg"), href: "/#que-hacemos" },
  { title: "Los Realejos", subtitle: "La tienda", image: img("tienda-los-realejos.jpg"), href: "/#contacto", position: "center 60%" },
  { title: "Mercado del Puerto", subtitle: "Puestos 16-17", image: img("fachada-rotulo.jpg"), href: "/#contacto" },
  { title: "Reparto", subtitle: "Te lo llevamos", image: img("embutidos.jpg"), href: "/#contacto" },
];

export const productCards = [
  { title: ["Carne", "fresca"], image: img("mostrador-despiece.jpg"), href: "/productos#frescos" },
  { title: ["Pescado", "congelado"], image: img("pescado-entero.jpg"), href: "/productos#piezas" },
  { title: ["Marisco"], image: img("marisco.jpg"), href: "/productos#mariscos" },
];

export const moreSlides: Slide[] = [
  { title: "Fruta y verdura", subtitle: "", image: img("verdura.jpg"), href: "/productos#frutas" },
  { title: "Precocinados", subtitle: "", image: img("precocinados.jpg"), href: "/productos#del-la-tierra" },
  { title: "Embutidos", subtitle: "", image: img("embutidos.jpg"), href: "/productos#embutidos" },
  { title: "Cefalópodos", subtitle: "", image: img("cefalopodos.jpg"), href: "/productos#cefalopodos" },
];
