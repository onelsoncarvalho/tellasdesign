import { StaticImageData } from 'next/image';

import mainLogo from '../assets/codeIcon.png';

type NavbarLink = {
  id: number | string;
  label: string;
  to: string;
  offset: number;
  customStyle?: string;
};

type NavbarData = {
  brandLogo: string | StaticImageData;
  brandName: string;
  links: NavbarLink[];
};

const NavbarData: NavbarData = {
  brandLogo: mainLogo,
  brandName: 'Nelson Carvalho',
  links: [
    {
      id: 0,
      label: 'Home',
      to: 'home',
      offset: -100,
    },
    {
      id: 1,
      label: 'Projetos',
      to: 'projetos',
      offset: 0,
    },
    {
      id: 2,
      label: 'Diferencial',
      to: 'diferencial',
      offset: 0,
    },
    {
      id: 3,
      label: 'Sobre',
      to: 'sobre',
      offset: 0,
    },
    // {
    //   id: 4,
    //   label: 'Contato',
    //   to: 'contato',
    //   offset: -100,
    // },
  ],
};

export default NavbarData;
