'use client'

import React, { useEffect, useState } from 'react'

function Navbarr() {
  const [navbarBg, setNavbarBg] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbarBg(true);
    } else {
      setNavbarBg(false);
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    window.addEventListener('scroll', changeBackground);
    return () => {
      window.removeEventListener('scroll', changeBackground);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full z-10 transition duration-300 ease-in-out ${
        navbarBg ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="/" className={`text-2xl font-bold ${navbarBg ? 'text-black' : 'text-white'} `}>
            D&apos;Woody Shop
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <a href="/" className={`${navbarBg ? 'text-black' : 'text-gray-300'} hover:text-gray-600`}>
              Home
            </a>
            <a href="/about" className={`${navbarBg ? 'text-black' : 'text-gray-200'} hover:text-gray-600`}>
              About Us
            </a>
            <a href="/products" className={`${navbarBg ? 'text-black' : 'text-gray-200'} hover:text-gray-600`}>
              Products
            </a>
            <a href="/contact" className={`${navbarBg ? 'text-black' : 'text-gray-200'} hover:text-gray-600`}>
              Contact
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className={`text-3xl ${navbarBg ? 'text-black' : 'text-white'} focus:outline-none`}>
              &#9776;
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className={`md:hidden bg-white ${navbarBg ? 'text-black' : 'text-gray-800'} px-2 pt-2 pb-3 space-y-1`}>
          <a href="/" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100">
            Home
          </a>
          <a href="/about" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100">
            About Us
          </a>
          <a href="/products" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100">
            Products
          </a>
          <a href="/contact" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbarr;
