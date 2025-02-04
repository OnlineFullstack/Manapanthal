import React, { useState } from 'react';
import Logo from '../assets/manapanthal-logo.png';
import { Menu, X } from 'lucide-react';
import { SignInForm } from './SignInForm';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ onSignIn, onSignUp }) => {
  const [showSignIn, setShowSignIn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <nav className="absolute z-10 top-0 left-0 w-full md:py-3 px-4 md:px-8 bg-transparent">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="/" className="">
                <img src={Logo} alt="logo" className="w-56" />
              </a>
            </div>

            {/* Desktop Navigation - Hidden on Small Screens */}
            <div className="hidden md:flex space-x-4">
              <a href="#" className="text-gray-100 hover:text-red-800 px-3 py-2 rounded-md text-sm font-medium">
                About
              </a>
              <a href="#" className="text-gray-100 hover:text-red-800 px-3 py-2 rounded-md text-sm font-medium">
                Services
              </a>
              <a href="#" className="text-gray-100 hover:text-red-800 px-3 py-2 rounded-md text-sm font-medium">
                Contact
              </a>
              <button
                onClick={() => setShowSignIn(true)}
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors text-lg font-semibold"
              >
                Login
              </button>
            </div>

            {/* Mobile Menu Button - Only for Screens < 768px */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-red-700 hover:text-red-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
              aria-label="Open menu"
            >
              {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>

          {/* Mobile Menu (Dropdown) */}
          <div className={`md:hidden bg-white shadow-lg rounded-lg transition-all duration-300 ${isMenuOpen ? "block" : "hidden"}`}>
            <a href="#" className="block py-2 px-4 text-gray-700 hover:bg-red-100">About</a>
            <a href="#" className="block py-2 px-4 text-gray-700 hover:bg-red-100">Services</a>
            <a href="#" className="block py-2 px-4 text-gray-700 hover:bg-red-100">Contact</a>
            <button
              onClick={() => {
                setShowSignIn(true);
                setIsMenuOpen(false);
              }}
              className="block w-full text-left py-2 px-4 text-red-600 hover:bg-red-100"
            >
              Login
            </button>
          </div>
        </div>
      </nav>

      {/* SignIn Modal */}
      {showSignIn && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setShowSignIn(false)}
        >
          <div onClick={(e) => e.stopPropagation()}>
            <SignInForm onSuccess={() => navigate('/home')} />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
