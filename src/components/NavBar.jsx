import React from "react";
import { getNavLinks } from "../utils/getNavLinks";

const NavBar = () => {
  const navLinks = getNavLinks();

  return (
    <nav className="bg-blueGray text-white flex flex-row justify-between p-10 sticky top-0">
      <h1>portfolio</h1>
      <ul className="w-60 flex flex-row justify-around">
        {navLinks.map(({ link, text }, i) => (
          <li key={i}>
            {" "}
            <a href={link}>{text}</a>{" "}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;