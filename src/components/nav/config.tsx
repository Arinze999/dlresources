import { ABOUT, BLOG, HOME, MENU } from '@/routes/routes';

interface INavConfig {
  label: string;
  href: string;
}

export const navConfig: INavConfig[] = [
  { label: 'Home', href: `/${HOME}` },
  { label: 'About', href: `/${ABOUT}` },
  { label: 'Menu', href: `/${MENU}` },
  { label: 'Blog', href: `/${BLOG}` },
];
