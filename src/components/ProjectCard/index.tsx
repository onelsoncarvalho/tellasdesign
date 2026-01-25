import Image, { StaticImageData } from 'next/image';
import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { TbClick } from 'react-icons/tb';

import Text from '../UI/Text';

type ProjectButtons = {
  url: string;
};

type ProjectCardProps = {
  title: string;
  text: string;
  image: string | StaticImageData;
  imageAlt: string;
  buttons: ProjectButtons[];
};

const ProjectCard = ({
  title,
  text,
  image,
  imageAlt,
  buttons,
}: ProjectCardProps) => {
  const greenBtnStyle =
    'mt-5 bg-accentGreen py-1 px-2 max-w-fit flex items-center gap-2 font-text font-medium rounded-md transition transition-700 border border-transparent hover:shadow-sm hover:shadow-accentGreen hover:border-darkerGreen hover:scale-105 md:text-lg cursor-pointer';
  const darkBtnStyle =
    'bg-mainDark text-slate-50 py-1 px-2 rounded-md flex items-center gap-2 text-lg max-w-fit transition duration-500 hover:bg-black hover:text-white hover:scale-105';

  const projectCardWrapperStyle = `shadow-xl max-w-lg lg:max-w-4xl rounded-md border border-gray-200 my-4
    flex flex-col md:grid md:grid-cols-2 bg-white`;

  return (
    <div className={projectCardWrapperStyle}>
      <div className="relative">
        {/* <img
          src={image}
          alt={imageAlt}
          className="rounded-md md:rounded-none md:rounded-l-md md:w-full md:h-full md:object-cover w-full h-full"
        /> */}
        <Image
          src={image}
          alt={imageAlt}
          className="rounded-md md:rounded-none md:rounded-l-md md:w-full md:h-full md:object-cover w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-medium">{title}</h3>
        <Text>{text}</Text>

        <div className="flex flex-col gap-4 lg:gap-3 mt-5">
          <a
            href={buttons[0].url}
            className={greenBtnStyle}
            target="_blank"
            rel="noreferrer"
          >
            <TbClick />
            Visitar
          </a>

          {buttons[1] ? (
            <a
              href={buttons[1].url}
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
  );
};

export default ProjectCard;
