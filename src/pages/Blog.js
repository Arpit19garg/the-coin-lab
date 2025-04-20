import React from 'react';
import { Link } from 'react-router-dom'; // Import Link if you want navigation

export default function Blog() {
  return (
    <div className="p-8 bg-gray-50">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Blog</h1>
      <p className="text-lg mb-8 text-gray-600">
        Stay tuned for insightful articles and updates about the world of collectible coins. From grading tips to the latest trends in numismatics, our blog offers a wealth of information for enthusiasts.
      </p>
      
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition ease-in-out duration-300">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            <Link to="/blog/art-of-coin-grading" className="hover:text-blue-600">The Art of Coin Grading</Link>
          </h2>
          <p className="text-lg text-gray-700">
            Learn the essentials of coin grading and how to accurately assess a coin's value.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition ease-in-out duration-300">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            <Link to="/blog/rare-coin-guide" className="hover:text-blue-600">Rare Coins: A Collector's Guide</Link>
          </h2>
          <p className="text-lg text-gray-700">
            Discover rare coins that are highly sought after in the world of numismatics.
          </p>
        </div>

        {/* Add more blog posts here */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition ease-in-out duration-300">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            <Link to="/blog/coin-collecting-tips" className="hover:text-blue-600">Coin Collecting Tips for Beginners</Link>
          </h2>
          <p className="text-lg text-gray-700">
            A guide for beginners on starting their coin collection journey and the key tips to remember.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition ease-in-out duration-300">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            <Link to="/blog/coin-market-trends" className="hover:text-blue-600">Coin Market Trends in 2025</Link>
          </h2>
          <p className="text-lg text-gray-700">
            Stay ahead of the curve with the latest trends in the collectible coin market.
          </p>
        </div>
      </div>
    </div>
  );
}
