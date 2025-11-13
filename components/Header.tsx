
import React, { useState } from 'react';

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <li>
    <a href={href} className="text-white hover:text-gray-200 transition-colors duration-300 py-2">
      {children}
    </a>
  </li>
);

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = ["Design", "Product", "Plans", "Business", "Education", "Help"];

  return (
    <header className="absolute top-0 left-0 right-0 z-20 p-4 sm:p-6 lg:px-8">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="font-pacifico text-3xl font-bold">Canva</h1>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block">
          <ul className="flex items-center space-x-8 text-sm font-medium">
            {navLinks.map((link) => (
              <NavLink key={link} href="#">{link}</NavLink>
            ))}
          </ul>
        </nav>

        {/* Desktop Action Buttons */}
        <div className="hidden lg:flex items-center space-x-4">
          <button className="bg-[#8d48f7] hover:bg-[#7b2ff7] text-white font-semibold py-2 px-5 rounded-md transition-colors duration-300">
            Sign up
          </button>
          <button className="bg-white text-gray-800 font-semibold py-2 px-5 rounded-md hover:bg-gray-200 transition-colors duration-300">
            Log in
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden mt-4 bg-black bg-opacity-20 backdrop-blur-md rounded-lg p-4">
          <nav>
            <ul className="flex flex-col items-center space-y-4 text-sm font-medium">
              {navLinks.map((link) => (
                <NavLink key={link} href="#">{link}</NavLink>
              ))}
            </ul>
          </nav>
          <div className="flex flex-col items-center space-y-4 mt-6">
            <button className="bg-[#8d48f7] hover:bg-[#7b2ff7] text-white font-semibold py-2 w-full max-w-xs rounded-md transition-colors duration-300">
              Sign up
            </button>
            <button className="bg-white text-gray-800 font-semibold py-2 w-full max-w-xs rounded-md hover:bg-gray-200 transition-colors duration-300">
              Log in
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
