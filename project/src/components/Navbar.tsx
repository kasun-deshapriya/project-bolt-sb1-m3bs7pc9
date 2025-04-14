import React from 'react';
import { Link } from 'react-router-dom';
import { PalmtreeIcon } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <PalmtreeIcon className="h-8 w-8 text-emerald-600" />
              <span className="ml-2 text-xl font-bold text-gray-800">Ceylon Explorer</span>
            </Link>
          </div>
          <div className="flex items-center">
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-600 hover:text-emerald-600">Home</Link>
              <Link to="/about" className="text-gray-600 hover:text-emerald-600">About</Link>
              <Link to="/services" className="text-gray-600 hover:text-emerald-600">Services</Link>
              <Link to="/contact" className="text-gray-600 hover:text-emerald-600">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;