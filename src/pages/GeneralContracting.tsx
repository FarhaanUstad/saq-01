import React from 'react';
import { Building2, CheckCircle, Home } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const GeneralContracting = () => {
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
          <Building2 className="h-16 w-16 text-blue-500 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">General Contracting</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive construction solutions tailored to meet your specific project requirements
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="relative h-64 rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80"
              alt="Commercial Construction"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative h-64 rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80"
              alt="Industrial Construction"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            'Commercial Construction',
            'Industrial Facilities',
            'Infrastructure Development',
            'Residential Projects',
            'Renovation Services',
            'Project Management'
          ].map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <CheckCircle className="h-8 w-8 text-green-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service}</h3>
              <p className="text-gray-600">
                Professional expertise in delivering high-quality construction solutions.
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">Our Contracting Process</h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <span className="flex-shrink-0 bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4">1</span>
              <div>
                <h3 className="text-lg font-semibold">Initial Consultation</h3>
                <p className="text-gray-600">Understanding your project requirements and objectives</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="flex-shrink-0 bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4">2</span>
              <div>
                <h3 className="text-lg font-semibold">Project Planning</h3>
                <p className="text-gray-600">Detailed planning and resource allocation</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="flex-shrink-0 bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4">3</span>
              <div>
                <h3 className="text-lg font-semibold">Execution</h3>
                <p className="text-gray-600">Professional implementation with quality control</p>
              </div>
            </div>
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

export default GeneralContracting;