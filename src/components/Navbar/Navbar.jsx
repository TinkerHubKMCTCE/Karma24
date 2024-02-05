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
    <>
      <div
        className="sticky top-0 z-40 bg-[#000000] bg-opacity-30"
        style={{
          backdropFilter: "blur(20px)",
        }}
      >
        <div
          className={`container max-w-screen-xl mx-auto flex justify-between items-center w-full text-white text-lg px-4`}
        >
          <Link to="/">
            <img
              src={KarmaLogo}
              height={scrollBackground ? 44 : 68}
              width={scrollBackground ? 44 : 68}
              className={`p-2 lg:py-4 transition-all duration-500 ease-in-out h-16 w-16${
                scrollBackground ? "h-16 w-16" : "lg:h-24 lg:w-24"
              }`}
              alt="KarmaLogo"
            />
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
        </div>
      </div>

      <div
        className={`fixed ease-in-out  duration-500 top-0 bottom-0 z-40 ${
          nav ? "lg:hidden left-0 border-r border-r-gray-800" : "left-[-100%]"
        }`}
        style={{
          backdropFilter: "blur(20px)",
        }}
      >
        <Link to="/" onClick={handleNav}>
          <img src={KarmaLogo} className="h-16 ml-6 mt-4" alt="KarmaLogo" />
        </Link>
        <ul className="flex flex-col mt-8">
          {navItems.map((item) => (
            <NavLink
              onClick={handleNav}
              to={item.link}
              className={`p-4 hover:text-karma-green text-2xl rounded-xl px-6 cursor-pointer duration-300 ${
                item.text === "Ambassadors"
                  ? "bg-[#8EFF09] hover:text-white hover:bg-karma-blue px-8 mt-2 mx-6 text-black text-xl grid place-items-center"
                  : ""
              }`}
            >
              {item.text}
            </NavLink>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
