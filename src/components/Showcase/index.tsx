import Image, { StaticImageData } from 'next/image';
import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

type ShowcaseProps = {
  image: string | StaticImageData;
  subject: string;
  title: string;
  text: string;
  display: number;
  className?: string;
};

const Showcase = ({
  image,
  subject,
  title,
  text,
  className,
  display,
}: ShowcaseProps) => {
  return (
    <div
      className={`grid md:grid-cols-2 items-center md:gap-16 mb-20 md:my-28 ${className}`}
    >
      <div
        className={`max-w-md w-full mx-auto md:m-0  ${
          display === 1 ? 'order-1 md:order-2 ' : 'md:ml-auto'
        }`}
      >
        <Image
          src={image}
          className="rounded-md transition duration-500 hover:drop-shadow-xl hover:scale-110 hover:bg-green-200"
          alt={title}
          loading="eager"
        />
      </div>

      <div
        className={`mt-5 md:mt-0 max-w-md mx-auto md:m-0 ${
          display === 1 ? 'order-2 md:order-1 md:ml-auto' : ''
        }`}
      >
        <h3 className="text-accentGreen uppercase tracking-wide">{subject}</h3>
        <h2 className="text-[#313131] font-main font-bold text-3xl">{title}</h2>
        <p className="font-text font-medium text-[#313131] mt-2">{text}</p>
        <div className="mt-8">
          <ScrollLink
            to={'contato'}
            smooth={true}
            spy={true}
            offset={-100}
            duration={500}
          >
            <button
              className="rounded-full py-3 px-8 bg-accentPurple text-white font-medium font-text transition duration-300 hover:ring hover:ring-emerald-300 hover:scale-105"
              type="button"
            >
              Entrar em Contato
            </button>
          </ScrollLink>
        </div>
      </div>
    </div>
  );
};

Showcase.defaultProps = {
  className: ' ',
};

export default Showcase;
