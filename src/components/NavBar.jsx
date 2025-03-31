import React from 'react'

const NavBar = ({ darkMode, setDarkMode }) => {
    return (
        <nav className="bg-blue-600 text-white p-4 shadow-md flex justify-center">
          <ul className="flex space-x-6">
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#skills" className="hover:underline">Skills</a></li>
            <li><a href="#projects" className="hover:underline">Projects</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </nav>
      );
}

export default NavBar