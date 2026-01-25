import Link from 'next/link';
// import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { Link as ScrollLink } from 'react-scroll';

import NavbarData from '../../Data/Navbar';

const Navbar = () => {
  // const router = useRouter();
  const { links } = NavbarData;
  const [showNavbar, setShowNavbar] = useState(false);
  const activeLinkStyle = '!text-accentGreen';

  /* Function to Handle Scroll and change State */
  // if (typeof window !== 'undefined') {
  //   window.addEventListener('scroll', () => {
  //     if (window.scrollY >= 610) {
  //       return setShowBrandName(true);
  //     }
  //     return setShowBrandName(false);
  //   });
  // }

  return (
    <nav className="px-2 sm:px-4 py-2.5 bg-mainDark fixed w-full z-20 top-0 left-0 z-50 shadow-xl">
      <div className="container flex flex-wrap items-center justify-between mx-auto px-4 md:px-8">
        <Link href="/" className="col-span-1">
          <img
            src={'/codeIcon.png'}
            alt="Logo"
            width={35}
            height={35}
            onClick={() => setShowNavbar(false)}
          />
        </Link>
        <div className="flex md:order-2">
          <ScrollLink
            to={'contato'}
            smooth={true}
            spy={true}
            offset={-100}
            duration={500}
          >
            <button
              type="button"
              className="text-white hover:bg-indigo-700 font-medium rounded-lg text-sm px-6 py-2.5 text-center mr-3 md:mr-0 hover:ring-indigo-800 hover:ring-2 bg-gradient-to-r from-indigo-600 to-indigo-800 font-text"
              onClick={() => setShowNavbar(false)}
            >
              Contato
            </button>
          </ScrollLink>
          <button
            className="flex justify-center items-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 text-gray-400 hover:bg-gray-700 focus:ring-gray-600 text-xl"
            onClick={() => setShowNavbar(!showNavbar)}
          >
            {!showNavbar ? <HiMenuAlt3 /> : <HiX />}
          </button>
        </div>
        <div
          className="items-center justify-between w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul
            className={`flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 bg-mainDark absolute transition transition-translate duration-500 h-screen md:h-auto top-[43px] md:top-0 md:static left-0 w-full pl-5 pt-10 md:pt-4 md:w-auto md:translate-x-0 gap-5 md:gap-0 md:ml-5 ${
              showNavbar
                ? 'translate-x-0 md:w-auto'
                : '-translate-x-[1000px] transition duration-500'
            }`}
          >
            {links.map((link) => (
              <li key={link.id}>
                <ScrollLink
                  to={link.to}
                  smooth={true}
                  spy={true}
                  offset={link.offset}
                  duration={500}
                  className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0 cursor-pointer text-slate-50 tracking-wider font-text text-lg md:text-sm"
                  onClick={() => setShowNavbar(false)}
                  activeClass={activeLinkStyle}
                >
                  {link.label}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
