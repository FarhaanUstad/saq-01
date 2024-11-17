import React from 'react';
import { Shield, CheckCircle, Home } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const LMIEquipment = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate('/#hero');
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Shield className="h-16 w-16 text-blue-500 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">LMI Equipment and Safety</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            State-of-the-art safety equipment and solutions for construction and industrial applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="relative h-64 rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1531984557360-89184e00f590?auto=format&fit=crop&q=80"
              alt="Safety Equipment"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative h-64 rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80"
              alt="Load Monitoring"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            'Safety Equipment',
            'Load Monitoring',
            'Inspection Services',
            'Calibration Services',
            'Training Programs',
            'Maintenance Support'
          ].map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <CheckCircle className="h-8 w-8 text-green-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service}</h3>
              <p className="text-gray-600">
                Professional safety solutions and equipment maintenance services.
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Equipment Solutions</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3" />
                <div>
                  <h3 className="font-semibold">Load Monitoring Instruments</h3>
                  <p className="text-gray-600">Advanced equipment for precise load measurement and monitoring</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3" />
                <div>
                  <h3 className="font-semibold">Safety Devices</h3>
                  <p className="text-gray-600">Comprehensive range of safety equipment and protective gear</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3" />
                <div>
                  <h3 className="font-semibold">Calibration Tools</h3>
                  <p className="text-gray-600">Professional calibration equipment and services</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Safety Services</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3" />
                <div>
                  <h3 className="font-semibold">Safety Inspections</h3>
                  <p className="text-gray-600">Regular equipment inspections and safety audits</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3" />
                <div>
                  <h3 className="font-semibold">Training Programs</h3>
                  <p className="text-gray-600">Comprehensive safety training and certification courses</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3" />
                <div>
                  <h3 className="font-semibold">Maintenance Support</h3>
                  <p className="text-gray-600">Ongoing maintenance and technical support services</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={handleBackToHome}
            className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            <Home className="mr-2 h-5 w-5" />
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default LMIEquipment;