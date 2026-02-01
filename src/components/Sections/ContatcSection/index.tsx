import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import { Link } from 'react-scroll';

/* Assets */
import greenShadow from '../../../assets/green_vector.svg';
import iphoneSite from '../../../assets/iphone_site.png';
import macbookSite from '../../../assets/macbook_site.png';
import mockups from '../../../assets/mockups.png';
import grid from '../../../assets/Grid.png';
import HeroData from '../../../Data/Hero';
import { HeroDataType } from '../../../types/HeroData';
/* Data */
/* UI Components */
import Container from '../../UI/Container';
import Heading from '../../UI/Heading';
import Text from '../../UI/Text';

const ContactSection = () => {
  // Data
  const { certificates }: HeroDataType = HeroData;

  const titleMotion: Variants = {
    hidden: {
      opacity: 0,
      translateX: -100,
    },
    visible: {
      opacity: 1,
      translateX: 0,
    },
  };

  const subheadingVariants: Variants = {
    hidden: {
      opacity: 0.3,
      translateY: 30,
    },
    visible: {
      opacity: 1,
      translateY: 0,
    },
  };

  /* Styles */
  const heroBackgroundStyle = `bg-slate-100 h-full bg-no-repeat bg-cover py-24 flex items-center z-10`;
  const heroContainerStyle = `backgrop-blur-lg flex flex-col lg:grid lg:grid-cols-2 lg:items-center`;
  
  return (
    <section className="h-full flex flex-col relative " id="home">
      <div className={heroBackgroundStyle}>
        <Container>
          {/* Hero Content */}
          <div className={`bg-[#212121] rounded-3xl py-0 px-4 md:px-16 w-full ${heroContainerStyle}`}>
          <div className="lg:max-w-2xl">
            <motion.div
              variants={titleMotion}
              initial="hidden"
              animate="visible"
              transition={{
                duration: 0.6,
              }}
            >
              <Heading className="!text-white font-extrabold">
                Entre em contato
              </Heading>
            </motion.div>

            <motion.h2
              variants={subheadingVariants}
              initial="hidden"
              animate="visible"
              transition={{
                duration: 0.6,
              }}
              className="text-[1.125rem] lg:text-[1.25rem] text-[#fafafa] font-medium leading-tight font-main  mt-5"
            >
              Com as tecnologias certas, nós fazemos seu site funcionar em todas as telas, desde celulares pequenos até grandes monitores.
            </motion.h2>

            <div className="mt-5 max-w-full flex bg-red-900 text-center">
              <Link
                to="projetos"
                smooth={true}
                spy={true}
                offset={0}
                duration={500}
                className="border border-accentGreen bg-accentGreen p-3 px-6 flex rounded-lg font-text shadow-md shadow-green-600 cursor-pointer transition duration-500 hover:scale-110 hover:shadow-lg hover:shadow-green-500 font-medium w-full justify-center"
              >
                QUERO CONTRATAR E ALAVANCAR MINHAS VENDAS!
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <motion.div
            initial={{
              translateX: 100,
              opacity: 0.1,
            }}
            animate={{
              translateX: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.7,
            }}
            className="relative w-full h-full"
          >
          <div className="flex justify-center relative absolute left-16">
              <Image
                src={grid}
                alt={"Grid"}
                className=""
              />
              {/*
              <Image
                src={macbookSite}
                alt={'Site em Notebook'}
                className="max-w-sm lg:max-w-[800px] w-full h-full remright-20 xl:right-[0vw] relative"
              />
              <Image
                src={iphoneSite}
                alt={'Site em Smartphones/Celulares'}
                className="max-w-[100px] md:max-w-[100px] lg:max-w-[200px] absolute -bottom-12 remright-28 xl:right-[3.8vw] 2xl:right-[2vw]"
              />
              */}
            </div>
          </motion.div>
        </div>
        </Container>
      </div>

      {/* Certificates Area */}
      {/*
      <div className="bg-white flex-1 shadow-md border-b border-gray-200 flex items-center bg-slate-50 border-t border-gray-200 z-10">
        <Container className="md:flex items-center gap-20 h-full py-2">
          <Text className="mt-2 lg:mt-0">Certificado por</Text>

          <div className="flex flex-col md:flex-row py-4 gap-2 md:gap-6">
            {certificates.map((image) => (
              <Image
                src={image.image}
                alt={image.alt}
                key={image.alt}
                className="w-auto py-2 max-w-[90px] md:max-w-none md:max-h-[60px] md:w-auto grayscale-[10%] lg:grayscale hover:grayscale-0 hover:scale-105 transition duration-500"
              />
            ))}
          </div>
        </Container>
      </div>*/}
    </section>
  );
};

export default ContactSection;
