// Footer.js
import React from 'react';
import { Link } from 'gatsby';

const Footer = () => {
  return (
    <footer className="bg-background-800 text-text-50 py-4 px-6 flex justify-between items-center">
      <div>
        <Link to="/" className="mr-4 hover:text-primary-200">
          Home
        </Link>
        <Link to="/resume" className="mr-4 hover:text-primary-200">
          Resume
        </Link>
        <Link to="/projects" className="mr-4 hover:text-primary-200">
          Projects
        </Link>
        <Link to="/contacts" className="hover:text-primary-200">
          Contacts
        </Link>
      </div>
      <div className="text-sm">&copy; {new Date().getFullYear()} Your Website Name</div>
    </footer>
  );
};

export default Footer;