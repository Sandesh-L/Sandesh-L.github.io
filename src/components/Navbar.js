// Navbar.js
import React, { useState } from 'react';
import { Link } from 'gatsby';
import logo from "../images/clearLOGO.png"

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <nav className="bg-background-50 text-text-900 py-4 px-6 flex justify-between items-center">
      <div className="flex items-center">
        <Link to="/" className="text-xl font-bold mr-6">
          <img src={logo} alt="Logo" className="h-8 w-auto mr-2"/>
        </Link>
        <Link to="/" className="mr-4 hover:text-primary-600">
          Home
        </Link>
        <Link to="/resume" className="mr-4 hover:text-primary-600">
          Resume
        </Link>
        <Link to="/projects" className="mr-4 hover:text-primary-600">
          Projects
        </Link>
        <Link to="/contacts" className="hover:text-primary-600">
          Contacts
        </Link>
      </div>
      <button
        className="bg-primary-500 text-background-50 px-4 py-2 rounded hover:bg-primary-600"
        onClick={toggleTheme}
      >
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </nav>
  );
};

export default Navbar;