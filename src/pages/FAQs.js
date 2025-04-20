import React from 'react';

export default function FAQs() {
  return (
    <div className="p-8 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Frequently Asked Questions</h1>
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition ease-in-out duration-300">
          <h2 className="text-2xl font-semibold text-gray-800">What is coin grading?</h2>
          <p className="text-lg text-gray-600">
            Coin grading is the process of determining the quality and authenticity of a coin, typically based on its condition, appearance, and features.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition ease-in-out duration-300">
          <h2 className="text-2xl font-semibold text-gray-800">How does The Coin Lab grade coins?</h2>
          <p className="text-lg text-gray-600">
            We use a proprietary grading system that evaluates the coin based on its visual appearance, surface quality, and preservation. Our system ranges from MS-70 (perfect) to VG-8 (very good).
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition ease-in-out duration-300">
          <h2 className="text-2xl font-semibold text-gray-800">How can I buy coins?</h2>
          <p className="text-lg text-gray-600">
            You can browse our collection of graded coins in the Products section. Once you find a coin you'd like to purchase, simply add it to your cart and proceed with checkout.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition ease-in-out duration-300">
          <h2 className="text-2xl font-semibold text-gray-800">How do I contact customer support?</h2>
          <p className="text-lg text-gray-600">
            You can reach us through the Contact page, where you’ll find our contact form and customer support email.
          </p>
        </div>
      </div>
    </div>
  );
}
