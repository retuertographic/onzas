import type { NavItem, Slide } from "./types";
import { asset } from "./asset";

const img = (file: string) => asset(`/sites/ochoonzas/img/${file}`);
export const brand = (file: string) => asset(`/sites/ochoonzas/brand/${file}`);

export const contact = {
  phone: "922 346 145",
  phoneHref: "tel:+34922346145",
  whatsapp: "629 52 92 20",
  whatsappNumber: "34629529220",
  email: "ochoonzascanarias@gmail.com",
  facebook: "https://www.facebook.com/ochoonzastiendas/",
  hours: "De 9:00 a 20:30",
  store: {
    name: "Tienda de Los Realejos",
    lines: ["C. la Zamora, 12", "38419 Los Realejos", "Santa Cruz de Tenerife"],
  },
  legal: {
    aviso: "https://ochoonzas.com/aviso-legal/",
    privacidad: "https://ochoonzas.com/politica-de-privacidad/",
    cookies: "https://ochoonzas.com/politica-de-cookies/",
  },
};

export const delivery = {
  area: "Norte de Tenerife, de Buenavista a Santa Cruz",
  days: "Martes y viernes",
  extraDays: "Jueves y sábados, para algunos clientes, según la ruta",
  minimum: "Pedido mínimo: 50 €",
};

export const whatsappLink = (text?: string) =>
  `https://wa.me/${contact.whatsappNumber}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

export const nav: NavItem[] = [
  {
    label: "Ocho Onzas",
    href: "/#quienes-somos",
    children: [
      { label: "Quiénes somos", href: "/#quienes-somos" },
      { label: "De dónde viene el nombre", href: "/#historia" },
      { label: "Lo que nos define", href: "/#valores" },
      { label: "La tienda", href: "/#contacto" },
    ],
  },
  {
    label: "Qué hacemos",
    href: "/#que-hacemos",
    children: [
      { label: "Por mayor y por menor", href: "/#servicios" },
      { label: "Hostelería", href: "/#hosteleria" },
      { label: "Reparto", href: "/#servicios" },
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
  { icon: "handshake", text: "Trato cercano: te decimos la verdad sobre cada producto" },
  { icon: "coins", text: "Calidad y precio: nada de producto de baja gama" },
  { icon: "slice", text: "A tu medida: por caja, por pieza o por unidad" },
  { icon: "sprout", text: "De aquí: huevos, pan, bollería y carne fresca de producto local" },
] as const;

/** Primer carrusel: lo que nos diferencia (mismo formato que la referencia). */
export const highlightSlides: Slide[] = [
  { title: "A tu medida", subtitle: "Saber más", image: img("mostrador-filetes.jpg"), href: "/#servicios", position: "center 65%" },
  { title: "Carne fresca", subtitle: "Saber más", image: img("mostrador-chuleton.jpg"), href: "/productos#frescos", position: "center 60%" },
  { title: "Del mar", subtitle: "Saber más", image: img("cefalopodos.jpg"), href: "/productos#congelados" },
  { title: "Por caja", subtitle: "Saber más", image: img("carnes-variadas.jpg"), href: "/#servicios" },
];

/** Segundo carrusel: a quién servimos y cómo. */
export const serviceSlides: Slide[] = [
  { title: "Hostelería", subtitle: "Tarifa de negocio", image: img("pescado-troceado.jpg"), href: "/#hosteleria" },
  { title: "Al detalle", subtitle: "Por unidad", image: img("mostrador-lomo.jpg"), href: "/#servicios", position: "center 70%" },
  { title: "Los Realejos", subtitle: "La tienda", image: img("tienda-los-realejos.jpg"), href: "/#contacto", position: "center 60%" },
  { title: "Reparto", subtitle: "Martes y viernes", image: img("despiezando.jpg"), href: "/#servicios" },
];

export const productCards = [
  { title: ["Carne", "fresca"], image: img("mostrador-chuleton.jpg"), href: "/productos#frescos" },
  { title: ["Pescado", "congelado"], image: img("pescado-entero.jpg"), href: "/productos#piezas" },
  { title: ["Marisco"], image: img("marisco.jpg"), href: "/productos#mariscos" },
];

export const moreSlides: Slide[] = [
  { title: "Fruta y verdura", subtitle: "", image: img("verdura.jpg"), href: "/productos#frutas" },
  { title: "Precocinados", subtitle: "", image: img("precocinados.jpg"), href: "/productos#del-la-tierra" },
  { title: "Embutidos", subtitle: "", image: img("embutidos.jpg"), href: "/productos#embutidos" },
  { title: "Cefalópodos", subtitle: "", image: img("cefalopodos.jpg"), href: "/productos#cefalopodos" },
];
