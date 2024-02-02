import React from "react";
import { getFooterLinks } from "../utils/getFooterLinks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  const footerLinks = getFooterLinks();

  return (
    <div className="p-10 bg-gray-800 text-center flex flex-col gap-5">
      <ul className="flex flex-row justify-center gap-5">
        {footerLinks.map(({ icon, link }, i) => {
          return <li key={i}>
            <a href={link} className="text-white hover:text-brightYellow">
              <FontAwesomeIcon icon={icon} className="h-6 bg-yellow-600 p-3 rounded-full"/>
            </a>
          </li>;
        })}
      </ul>
      <p className="text-yellow-500 font-medium">KEEP IN TOUCH</p>
    </div>
  );
};

export default Footer;
