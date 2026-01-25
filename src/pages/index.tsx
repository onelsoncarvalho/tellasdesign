import type { NextPage } from 'next';
import React from 'react';

import Footer from '../components/Footer';
import HeadComponent from '../components/HeadComponent';
import Navbar from '../components/Navbar';
import AboutSection from '../components/Sections/AboutSection';
import ContactSection from '../components/Sections/ContactSection';
import DifferentialSection from '../components/Sections/DifferentialSection';
import HeroSection from '../components/Sections/HeroSection';
import ProjectsSection from '../components/Sections/ProjectsSection';
import AboutData from '../Data/About';

// Main Page
const Home: NextPage = () => {
  return (
    <>
      <HeadComponent />
      <Navbar />

      <main className="#overflow-x-hidden">
        <HeroSection />
        <ProjectsSection />
        <DifferentialSection />
        <AboutSection {...AboutData} />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
};

export default Home;
