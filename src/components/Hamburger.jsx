import React, { useContext } from "react";
import { getNavLinks } from "../utils/getNavLinks";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { burgerContext } from "../App";

const Hamburger = () => {
  const navLinks = getNavLinks();
  const { burgerRef } = useContext(burgerContext);
  return (
    <div
      ref={burgerRef}
      className="hidden fixed right-0 h-screen md:w-halfFullVw w-quarterHalfFullVw bg-blueGrayTransparent text-white flex-row justify-between p-10 text-lg z-10 md:animate-wiggleHalf animate-wiggleQuarterHalf"
    >
      <ul className="flex flex-col gap-5">
        <li
          className="cursor-pointer"
          onClick={() =>
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
          }
        >
          <p>HOME</p>
        </li>
        {navLinks.map(({ link, text }, i) => {
          return (
            <li key={i}>
              <AnchorLink offset={() => 100} href={link}>
                {text}
              </AnchorLink>
            </li>
          );
        })}
      </ul>
      <FontAwesomeIcon
        icon={faXmark}
        onClick={() => (burgerRef.current.style.display = "none")}
        className="cursor-pointer h-6"
      />
    </div>
  );
};

export default Hamburger;
