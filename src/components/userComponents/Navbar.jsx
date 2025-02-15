import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/manapanthal-logo.png"
import { Heart } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (

    <nav className="absolute z-10 top-0 left-0 rounded-full w-full md:py-3 px-4 md:px-8">
    <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">
        {/* Logo */}
        <div className="flex-shrink-0">
          <a href="/home" className="">
            <img src={logo} alt="logo" className='w-56'/>
          </a>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-4">
        <Link to="about">
          <span
            className="text-red-700 hover:text-red-500 px-3 py-2 rounded-md font-medium text-sm  md:text-xl"
          >
            About
          </span> 
          </Link>
          <Link to="/service">
          <span
            className="text-red-700 hover:text-red-500 px-3 py-2 rounded-md font-medium text-sm  md:text-xl"
          >
            Services
          </span> 
          </Link>

        
        <Link to="/contact"> 
          <span
            className="text-red-700 hover:text-red-500 px-3 py-2 rounded-md font-medium text-sm  md:text-xl"
          >
            Contact
          </span> 
          </Link>
          
         <Link to="/notification">
          <span className="text-red-700 hover:text-red-500 px-3 my-6 text-2xl">
            <FontAwesomeIcon icon={faHeart} />
          </span>
          </Link>

          <button
            onClick={() => setShowSignIn(true)}
            className="px-3 py-2 bg-red-700 text-white rounded-md  transition-colors  font-semibold button-hover"
          >
            Logout
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-red-700 hover:text-red-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-700"
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
