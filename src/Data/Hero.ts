import progBRLogo from '../assets/certificates/progbr_logo.png';
import udemyLogo from '../assets/certificates/udemy_logo.png';
import { HeroDataType } from '../types/HeroData';

const HeroData: HeroDataType = {
  heroHeading: `Oi, eu sou o`,
  heroPersonName: 'Nelson Carvalho',
  heroText: 'Programador, Web Designer e Desenvolvedor Web',
  certificates: [
    {
      image: udemyLogo,
      alt: 'Logo da Udemy',
      width: 80,
    },
    {
      image: progBRLogo,
      alt: 'Logo do ProgramadorBR',
      width: 50,
    },
  ],
};

export default HeroData;
