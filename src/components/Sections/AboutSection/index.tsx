import Image from 'next/image';
import React from 'react';

import Container from '../../UI/Container';
import SubHeading from '../../UI/Subheading';
import Text from '../../UI/Text';

type AboutSectionProps = {
  title: string;
  paragraphs: string[];
  image: string;
  imageAlt: string;
};

const AboutSection = ({
  title,
  paragraphs,
  image,
  imageAlt,
}: AboutSectionProps) => {
  return (
    <section
      id="sobre"
      className="min-h-screen bg-mainDark flex items-center py-32"
    >
      <Container className="grid lg:grid-cols-2 lg:grid-rows-1">
        <div className="order-2 lg:order-1 mx-auto flex w-full justify-center relative">
          <Image src={image} alt={imageAlt} className="w-full max-h-80" />
        </div>

        <div className="order-1 lg:order-2">
          {/* <SubHeading className="text-3xl text-center mb-8 text-accentGreen lg:text-left"> */}
          <SubHeading className="text-3xl text-center mb-8 lg:text-left bg-gradient-to-r from-emerald-500 to-indigo-900 text-transparent bg-clip-text">
            {title}
          </SubHeading>
        </div>

        <div className="order-3 lg:col-start-2 lg:-mt-72">
          {paragraphs.map((text) => (
            <Text
              className="text-slate-100 tracking-wider max-w-md mx-auto lg:ml-0 mt-6 leading-7"
              key={text.length}
            >
              {text}
            </Text>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;
