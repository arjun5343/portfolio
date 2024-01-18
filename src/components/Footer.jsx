import React from "react";
import facebook from "../assets/socials/lln.png";
import instagram from "../assets/socials/insta.png";
import dribbble from "../assets/socials/github.png";
import email from "../assets/socials/mm.png";

const Footer = () => {
  return (
    <div className="md:px-10 px-7 mt-24">
      <div className="text-white opacity-50 flex flex-col md:flex-row justify-between items-center my-5">
        <p>@ Copyright 2024 | ARJUN V V</p>
        <p className="hidden sm:block">Fullstack Developer</p>
        <p className="hidden sm:block">UI Designer</p>
      </div>
      {/* social media */}
      <div className="flex mb-5 justify-center md:justify-start  ">
        <a
          href="https://www.linkedin.com/in/arjunvv48"
          target="_blank"
          rel="noreferrer"
        >
          <img src={facebook} alt="" className="h-11 w-11"  />
        </a>
        <a
          className="ml-4"
          href="https://www.instagram.com/arjun_48_?igsh=MWs4MDRtc3Z2OXh0cw=="
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagram} alt="" className="h-11 w-11"  />
        </a>
        <a
          className="ml-4"
          href="https://github.com/arjun5343"
          target="_blank"
          rel="noreferrer"
        >
          <img src={dribbble} alt="" className="h-11 w-11" />
        </a>
        <a
          className="ml-4"
          href="mailto:arjunvv048@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <img src={email} alt="" className="h-11 w-11"/>
          </a>
         
      
      </div>
    </div>
  );
};

export default Footer;
