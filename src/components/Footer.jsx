import React from "react";
import { getFooterLinks } from "../utils/getFooterLinks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  const footerLinks = getFooterLinks();

  return (
    <div className="p-10 bg-blueGray text-center">
      <ul className="flex flex-row justify-center gap-5">
        {footerLinks.map(({ icon, link }, i) => {
          return <li key={i}>
            <a href={link} className="text-white">
              <FontAwesomeIcon icon={icon} className="h-8"/>
            </a>
          </li>;
        })}
      </ul>
    </div>
  );
};

export default Footer;
