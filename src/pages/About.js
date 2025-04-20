import React from 'react';

export default function About() {
  return (
    <div className="bg-gray-50 py-12 px-6 sm:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 border-b-4 border-yellow-500 inline-block pb-2">
          About Us
        </h1>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          Welcome to <span className="font-semibold text-yellow-600">The Coin Lab</span>! We specialize in providing a standardized grading system for collectible coins in India. 
          Our mission is to make coin grading accessible, accurate, and trustworthy. Explore our range of products and services as we continue to innovate 
          in the world of numismatics.
        </p>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Story</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Founded by passionate numismatists, <span className="font-medium text-yellow-600">The Coin Lab</span> was created to bridge the gap in the Indian market for a 
            consistent and reliable coin grading system. Our dedicated team combines decades of experience in numismatics with modern technology to ensure each coin we grade 
            is handled with utmost accuracy and care.
          </p>
        </div>
      </div>
    </div>
  );
}
