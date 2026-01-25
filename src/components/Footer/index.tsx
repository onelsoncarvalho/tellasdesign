import Image from 'next/image';
import React from 'react';

import logo from '../../assets/codeIcon.png';
import Container from '../UI/Container';
import Text from '../UI/Text';

const Footer = () => {
  const listItemStyle = 'my-1';
  const linkStyle = 'cursor-pointer hover:underline font-light';

  return (
    <footer className="bg-[#252525] py-10">
      <Container>
        <div className="font-heading text-white flex items-center gap-4 text-xl font-medium tracking-wide">
          <Image
            src={logo}
            alt="Nelson Carvalho - Logo"
            className="max-h-[40px] w-auto"
          />
          Nelson Carvalho
        </div>

        <div className="mt-8 flex flex-col lg:flex-row lg:gap-28">
          <ul className="my-4 font-medium text-white font-text">
            Navegação
            <li className={listItemStyle}>
              <a className={linkStyle} href="#home">
                Home
              </a>
            </li>
            <li className={listItemStyle}>
              <a className={linkStyle} href="#projetos">
                Projetos
              </a>
            </li>
            <li className={listItemStyle}>
              <a className={linkStyle} href="#diferencial">
                Diferencial
              </a>
            </li>
            <li className={listItemStyle}>
              <a className={linkStyle} href="#sobre">
                Sobre
              </a>
            </li>
            <li className={listItemStyle}>
              <a className={linkStyle} href="#contato">
                Contato
              </a>
            </li>
          </ul>
          {/* <ul className="my-4 font-medium text-white font-text">
            Navegação
            <li className={listItemStyle}>
              <a className={linkStyle}>Home</a>
            </li>
            <li className={listItemStyle}>
              <a className={linkStyle}>Projetos</a>
            </li>
            <li className={listItemStyle}>
              <a className={linkStyle}>Diferencial</a>
            </li>
            <li className={listItemStyle}>
              <a className={linkStyle}>Sobre</a>
            </li>
            <li className={listItemStyle}>
              <a className={linkStyle}>Contato</a>
            </li>
          </ul> */}
        </div>
        <Text className="text-[#e1e1e1] mt-10 text-base text-center mx-auto !text-base">
          Desenvolvido por Nelson Carvalho - 2022
        </Text>
      </Container>
    </footer>
  );
};

export default Footer;
