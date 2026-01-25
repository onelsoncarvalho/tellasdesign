import { StaticImageData } from 'next/image';

type certificateType = {
  image: string | StaticImageData;
  alt: string;
  width: number;
};

export type HeroDataType = {
  heroHeading: string;
  heroPersonName: string;
  heroText: string;
  certificates: certificateType[];
};
