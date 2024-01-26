import React from 'react'

const NavBar = () => {
  return (
    <nav className="bg-blueGray text-white flex flex-row justify-between">
        <h1>portfolio</h1>
        <ul className="flex flex-row">
            <li>
                <a href="#">Home</a>
            </li>
            <li>
                <a href="#">Contact Me</a>
            </li>
            <li>
                <a href="#">Projects</a>
            </li>
        </ul>
    </nav>
  )
}

export default NavBar