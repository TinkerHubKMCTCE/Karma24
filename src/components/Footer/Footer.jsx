import React from "react";
import "./Footer.css";
import karma_logo from "../../assets/karma-logo-color.svg";
import azraqz_logo from "../../assets/azraqz-logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedinIn,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="flex flex-col items-center w-sceen pb-[40px] pt-[100px] footer">
      <div className="flex grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-[118px_94px_150px_171px] lg:w-[1074px] justify-between pb-[50px] gap-10">
        <div className="">
          <a href="">
            <h1>Home</h1>
          </a>
          <a href="">
            <p>Meet the team</p>
          </a>
          <a href="">
            <p>Sponsors</p>
          </a>
          <a href="">
            <p>Proshows</p>
          </a>
          <a href="">
            <p>Worskhops</p>
          </a>
          <a href="">
            <p>Events</p>
          </a>
          <a href="">
            <p>College MAP</p>
          </a>
        </div>
        <div className="">
          <a href="">
            <h1>Information</h1>
          </a>
          <a href="">
            <p>FAQ</p>
          </a>
          <a href="">
            <p>Blog</p>
          </a>
          <a href="">
            <p>Support</p>
          </a>
        </div>
        <div className="">
          <a href="">
            <h1>Event Home</h1>
          </a>
          <a href="">
            <p>About karma</p>
          </a>
          <a href="">
            <p>Ambassador Login</p>
          </a>
          <a href="">
            <p>Contact us</p>
          </a>
        </div>
        <div className="flex flex-col items-center sm:col-span-3 md:col-span-3 lg:col-span-1">
          <h1>Powered By</h1>
          <img
            src={azraqz_logo}
            alt="azraqz"
            className="w-[171px] h-[162px] azraqz-logo"
          />
          <h1>2020-2024</h1>
        </div>
      </div>
      <hr className="divider w-[250px] lg:w-[1074px] md:w-[500px]" />
      <div className="flex grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 lg:w-[1074px] pt-[46px] gap-10">
        <div className="flex justify-center lg:justify-start ">
          <img src={karma_logo} alt="karma" className="w-[100px] h-[110px]" />
        </div>
        <div className="flex justify-center pt-[8px]">
          <a href="">
            <h1 className="px-[20px]">Terms</h1>
          </a>
          <a href="">
            <h1 className="px-[20px]">Privacy</h1>
          </a>
          <a href="">
            <h1 className="px-[20px]">Cookies</h1>
          </a>
        </div>
        <div className="flex justify-center lg:justify-end pb-[50px]">
          <a className="icon-container" href="">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a className="icon-container" href="">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a className="icon-container" href="">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;