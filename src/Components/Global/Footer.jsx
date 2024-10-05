import React from "react";

import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import LogoLight from "../../Assets/Site-Images/LogoLight.png";

const Footer = () => {
  return (
    <div className="mt-32 lg:mt-64 bg-sec-dark w-full py-10 ">
      <div className="mx-auto w-11/12 xl:w-[1100px] grid lg:grid-cols-2 gap-8">
        <div>
          <img src={LogoLight} className="h-16" alt="" />
          <div className="flex gap-4 mt-4 text-white text-2xl">
            <a
              href="https://www.instagram.com/syedahmedrz/"
              target="_blank"
              className="hover:opacity-100 opacity-45"
            >
              <FaInstagram />
            </a>
            <a
              href="https://wa.me/+971509494656"
              target="_blank"
              className="hover:opacity-100 opacity-45"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://github.com/syedahmedrz"
              target="_blank"
              className="hover:opacity-100 opacity-45"
            >
              <FaGithub />
            </a>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-white">
            <a className="block" href="mailto:syed@rioox.com">
              syed@rioox.com
            </a>
            <a href="tel:+971 50 949 4656" className="block mt-1">
              +971 50 949 4656
            </a>
          </div>
          <span className="text-white text-5xl">·</span>
          <a
            href="javascript:void(Tawk_API.toggle())"
            className="bg-ter-dark hover:opacity-80 text-white flex items-center justify-center gap-3 rounded-lg shadow-lg transition-colors duration-300 disabled:bg-ter-dark w-[100px] h-10"
          >
            Live Chat
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
