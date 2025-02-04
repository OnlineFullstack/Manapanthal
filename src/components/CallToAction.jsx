import React, { useState } from "react";
import { motion } from "framer-motion";
import ContactSection from "../components/ContactSection";

const CallToAction = () => {
  const [showContact, setShowContact] = useState(false);

  const handleClick = () => {
    setShowContact(true); // Show the contact section
    setTimeout(() => {
      document.getElementById("contact-section")?.scrollIntoView({ behavior: "smooth" });
    }, 200); // Smooth scroll after rendering
  };

  return (
    <>
      {/* Call to Action Section */}
      <div className="py-20 text-center relative bg-gradient-to-br from-red-400 to-red-600 shadow-2xl rounded-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Subtle floating text effect */}
          <motion.h2 
            className="text-4xl font-extrabold text-white mb-8 drop-shadow-lg"
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            Ready to Find Your Perfect Event?
          </motion.h2>

          {/* 3D Button with Hover Effect */}
          <motion.button
            className="px-10 py-4 text-lg font-semibold text-white bg-gradient-to-r from-red-500 to-red-700 shadow-xl rounded-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl active:scale-95"
            whileHover={{ y: -6 }}
            whileTap={{ scale: 0.95 }} 
            onClick={handleClick}
          >
            Contact Us
          </motion.button>
        </div>
      </div>

      {/* Contact Section - Conditionally Rendered */}
      {showContact && <ContactSection />}
    </>
  );
};

export default CallToAction;
