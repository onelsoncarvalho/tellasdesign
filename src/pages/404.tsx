import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { HiHome } from 'react-icons/hi';

import notFoundImg from '../assets/not_found.svg';
import HeadComponent from '../components/HeadComponent';
import Navbar from '../components/Navbar';
import Container from '../components/UI/Container';
import SubHeading from '../components/UI/Subheading';
import Text from '../components/UI/Text';

const NotFoundPage = () => {
  const imageData = {
    src: notFoundImg,
    alt: 'Ilustração do Erro 404 (Não encontrado)',
  };
  const buttonStyle =
    'mt-5 bg-accentPurple p-2 flex items-center gap-2 max-w-fit font-text font-base rounded-md transition transition-700 border border-transparent hover:shadow-sm hover:shadow-accentPurple hover:border-darkerPurple hover:scale-105 md:text-lg cursor-pointer text-slate-100';

  return (
    <>
      <HeadComponent title="Nelson Carvalho | Página não encontrada" />
      <Navbar />

      <main className="pt-20 bg-mainDark min-h-screen">
        <Container>
          <div className="mt-20 flex flex-col gap-5">
            <div className="max-w-[30em]">
              <Image
                src={imageData.src}
                alt={imageData.alt}
                className="w-full max-h-[300px]"
              />
            </div>

            <div>
              <SubHeading className="text-3xl text-slate-50">
                Erro 404: Página não encontrada
              </SubHeading>
              <Text className="text-slate-50">
                Não se preocupe, volte para a página inicial
              </Text>
              <Link href="/">
                <button type="button" className={buttonStyle}>
                  <HiHome />
                  Página Inicial
                </button>
              </Link>
            </div>
          </div>
        </Container>
      </main>
    </>
  );
};

export default NotFoundPage;
