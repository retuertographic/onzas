export interface Product {
  name: string;
  image: string;
}

export interface ProductGroup {
  id: string;
  title: string;
  note: string;
  items: Product[];
}

export interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

export interface Slide {
  title: string;
  subtitle: string;
  image: string;
  href: string;
  /** object-position for the background crop */
  position?: string;
}
