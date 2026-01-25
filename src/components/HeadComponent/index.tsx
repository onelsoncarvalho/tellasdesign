import Head from 'next/head';
import React from 'react';

type HeadProps = {
  title?: string;
};

const HeadComponent = ({ title }: HeadProps) => {
  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{title}</title>
      <meta name="author" content="Nelson Carvalho | Github: onelsoncarvalho" />
      <meta
        name="description"
        content="Sou Nelson Carvalho, programador, desenvolvedor web e Web Designer. Confira meu Portfolio e veja meus projetos."
      />
      <meta name="robots" content="follow" />

      {/* Meta OG */}
      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta
        property="og:description"
        content="Web Designer e Desenvolvedor Web, desenvolvo sites e posso aumentar seu público e seu alcance através deles."
      />
      <meta property="og:image" content="/meta_og_image.png" />
      <meta property="og:image:width" content="300" />
      <meta property="og:image:height" content="300" />
      <meta property="og:url" content="https://nelsoncarvalho.vercel.app/" />
      <meta
        property="og:site_name"
        content="Desenvolvimento e criação de Sites"
      />

      {/* Favicons */}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicons/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicons/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicons/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicons/safari-pinned-tab.svg"
        color="#212121"
      />
      <link rel="shortcut icon" href="/src/assets/favicons/favicon.ico" />
      <meta name="msapplication-TileColor" content="#212121" />
      <meta name="msapplication-config" content="/favicons/browserconfig.xml" />
      <meta name="theme-color" content="#ffffff" />
    </Head>
  );
};

HeadComponent.defaultProps = {
  title: 'Nelson Carvalho | Desenvolvedor Web',
};

export default HeadComponent;
