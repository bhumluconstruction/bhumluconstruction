export interface FooterLinkItem {
  item: string;
}

export interface FooterSection {
  title: string;
  itemsmenu: FooterLinkItem[];
}

export interface HeroHighlight {
  label: string;
  value: string;
}

export interface StatItem {
  value: string;
  title: string;
  detail: string;
}

export interface ServiceItem {
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  image?: string;
  overview?: string;
  features?: string[];
}

export interface ProjectItem {
  eyebrow: string;
  title: string;
  slug: string;
  href: string;
  location: string;
  status: string;
  description: string;
  image?: string;
  scope?: string;
  timeline?: string;
  client?: string;
  outcome?: string;
  details?: string[];
}

export interface GalleryItem {
  title: string;
  accent: string;
  src: string;
  alt: string;
}

export interface ContactDetail {
  label: string;
  value: string;
  href?: string;
}

