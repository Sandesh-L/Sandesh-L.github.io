// Navbar.js
import React, { useState } from 'react';
import { Link } from 'gatsby';
// import logo from '../images/Logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-background-950 text-text-300 py-4 px-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center justify-between w-full md:w-auto">
          <Link to="/" className="text-xl font-bold mr-6">
            <div className='md:flex items-center space-x-8 mt-4 md:mt-0'>
            {/* <img src={logo} alt="Logo" className="h-12 w-auto" /> */}
            Sandesh Lamichhane
            </div>
            
          </Link>
          <div className="md:hidden">
            <button className="mr-4" onClick={toggleMenu}>
              {isOpen ? (
                <FaTimes className="h-6 w-6 text-text-500" />
              ) : (
                <FaBars className="h-6 w-6 text-text-500" />
              )}
            </button>
          </div>
        </div>
        <div
          className={`${
            isOpen ? 'max-h-96 animate-fade-in-down' : 'max-h-0 animate-fade-out-up'
          } md:max-h-full overflow-hidden transition-all duration-400 ease-in-out md:flex md:items-center`}
        >
          <div className="md:flex items-center space-x-8 mt-4 md:mt-0">
            <Link
              to="/"
              className="text-text-300 hover:text-primary-500 px-4 py-2 transition duration-300"
            >
              Home
            </Link>
            <Link
              to="/projects"
              className="text-text-300 hover:text-primary-500 px-4 py-2 transition duration-300"
            >
              Projects
            </Link>
            <Link
              to="/contact"
              className="text-text-300 hover:text-primary-500 px-4 py-2 transition duration-300"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;