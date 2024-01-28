import React from "react";
import { getNavLinks } from "../utils/getNavLinks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import AnchorLink from "react-anchor-link-smooth-scroll";

const NavBar = () => {
  const navLinks = getNavLinks();

  return (
    <nav className="bg-blueGray text-white text-lg flex flex-row justify-between p-10 sticky top-0 z-10">
      <h1>Portfolio</h1>
      <ul className="w-72 hidden lg:flex flex-row justify-around">
        {navLinks.map(({ link, text }, i) => (
          <li key={i}>
            {" "}
            <AnchorLink offset={() => 100} href={link} className="hover:underline">
              {text}
            </AnchorLink>{" "}
          </li>
        ))}
      </ul>
      <FontAwesomeIcon icon={faBars} className="lg:hidden block" />
    </nav>
  );
};

export default NavBar;
