import img3 from '../assets/designs_elegantes.png';
import img4 from '../assets/diferentes_telas.png';
import img2 from '../assets/escalabilidade.png';
import macbookMockup from '../assets/mockups/website_desktop.png';
import mobileMockup from '../assets/mockups/website_mobile.png';
import img1 from '../assets/websites_modernos.png';

const DifferentialsData = {
  title: 'Fazendo a Diferença',
  text: 'Buscando usar tecnologias e conceitos modernos, construo sites de forma prática e escalável.',
  images: [
    {
      src: macbookMockup,
      alt: 'Website funcionando em um Notebook',
    },
    {
      src: mobileMockup,
      alt: 'Website funcionando em um Celular',
    },
  ],
  items: [
    'Websites Modernos',
    'Tecnologias atuais',
    'Designs Elegantes',
    'Mesmo site, diferentes telas',
  ],
  showcaseData: [
    {
      image: img1,
      subject: 'tecnologia',
      title: 'Websites Modernos',
      text: 'Com tecnologias atuais, desenvolvo sites com boa performance, ou seja, com alta velocidade, e alta qualidade.',
      display: 0,
    },
    {
      image: img2,
      subject: 'escalabilidade',
      title: 'Alta Escalabilidade',
      text: 'Usando boas práticas de Programação e Desenvolvimento Web, crio sites bem estruturados e fáceis de fazer manutenção.',
      display: 1,
    },
    {
      image: img3,
      subject: 'elegância',
      title: 'Designs Elegantes',
      text: 'Através ferramentas de Design, desenvolvo interfaces simples, intuitivas e elegantes, de modo que o usuário do site tenha uma experiência boa e agradável.',
      display: 0,
    },
    {
      image: img4,
      subject: 'responsividade',
      title: 'Mesmo site, Diferentes Telas',
      text: 'Um site responsivo é aquele site que se adapta a diferentes tamanhos de tela, e todos os sites que eu desenvolvo usam esse conceito, a Responsividade.',
      display: 1,
    },
  ],
};

export default DifferentialsData;
