// Footer.js
import React from 'react';
import { Link } from 'gatsby';

const Footer = () => {
  return (
    <footer className="bg-primary-200 text-white py-6 px-6 flex flex-col md:flex-row justify-between items-center">
      <div className="mb-4 md:mb-0">
        <Link to="/" className="mr-4 hover:text-accent-500 transition duration-300">
          Home
        </Link>
        <Link to="/resume" className="mr-4 hover:text-accent-500 transition duration-300">
          Resume
        </Link>
        <Link to="/projects" className="mr-4 hover:text-accent-500 transition duration-300">
          Projects
        </Link>
        <Link to="/contact" className="hover:text-accent-500 transition duration-300">
          Contacts
        </Link>
      </div>
      <div className="text-sm">&copy; {new Date().getFullYear()} Your Website Name</div>
    </footer>
  );
};

export default Footer;