import React from "react";
import { getFooterLinks } from "../utils/getFooterLinks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  const footerLinks = getFooterLinks();

  return (
    <div className="p-10 bg-gray-800 text-center flex md:flex-row-reverse md:items-center md:justify-center flex-col gap-5">
      <ul className="flex flex-row justify-center gap-5">
        {footerLinks.map(({ icon, link }, i) => {
          return (
            <li key={i}>
              <a href={link} className="text-white">
                <FontAwesomeIcon
                  icon={icon}
                  className="h-6 bg-yellow-500 p-3 hover:text-gray-800 rounded-xl"
                />
              </a>
            </li>
          );
        })}
      </ul>
      <p className="text-yellow-300 font-light">KEEP IN TOUCH</p>
    </div>
  );
};

export default Footer;
