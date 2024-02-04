import React, { useContext } from "react";
import { getNavLinks } from "../utils/getNavLinks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { burgerContext } from "../App";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const navLinks = getNavLinks();
  const { burgerRef } = useContext(burgerContext);

  return (
    <nav className="bg-gray-800 text-gray-500 text-lg flex flex-row justify-between items-center md:p-10 p-6 sticky top-0 z-10">
      <img src={logo} alt="logo" className="h-8" />
      <ul className="hidden lg:flex flex-row gap-10">
        <li>
          <p
            className="hover:text-yellow-300 cursor-pointer"
            onClick={() =>
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
            }
          >
            HOME
          </p>
        </li>

        {/* scrollToSection = (sectionId) => {

scroller.scrollTo(sectionId, {

duration: 800,

delay: 0,

smooth: 'easeInOutQuart',

});

}; */}

        {navLinks.map(({ link, text }, i) => (
          <li key={i}>
            {" "}
            {/* <NavLink to={link}> */}
            <AnchorLink
              offset={() => 100}
              href={link}
              className="hover:text-yellow-300"
            >
              {text}
            </AnchorLink>{" "}
            {/* </NavLink> */}
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
