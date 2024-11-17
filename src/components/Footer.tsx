import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">SAQ Establishment</h3>
            <p className="text-gray-400">
              General Contracting & Trading<br />
              Al-Khobar, Eastern Province<br />
              Kingdom of Saudi Arabia
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <span>+966 508781698</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <span>info@mizat.com.sa</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                <span>Al-Khobar, Saudi Arabia</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Our Values</h3>
            <ul className="text-gray-400 space-y-2">
              <li>Maximum Up-Time and Productivity</li>
              <li>Focus on Client Needs & Standards</li>
              <li>Safe & Healthy Working Environment</li>
              <li>Quality Products and Services</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} SAQ Establishment. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;