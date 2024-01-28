import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import KarmaLogo from "../../assets/karma-logo.svg";


const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrollBackground, setScrollBackground] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const shouldHaveBackground = scrollPosition > 0;
    setScrollBackground(shouldHaveBackground);
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { id: 1, text: 'Home' },
    { id: 2, text: 'Events' },
    { id: 3, text: 'Workshops' },
    { id: 4, text: 'Proshow' },
    { id: 5, text: 'Tickets' },
    { id: 6, text: 'Ambassadors'}
  ];

  return (
    <div
      className={`fixed flex justify-between items-center h-24 w-full mx-auto px-2 text-white text-lg m-5 ${
        scrollBackground ? 'bg-[#000000] bg-opacity-60 rounded-xl m-6' : ''
      }`}
    >
      <img src={KarmaLogo} className="h-16 ml-16" alt="KarmaLogo" />

      <ul className='hidden md:flex'>
        {navItems.map(item => (
          <li
          key={item.id}
          className={`p-1 hover:text-[#8EFF09] rounded-xl px-6 cursor-pointer duration-300 ${
            item.text === 'Ambassadors' ? 'bg-[#8EFF09] hover:text-white hover:bg-[#09D3FF] px-8 mr-10 text-black' : ''
            
          }`}
        >
          {item.text}
        </li>
        ))}
      </ul>

      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={40} />}
      </div>

      <ul
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%] mr-8'
        }
      >
        <img src={KarmaLogo} className="h-16 ml-16 mt-4" alt="KarmaLogo" />

        {navItems.map(item => (
          <li
            key={item.id}
            className={`mt-2 p-4 border-b border-gray-600 hover:text-[#8EFF09] rounded-xl px-6 cursor-pointer duration-300 ${
              item.text === 'Ambassadors' ? 'bg-[#8EFF09] hover:text-white hover:bg-[#09D3FF] px-8 mt-10 ml-6 mr-6 text-black text-xl grid place-items-center'  : ''
              
            }`}
          >
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;