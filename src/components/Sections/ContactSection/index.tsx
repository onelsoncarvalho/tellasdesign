/* eslint-disable no-return-await */
import Image from 'next/image';
import React, { useRef, useState } from 'react';
import { AiFillGithub } from 'react-icons/ai';

import contactImage from '../../../assets/contact_image.png';
import gmailIcon from '../../../assets/gmail-icon.svg';
import ContactData from '../../../Data/Contact';
import SubHeading from '../../UI/Subheading';

const ContactSection = () => {
  const { title, contactGmail, githubData } = ContactData;
  const labelStyle = `my-2 flex flex-col text-white font-text text-lg`;
  const inputStyle = `rounded-sm text-gray-900 px-1 py-2`;

  const [isCopied, setIsCopied] = useState(false);
  const messageRef = useRef<HTMLDivElement>(null);

  const copyToClipBoard = async (text: string) => {
    if ('clipboard' in navigator) {
      return await navigator.clipboard.writeText(text);
    }
    return document.execCommand('copy', true, text);
  };

  const handleCopy = (text: string) => {
    copyToClipBoard(text)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 3000);
      })
      .catch((err) => {
        setIsCopied(false);
        return err;
      });
  };

  // Styles
  const contactSectionStyle = `min-h-screen h-full py-32 flex flex-col-reverse
    lg:grid
    lg:grid-cols-2 bg-mainDark
  `;

  return (
    <section className={contactSectionStyle}>
      <div className="w-full flex justify-center items-center lg:px-32 order-2 bg-white">
        <div className="max-w-md">
          <Image
            src={contactImage}
            alt="Imagem ilustrativa de contato"
            className="w-full h-auto"
          />
        </div>
      </div>

      <div
        className="bg-mainDark flex-1 py-16 md:pl-10 lg:py-0 order-1 flex justify-end lg:pr-24 items-center px-4"
        id="contato"
      >
        <div className="max-w-lg mr-0 w-full">
          <SubHeading className="text-center mb-5 text-white lg:text-left">
            {title}
          </SubHeading>

          <form
            className="flex flex-col max-w-xs mx-auto lg:max-w-none"
            action={`https://formsubmit.co/${contactGmail}`}
            method="POST"
          >
            <label className={labelStyle} htmlFor="name">
              Seu nome
              <input
                type="text"
                className={inputStyle}
                id="name"
                name="name"
                required={true}
              />
            </label>
            <label className={labelStyle} htmlFor="email">
              Seu e-mail
              <input
                type="email"
                className={inputStyle}
                id="email"
                name="email"
                required={true}
              />
            </label>
            <label className={labelStyle} htmlFor="message">
              Sua Mensagem
              <textarea
                className={inputStyle}
                rows={5}
                id="message"
                name="message"
                required={true}
              />
            </label>

            {/* <input type="hidden" name="_next" value={`${process.env.NEXT_PUBLIC_ENV !== 'production' ?}`} /> */}
            <input
              type="hidden"
              name="_next"
              value={
                process.env.NEXT_PUBLIC_ENV !== 'production'
                  ? 'http://localhost:3000/agradecimento'
                  : `${process.env.NEXT_PUBLIC_URL}/agradecimento`
              }
            />

            <input type="hidden" name="_captcha" value="false" />

            <button
              type="submit"
              className="bg-accentPurple text-white text-lg font-semibold p-2 mt-5 rounded-sm transition duration-200 hover:scale-105 tracking-wide"
            >
              Enviar
            </button>
          </form>

          <div className="flex flex-col items-center mt-10">
            <p className="text-white font-text">Ou se preferir:</p>

            <div>
              <div className="bg-white transition duration-500 rounded-md flex flex-col items-center gap-2 justify-between w-full my-4 font-medium text-mainDark hover:scale-105">
                <button
                  className="p-2 rounded-t-md transition duration-500  "
                  onClick={() => handleCopy(contactGmail)}
                >
                  <span className="flex justify-center items-center flex-wrap gap-2">
                    <Image
                      src={gmailIcon}
                      className="max-w-[30px]"
                      alt="Ícone do Gmail"
                    />
                    {contactGmail}
                  </span>
                </button>

                <div
                  className="transition transition-all duration-500 text-sm h-0 overflow-hidden"
                  ref={messageRef}
                  style={
                    isCopied
                      ? {
                          height: `${messageRef.current?.scrollHeight}px`,
                          marginTop: '-10px',
                          marginBottom: '5px',
                        }
                      : { height: '0px', marginTop: '-10px' }
                  }
                >
                  <span>(Copiado com sucesso 📋)</span>
                </div>
              </div>

              <a
                target="_blank"
                rel="noreferrer"
                className="p-2 bg-white transition duration-500 hover:bg-black hover:text-white rounded-md flex items-center gap-2 w-full hover:scale-105 my-4 font-medium text-mainDark"
                href={githubData.url}
              >
                <AiFillGithub fontSize={25} />
                {githubData.label}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
