import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
// import { Button } from '@/components/ui/button';

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Help Center', href: '/help' },
    { name: 'Contact', href: '/contact' }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#facebook' },
    { icon: Instagram, href: '#instagram' },
    { icon: Twitter, href: '#twitter' },
    { icon: Linkedin, href: '#linkedin' }
  ];

  return (
    <footer className="bg-slate-950 py-12 text-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        <div>
          <h3 className="text-2xl font-bold text-primary mb-4">Manapanthal</h3>
          <p className="">
            Connecting hearts, creating lasting relationships. 
            Find your perfect match with trust and care.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <div className="grid grid-cols-2 gap-2">
            {quickLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className=" hover:text-primary"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Connect With Us</h4>
          <div className="flex space-x-4 mb-4">
            {socialLinks.map(({ icon: Icon, href }) => (
              <a 
                key={href} 
                href={href} 
                className=" hover:text-primary"
              >
                <Icon size={24} />
              </a>
            ))}
          </div>
          <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-700 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-900 dark:focus:ring-gray-700 dark:border-gray-700">Subscribe to Newsletter</button>
          
        </div>
      </div>
      
      <div className="border-t border-gray-200 mt-8 py-4 text-center">
        <p className="">
          © {new Date().getFullYear()} Manapanthal. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;