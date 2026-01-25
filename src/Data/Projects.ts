import advogadoImage from '../assets/projects_images/advogado.webp';
import amazonasDataHubImage from '../assets/projects_images/amazonasdatahub.webp';
import doceriaImage from '../assets/projects_images/doceria.webp';
import healthImage from '../assets/projects_images/health.webp';
import inknotesImage from '../assets/projects_images/inknotes.webp';
import lectureImage from '../assets/projects_images/lecture.jpg';
import metaversusImage from '../assets/projects_images/metaversus.png';
import popCloneImage from '../assets/projects_images/pop-clone.webp';
import selfcareImage from '../assets/projects_images/selfcare.webp';

const Projects = {
  title: 'Confira meus Projetos',
  projects: [
    {
      title: 'Doceria',
      description:
        'Website de uma Doceria fictícia. Feito com as tecnologias Vite e React.js, é um site responsivo e rápido.',
      image: doceriaImage,
      alt: 'Website de uma Doceria Fictícia',
      buttons: [
        {
          url: 'https://doceria-site.vercel.app/',
        },
        {
          url: 'https://github.com/onelsoncarvalho/doceria-site',
        },
      ],
    },
    {
      title: 'Health',
      description:
        'Website de uma empresa fictícia denominada Health. Esse site mostra informações sobre essa empresa, tais como Sobre, Contato, App e FAQ.',
      image: healthImage,
      alt: 'Website de uma empresa fictícia chamada Health',
      buttons: [
        {
          url: 'https://health-site-eight.vercel.app/',
        },
        {
          url: 'https://github.com/onelsoncarvalho/health-site',
        },
      ],
    },
    {
      title: 'Pop!_OS Clone',
      description:
        'Clone da página inicial do site do sistema operacional Pop!_OS. Desenvolvido com Next.js e Styled Components',
      image: popCloneImage,
      alt: 'Clone de Interface da página inicial do site do Pop!_OS',
      buttons: [
        {
          url: 'https://pop-os-clone.vercel.app/',
        },
        {
          url: 'https://github.com/onelsoncarvalho/pop-os-clone',
        },
      ],
    },
    {
      title: 'InkNotes',
      description:
        'O InkNotes é um simples Web App feito para fazer anotações rápidas e de forma prática. Foi desenvolvido com Vite, React.js e TailwindCSS',
      image: inknotesImage,
      alt: 'InkNotes, Web App simples',
      buttons: [
        {
          url: 'https://inknotes-site.vercel.app',
        },
        {
          url: 'https://github.com/onelsoncarvalho/inknotes-site',
        },
      ],
    },
    {
      title: 'Selfcare',
      description:
        'Uma página de uma loja virtual fictícia chamada de Selfcare. Conta com o framework Next.js, responsável por melhorar a Otimização de Mecanismos de Busca (SEO), e também possui animações e Contextos.',
      image: selfcareImage,
      alt: 'Website de uma loja virtual fictícia',
      buttons: [
        {
          url: 'https://selfcare-loja.vercel.app',
        },
        {
          url: 'https://github.com/onelsoncarvalho/selfcare-page',
        },
      ],
    },
    // {
    //   title: 'Paulo Almeida | Advogado Especializado',
    //   description:
    //     'Uma Landing Page (Página de Apresentação) de um advogado fictício. Feita com tecnologias modernas e escaláveis visando melhorar a usabilidade e SEO.',
    //   image: advogadoImage,
    //   alt: 'Website de um advogado fictício',
    //   buttons: [
    //     {
    //       url: 'https://advogado.vercel.app',
    //     },
    //     {
    //       url: 'https://github.com/onelsoncarvalho/advogado',
    //     },
    //   ],
    // },
    {
      title: 'Marcos Oliveira | Palestrante',
      description:
        'Página de Venda de curso de Oratória de um palestrante chamado Marcos Oliveira. Focada em apresentar as vantagens do curso e converter leads em clientes, usa tecnologias modernas e rápidas.',
      image: lectureImage,
      alt: 'Página de Venda de curso de Oratória',
      buttons: [
        {
          url: 'https://palestrante.vercel.app',
        },
        {
          url: 'https://github.com/onelsoncarvalho/palestrante',
        },
      ],
    },
    {
      title: 'Metaversus | Landing Page',
      description:
        'Essa é uma Landing Page baseada no conceito de Metaverso e Realidade Virtual. Além de conter animações visualmente elegantes, possui um Design Moderno e atraente.',
      image: metaversusImage,
      alt: 'Landing Page sobre Metaverso e Realidade Virtual',
      buttons: [
        {
          url: 'https://metaverso-blush.vercel.app/',
        },
        {
          url: 'https://github.com/onelsoncarvalho/metaverso',
        },
      ],
    },
    {
      title:
        'AmazonasDataHub | Coleção de dados do Amazonas para aplicações Estatísticas',
      description:
        'Landing Page e Documentação Oficial do pacote AmazonasDataHub, desenvolvido para um projeto da Universidade Federal do Amazonas (UFAM).',
      image: amazonasDataHubImage,
      alt: 'Landing Page do AmazonasDataHub',
      buttons: [
        {
          url: 'https://nelson-devstack.github.io/amazonasdatahubsite',
        },
      ],
    },
  ],
};

export default Projects;
