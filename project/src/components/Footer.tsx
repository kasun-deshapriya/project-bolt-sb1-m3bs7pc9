import React from 'react';
import { PhoneIcon, MailIcon, MapPinIcon } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Ceylon Explorer</h3>
            <p className="text-gray-300">Your trusted partner for exploring the beauty of Sri Lanka.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2">
              <p className="flex items-center"><PhoneIcon className="h-5 w-5 mr-2" /> +94 11 234 5678</p>
              <p className="flex items-center"><MailIcon className="h-5 w-5 mr-2" /> info@ceylonexplorer.com</p>
              <p className="flex items-center"><MapPinIcon className="h-5 w-5 mr-2" /> Colombo, Sri Lanka</p>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/services" className="hover:text-emerald-400">Our Services</a></li>
              <li><a href="/about" className="hover:text-emerald-400">About Us</a></li>
              <li><a href="/contact" className="hover:text-emerald-400">Contact Us</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-300">&copy; {new Date().getFullYear()} Ceylon Explorer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;