import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import KarmaLogo from "../../assets/karma-logo.svg";
import { NavLink, Link } from "react-router-dom";

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
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { id: 1, text: "Home", link: "/" },
    { id: 2, text: "Events", link: "www.google.com" },
    { id: 3, text: "Workshops", link: "www.google.com" },
    { id: 4, text: "Proshow", link: "www.google.com" },
    { id: 5, text: "Tickets", link: "www.google.com" },
    { id: 6, text: "Ambassadors", link: "/login" },
  ];

  return (
    <div
      className={`sticky top-0 flex justify-between items-center h-24 w-full text-white text-lg z-20 px-6 ${
        scrollBackground ? "bg-[#000000] bg-opacity-80" : ""
      }`}
    >
      <Link to="/">
        <img src={KarmaLogo} className="h-16" alt="KarmaLogo" />
      </Link>

      <ul className="hidden lg:flex">
        {navItems.map((item) => (
          <NavLink
            to={item.link}
            key={item.id}
            className={`p-1 hover:text-[#8EFF09] rounded-xl px-6 cursor-pointer duration-300 ${
              item.text === "Ambassadors"
                ? "bg-[#8EFF09] hover:text-black px-8 mr-10 text-black"
                : ""
            }`}
          >
            {item.text}
          </NavLink>
        ))}
      </ul>

      <div onClick={handleNav} className="block lg:hidden">
        {nav ? <AiOutlineClose size={40} /> : <AiOutlineMenu size={40} />}
      </div>
      <div
        className={`fixed ease-in-out w-[80%] duration-500 top-0 bottom-0 z-10 ${
          nav ? "lg:hidden left-0 border-r border-r-gray-900" : "left-[-100%]"
        }`}
        style={{
          backdropFilter: "blur(20px)",
        }}
      >
        <Link to="/"
        onClick={handleNav}
        >
          <img src={KarmaLogo} className="h-16 ml-6 mt-4" alt="KarmaLogo" />
        </Link>
        <ul
          className="flex flex-col mt-8"
          style={{
            backdropFilter: "blur(20px)",
          }}
        >
          {navItems.map((item) => (
            <NavLink
              onClick={handleNav}
              to={item.link}
              className={`p-4 hover:text-[#8EFF09] rounded-xl px-6 cursor-pointer duration-300 ${
                item.text === "Ambassadors"
                  ? "bg-[#8EFF09] hover:text-white hover:bg-[#09D3FF] px-8 mt-2 mx-6 text-black text-xl grid place-items-center"
                  : ""
              }`}
            >
              {item.text}
            </NavLink>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
