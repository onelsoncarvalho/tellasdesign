import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

import checkIcon from '../../../assets/CheckIcon.svg';
import mockupView from '../../../assets/mockups/mockup_view4.png';
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
        className="relative md:pt-56 py-20 overflow-hidden bg-slate-100 z-10"
        id="diferencial"
      >
        <Container className="mb-28">
          <div className="grid md:grid-cols-2">
            <div>
              <div className="max-w-md">
                <SubHeading className="text-gray-800">{title}</SubHeading>
                <Text className="mt-4 text-[#313131]">{text}</Text>
              </div>

              <ul className="flex flex-col gap-4 mt-10">
                {items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center text-lg gap-1 text-gray-800 font-medium"
                  >
                    <Image
                      src={checkIcon}
                      alt="Ícone de Lista"
                      className="max-w-[30px]"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <Image
                src={mockupView}
                alt="Apresentações de alguns dos meus sites"
                className={mockupStyle}
              />
            </div>
          </div>
        </Container>

        <div className={`bg-slate-100 py-2 sticky ${showcaseBoxShadow}`}>
          <Container>
            {showcaseData.map((element) => (
              <motion.div
                key={element.title}
                initial={{
                  opacity: 0.3,
                  translateX: element.display === 0 ? -300 : 300,
                }}
                whileInView={{ opacity: 1, translateX: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                <Showcase
                  image={element.image}
                  subject={element.subject}
                  title={element.title}
                  text={element.text}
                  display={element.display}
                />
              </motion.div>
            ))}
          </Container>
        </div>
      </section>
    </>
  );
};

export default DifferentialSection;
