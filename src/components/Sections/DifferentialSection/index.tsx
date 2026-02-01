import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

import checkIcon from '../../../assets/CheckIcon.svg';
import mockupView from '../../../assets/mockups/mockup_view4.png';
import grid from '../../../assets/Grid.png';
import computador from '../../../assets/computador.png';
import quadro from '../../../assets/quadro.png';
import coroa from '../../../assets/coroa.png';
import celular from '../../../assets/celular.png';
import raio from '../../../assets/raio.png';


import DifferentialsData from '../../../Data/Differentials';
import Showcase from '../../Showcase';
import Container from '../../UI/Container';
import SubHeading from '../../UI/Subheading';
import Text from '../../UI/Text';

const DifferentialSection = () => {
  const { title, text, items, showcaseData } = DifferentialsData;

  // Styles
  const mockupStyle = `
    rotate-[45deg] md:rotate-12 hidden md:flex -right-2 md:right-0 lg:-right-12
    absolute max-w-[70vw] md:max-w-[50vw] xl:max-w-[40vw] 2xl:max-w-[600px] md:-top-10 xl:-top-32 -z-10
  `;
  const showcaseBoxShadow = `md:shadow-[-10px_-10px_15px_4px_rgba(0,0,0,0.01),_10px_10px_15px_4px_rgba(45,78,255,0.015)]`;

  return (
    <>
      <section
        className="relative py-8 lg:py-20 overflow-hidden bg-slate-100 z-10"
        id="diferencial"
      >
        <Container className="">
          <div>
            <SubHeading className="!text-5xl text-center mb-20">Diferencial</SubHeading>
            <div className="flex justify-between flex-col items-center md:flex-row gap-8">
              <div className="flex flex-col justify-center align-center text-center max-w-[300px]">
                <Image
                    src={computador}
                    className="max-w-[200px] mx-auto"
                  />
                <h2 className="font-bold text-xl">Sites modernos</h2>

              </div>

            
              <div className="flex flex-col justify-center align-center text-center max-w-[300px]">
                <Image
                    src={quadro}
                    className="max-w-[200px] mx-auto"
                  />
                <h2 className="font-bold text-xl">Tecnologias atuais</h2>
              </div>

            
             <div className="flex flex-col justify-center align-center text-center max-w-[300px]">
                <Image
                    src={coroa}
                    className="max-w-[200px] mx-auto"
                  />
                <h2 className="font-bold text-xl">Designs elegantes</h2>
              </div>

            
              <div className="flex flex-col justify-center align-center text-center max-w-[300px]">
                <Image
                    src={celular}
                    className="max-w-[200px] mx-auto"
                  />
                <h2 className="font-bold text-xl">Sites responsivos</h2>
              </div>

            
              <div className="flex flex-col justify-center align-center text-center max-w-[300px]">
                <Image
                    src={raio}
                    className="max-w-[200px] mx-auto"
                  />
                <h2 className="font-bold text-xl">Sites rápidos</h2>
              </div>
              
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default DifferentialSection;
