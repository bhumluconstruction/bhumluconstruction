export interface NavItemChild {
  title: string;
  url: string;
}

export interface NavItem {
  id: number;
  title: string;
  url: string;
  children?: NavItemChild[];
}