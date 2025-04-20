import React from 'react';

export default function Grading() {
  return (
    <div className="bg-gray-50 py-12 px-6 sm:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 border-b-4 border-yellow-500 inline-block pb-2">
          Grading System
        </h1>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          At <span className="text-yellow-600 font-semibold">The Coin Lab</span>, we use a proprietary grading system to evaluate the condition and authenticity of coins. Our system ensures consistency, transparency, and accuracy, helping collectors trust the value of their coins.
        </p>

        <div className="bg-white p-6 rounded-lg shadow-md mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Grading Scale</h2>
          <p className="text-lg text-gray-700 mb-4">
            Our grading scale ranges from 1 to 70, with 70 representing a perfect mint condition coin. Here's a quick overview of key grades:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li><strong>MS-70</strong>: Perfect condition, no visible flaws.</li>
            <li><strong>MS-60</strong>: Mint state with minimal wear.</li>
            <li><strong>AU-50</strong>: Almost uncirculated, with light wear.</li>
            <li><strong>VG-8</strong>: Very good condition, visible wear but clear details.</li>
            <li><strong>G-4</strong>: Good condition with major wear but identifiable.</li>
            <li><strong>P-1</strong>: Poor condition, barely recognizable.</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Get Your Coin Graded</h2>
          <p className="text-lg text-gray-700 mb-4">
            Submit your coin for grading by filling out the form below. We’ll get in touch with you shortly.
          </p>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="name">Full Name</label>
              <input type="text" id="name" className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500" placeholder="Enter your name" />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="email">Email Address</label>
              <input type="email" id="email" className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500" placeholder="you@example.com" />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="coinType">Coin Type</label>
              <input type="text" id="coinType" className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500" placeholder="E.g., 1947 Indian Rupee" />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="message">Additional Information</label>
              <textarea id="message" rows="4" className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500" placeholder="Describe the coin, condition, etc."></textarea>
            </div>
            <button type="submit" className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded shadow-md transition duration-200">
              Submit for Grading
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
