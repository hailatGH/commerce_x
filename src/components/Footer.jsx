import React from "react";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
  const handleInstagramClick = () => {
    window.open("https://www.instagram.com/hailat_insta/", "_blank");
  };

  const handleTwitterClick = () => {
    window.open("https://twitter.com/nerdProg", "_blank");
  };

  return (
    <div className="footer-container">
      <p>2023 Commerce X Headphones All rights reserverd</p>
      <p className="icons">
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleInstagramClick}
        >
          <AiFillInstagram />
        </a>

        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleTwitterClick}
        >
          <AiOutlineTwitter />
        </a>
      </p>
    </div>
  );
};

export default Footer;
