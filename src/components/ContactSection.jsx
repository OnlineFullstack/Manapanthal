import React from "react";
import { MapPin, Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";

// Background Animation Variants
const backgroundVariants = {
  animate: {
    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
    transition: { duration: 8, ease: "linear", repeat: Infinity },
  },
};

function ContactSection() {
  return (
    <motion.section
      id="contact-section"
      className="relative py-16 overflow-hidden"
      variants={backgroundVariants}
      animate="animate"
      style={{
        backgroundImage:
          "linear-gradient(135deg, rgba(255, 0, 0, 0.4) 0%, rgba(139, 0, 0, 0.4) 100%)",
        backgroundSize: "400% 400%",
      }}
    >
      {/* Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Find Your Perfect Match
          </h2>
          <p className="text-gray-600">Get in touch with our relationship experts</p>
        </div>

        {/* Contact Details & Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow">
              {/* Office Address */}
              <div className="flex items-start mb-6">
                <div className="bg-rose-100 p-3 rounded-lg">
                  <MapPin className="w-8 h-8 text-rose-600" />
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-semibold mb-2">Our Office</h3>
                  <p className="text-gray-600">
                    123 Matrimony Plaza <br />
                    Relationship Road <br />
                    Coimbatore, India - 641001
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start mb-6">
                <div className="bg-rose-100 p-3 rounded-lg">
                  <Mail className="w-8 h-8 text-rose-600" />
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                  <p className="text-gray-600">
                    support@manapanthal.com <br />
                    inquiries@manapanthal.com
                  </p>
                </div>
              </div>

              {/* Phone Number */}
              <div className="flex items-start">
                <div className="bg-rose-100 p-3 rounded-lg">
                  <Phone className="w-8 h-8 text-rose-600" />
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                  <p className="text-gray-600">
                    +91 98765 43210 <br />
                    Mon-Sun: 9AM - 7PM IST
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow"
          >
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500"
                    placeholder="+91 98765 43210"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500"
                  placeholder="How can we help you find your perfect match?"
                  required
                ></textarea>
              </div>

              {/* Animated Submit Button */}
              <motion.button
                type="submit"
                className="w-full py-3 px-6 bg-red-600 text-white rounded-lg hover:bg-red-600 transition-colors font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default ContactSection;
