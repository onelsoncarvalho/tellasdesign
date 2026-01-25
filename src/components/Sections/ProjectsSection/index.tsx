import { Splide, SplideSlide } from '@splidejs/react-splide';
import Image from 'next/image';
import React from 'react';
import '@splidejs/react-splide/css/sea-green';
import '@splidejs/splide/css/sea-green';
import { AiFillGithub } from 'react-icons/ai';
import { TbClick } from 'react-icons/tb';

import Projects from '../../../Data/Projects';
import Container from '../../UI/Container';
import SubHeading from '../../UI/Subheading';

const ProjectsSection = () => {
  const greenBtnStyle =
    'bg-accentGreen py-1 px-2 max-w-fit flex items-center gap-2 tracking-wide text-base text-gray-900 rounded-md transition transition-700 border border-transparent hover:shadow-sm hover:shadow-accentGreen hover:border-darkerGreen hover:scale-105 cursor-pointer';

  const darkBtnStyle =
    'bg-mainDark text-slate-50 py-1 px-2 rounded-md flex items-center gap-2 text-base max-w-fit transition duration-500 hover:bg-black hover:text-white hover:scale-105';

  // bg-gradient-to-r from-black to-[#212121]
  return (
    <section
      id="projetos"
      className={`
      relative
      z-20
      min-h-screen py-32
      bg-[#212121]

      bg-no-repeat
      bg-cover
      
      bg-[url('/grainy_dark.jpg')]
    `}
    >
      <SubHeading className="text-2xl text-center mb-5 text-white">
        {Projects.title}
      </SubHeading>

      <Container>
        <p className="text-white text-base text-center mb-4">
          Arraste pro lado
        </p>

        <div className="mx-auto flex justify-center items-center">
          <div className="flex overflow-x-scroll no-scrollbar gap-5 md:hidden snap-mandatory snap-x">
            {Projects.projects.map((project) => (
              <div
                className="flex justify-center snap-center"
                key={project.title}
              >
                <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg w-[calc(230px_+_10vh)]">
                  <Image
                    className="w-full h-48 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
                    src={project.image}
                    alt={project.title}
                  />
                  <div className="p-6 flex flex-col justify-start">
                    <h3 className="text-gray-900 text-xl font-medium mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-700 text-base mb-4">
                      {project.description}
                    </p>
                    <p className="text-gray-600 text-xs">
                      Desenvolvido em 2022
                    </p>

                    <div className="flex flex-col gap-2 mt-5">
                      <a
                        href={project.buttons[0].url}
                        className={greenBtnStyle}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <TbClick />
                        Visitar
                      </a>

                      {project.buttons[1] ? (
                        <a
                          href={project.buttons[1].url}
                          className={darkBtnStyle}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <AiFillGithub />
                          Código-Fonte
                        </a>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Splide
            aria-label="Projects Images"
            options={{
              pagination: true,
              type: 'loop',
              padding: 0,

              autoHeight: true,
              // autoplay: true,
              interval: 6000,
              speed: 1000,
              arrows: true,
              perPage: 1,
              gap: '2em',
              breakpoints: {
                640: {
                  padding: '5rem',
                },
              },
            }}
            className="hidden md:flex md:max-w-[800px] lg:max-w-[1000px]"
          >
            {Projects.projects.map((project) => (
              <SplideSlide
                key={project.title}
                className="bg-white max-w-sm flex flex-col"
              >
                <div>
                  <Image src={project.image} alt={project.alt} className="" />
                </div>

                <div className="p-5 h-full">
                  <h3 className="text-gray-900 text-xl font-medium mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-700 text-base mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-col gap-2 mt-5">
                    <a
                      href={project.buttons[0].url}
                      className={greenBtnStyle}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <TbClick />
                      Visitar
                    </a>

                    {project.buttons[1] ? (
                      <a
                        href={project.buttons[1].url}
                        className={darkBtnStyle}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <AiFillGithub />
                        Código-Fonte
                      </a>
                    ) : null}
                  </div>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </Container>
    </section>
  );
};

export default ProjectsSection;
