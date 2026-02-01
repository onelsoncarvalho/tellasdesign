import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { HiHome } from 'react-icons/hi';

import thumbImage from '../assets/thumb.png';
import HeadComponent from '../components/HeadComponent';
import Navbar from '../components/Navbar';
import Container from '../components/UI/Container';
import SubHeading from '../components/UI/Subheading';
import Text from '../components/UI/Text';

const ThanksPage = () => {
  const imageData = {
    src: thumbImage,
    alt: 'Joinha ou Ok',
  };
  const buttonStyle =
    'mt-5 bg-accentPurple p-2 flex items-center gap-2 max-w-fit font-text font-base rounded-md transition transition-700 border border-transparent hover:shadow-sm hover:shadow-accentPurple hover:border-darkerPurple hover:scale-105 md:text-lg cursor-pointer text-slate-100';

  return (
    <>
      <HeadComponent title="Tellas Design Digital | Agradecimentos" />

      <Navbar />

      <main className="pt-24 bg-slate-100 min-h-screen">
        <Container>
          <div className="mt-20 flex flex-col gap-5 items-center justify-center">
            <div className="max-w-[14em]">
              <Image
                src={imageData.src}
                alt={imageData.alt}
                className={'w-full max-h-[300px]'}
              />
            </div>

            <div className="items-center flex flex-col gap-4">
              <SubHeading className="text-3xl text-[#4249EC]">
                Obrigado
              </SubHeading>
              <Text className="text-slate-900 tracking-wider font-light mb-5">
                Agradecemos pelo seu contato. Sua mensagem será lida e respondida em breve.
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

export default ThanksPage;
