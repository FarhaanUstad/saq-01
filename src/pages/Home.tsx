import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Gallery from '../components/Gallery';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section id="hero" className="relative py-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <img
  src="/assets/photo-collage.png" // Replace with your image file path
  alt="Construction site"
  className="w-full h-full object-cover"
/>
        </div>
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Saqer Abdallah Ali Qarni for Construction Management
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-200">
              One of the fastest growing establishments in Al-Khobar, Eastern Province Kingdom of Saudi Arabia
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Mission</h2>
          <div className="prose lg:prose-lg mx-auto">
            <p className="text-gray-600 text-center">
              Our ultimate construction project is our very own. With everyday of operations, SAQ is laying the stone to introduce an ultra-modern definition of management contracting industry; one that's entirely designed for clients, results oriented and provides personalized solutions for a lap of luxury for every client, regardless of the size of project at hand.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              'Maximum Up-Time and Productivity',
              'Focus on Client Needs & Standards',
              'Safe & Healthy Working Environment',
              'Quality Products and Services'
            ].map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-800 font-semibold text-center">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Section */}
      <Gallery />

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose SAQ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Expertise & Experience</h3>
              <p className="text-gray-600">
                With years of experience in the industry, SAQ has a proven track record of delivering high-quality electromechanical and electrical services.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Quality Assurance</h3>
              <p className="text-gray-600">
                We are committed to maintaining the highest standards of quality in every project we undertake.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
