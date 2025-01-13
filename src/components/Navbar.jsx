import React from 'react';
import Logo from '../assets/manapanthal-logo.png';
import { Heart, Users, Search, Shield, ArrowRight } from 'lucide-react';

const Navbar = ({ onSignIn, onSignUp }) => {
  return (
    <nav className="fixed top-0 left-0 w-full md:py-3 bg-white/30 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="">
             <img src={Logo} alt="logo" className='w-56'/>
            </a>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-4">
          
            <button
            onClick={onSignUp}
            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors text-lg font-semibold"
          >
            Login
          </button>

            {/* <a
              href="#"
              className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              About
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              Services
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              Contact
            </a> */}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              className="text-red-700 hover:text-red-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
              aria-label="Open menu"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
