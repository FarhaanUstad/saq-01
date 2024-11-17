import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="/logo.png" 
                alt="SAQ Logo" 
                className="h-8 w-auto" 
              />
              <span className="ml-2 text-xl font-bold text-gray-800">SAQ</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-500">Home</Link>
            <Link to="/general-contracting" className="text-gray-700 hover:text-blue-500">General Contracting</Link>
            <Link to="/electromechanical-services" className="text-gray-700 hover:text-blue-500">Electromechanical Services</Link>
            <Link to="/lmi-equipment" className="text-gray-700 hover:text-blue-500">LMI Equipment</Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-500">Contact</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-500"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                to="/"
                className="block px-3 py-2 rounded-md text-gray-700 hover:text-blue-500 hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/general-contracting"
                className="block px-3 py-2 rounded-md text-gray-700 hover:text-blue-500 hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                General Contracting
              </Link>
              <Link
                to="/electromechanical-services"
                className="block px-3 py-2 rounded-md text-gray-700 hover:text-blue-500 hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                Electromechanical Services
              </Link>
              <Link
                to="/lmi-equipment"
                className="block px-3 py-2 rounded-md text-gray-700 hover:text-blue-500 hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                LMI Equipment
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 rounded-md text-gray-700 hover:text-blue-500 hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;