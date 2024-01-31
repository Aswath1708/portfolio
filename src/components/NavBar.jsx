import React, { useContext } from "react";
import { getNavLinks } from "../utils/getNavLinks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { burgerContext } from "../App";

const NavBar = () => {
  const navLinks = getNavLinks();
  const { burgerRef } = useContext(burgerContext);

  return (
    <nav className="bg-blueGray text-white text-lg flex flex-row justify-between md:p-10 p-6 sticky top-0 z-10">
      <h1 className="font-bold">PORTFOLIO</h1>
      <ul className="w-72 hidden lg:flex flex-row justify-around">
        <li>
          <p
            className="hover:underline cursor-pointer"
            onClick={() =>
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
            }
          >
            HOME
          </p>
        </li>
        {navLinks.map(({ link, text }, i) => (
          <li key={i}>
            {" "}
            <AnchorLink
              offset={() => 100}
              href={link}
              className="hover:underline"
            >
              {text}
            </AnchorLink>{" "}
          </li>
        ))}
      </ul>
      <FontAwesomeIcon
        icon={faBars}
        className="lg:hidden block cursor-pointer h-5"
        onClick={() => (burgerRef.current.style.display = "flex")}
      />
    </nav>
  );
};

export default NavBar;
