import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [scrollIndex, setScrollIndex] = useState(0);

  const testimonials = [
    {
      text: "The Coin Lab's grading system is top-notch! I can finally buy and sell coins with confidence, knowing they're accurately evaluated.",
      name: "Aarav K.",
      role: "Coin Collector",
      color: "bg-gradient-to-r from-yellow-200 to-yellow-400",
    },
    {
      text: "As an investor, I value trust and transparency. The Coin Lab’s platform has made it so much easier to make informed decisions.",
      name: "Neha S.",
      role: "Investor",
      color: "bg-gradient-to-r from-green-200 to-green-400",
    },
    {
      text: "I love the community aspect of The Coin Lab. It's great to connect with other collectors and share our passion for numismatics.",
      name: "Raj P.",
      role: "Coin Enthusiast",
      color: "bg-gradient-to-r from-blue-200 to-blue-400",
    },
    {
      text: "The detailed insights provided on each coin help me understand its true value. Truly a great resource for any serious collector.",
      name: "Maya R.",
      role: "Collector",
      color: "bg-gradient-to-r from-red-200 to-red-400",
    },
    {
      text: "The buying and selling process was seamless and secure. I feel confident investing in rare coins through this platform.",
      name: "Ravi T.",
      role: "Investor",
      color: "bg-gradient-to-r from-purple-200 to-purple-400",
    },
    {
      text: "Fantastic experience! The Coin Lab has elevated the standard for coin grading. Highly recommend it to anyone in the numismatic field.",
      name: "Priya D.",
      role: "Numismatist",
      color: "bg-gradient-to-r from-orange-200 to-orange-400",
    },
    {
      text: "I've been looking for a platform that combines great user experience with a trustworthy grading system. Coin Lab truly delivers.",
      name: "Shivani B.",
      role: "Coin Collector",
      color: "bg-gradient-to-r from-teal-200 to-teal-400",
    },
    {
      text: "I appreciate the detailed breakdown of each coin's history and condition. It gives me confidence in every transaction.",
      name: "Manoj K.",
      role: "Collector",
      color: "bg-gradient-to-r from-pink-200 to-pink-400",
    },
  ];

  useEffect(() => {
    const autoScroll = setInterval(() => {
      setScrollIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(autoScroll);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setScrollIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setScrollIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div
        className="relative h-[80vh] bg-cover bg-center flex items-center justify-center text-white font-serif"
        style={{
          backgroundImage:
            "url('https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Coin_collection.jpg/960px-Coin_collection.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 text-center px-4 max-w-2xl">
          <p className="text-xl md:text-2xl mb-2 tracking-wide uppercase">Welcome to</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-wider">The Coin Lab</h1>
          <p className="text-lg md:text-xl mb-6">
            India’s first standardized coin grading platform and marketplace for collectors and investors.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link to="/products">
              <button className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-xl hover:bg-yellow-300 transition">
                Shop Now
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="bg-white py-16 px-6 md:px-20 text-center font-sans">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6">What Makes Us Unique</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          At The Coin Lab, we’ve created India’s first AI-powered coin grading system to bring transparency and trust to numismatics.
          Whether you're an investor, a history enthusiast, or a passionate collector, our platform offers accurate grading, certified listings,
          and a vibrant community of coin lovers.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-6">
          <Link to="/about" className="text-blue-600 hover:underline">About Us</Link>
          <Link to="/grading" className="text-blue-600 hover:underline">Grading Explained</Link>
          <Link to="/blog" className="text-blue-600 hover:underline">Expert Blog</Link>
          <Link to="/contact" className="text-blue-600 hover:underline">Contact</Link>
          <Link to="/faq" className="text-blue-600 hover:underline">FAQs</Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-100 py-16 px-6 md:px-20 font-sans">
        <h2 className="text-3xl font-semibold text-center mb-10 text-gray-800">Our Key Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition">
            <img
              src="https://assets.dryicons.com/uploads/icon/svg/6399/ef33d57d-4f9e-4110-8823-278f89df747c.svg"
              alt="Grading Icon"
              className="w-16 h-16 mx-auto mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Standardized Grading</h3>
            <p className="text-gray-600">Our proprietary grading system ensures every coin is evaluated with precision and consistency.</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1170/1170576.png"
              alt="Marketplace Icon"
              className="w-16 h-16 mx-auto mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Trusted Marketplace</h3>
            <p className="text-gray-600">Buy and sell rare coins with confidence through verified listings and secure checkout.</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1388/1388849.png"
              alt="Community Icon"
              className="w-16 h-16 mx-auto mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Collector Community</h3>
            <p className="text-gray-600">Connect with fellow enthusiasts, share collections, and learn through our expert blog.</p>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-white py-16 px-6 md:px-20 text-center font-sans">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">What Our Customers Say</h2>
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-1000 ease-in-out"
            style={{ transform: `translateX(-${scrollIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`${testimonial.color} p-6 rounded-3xl shadow-md w-full mx-auto mb-8 md:w-1/3 flex-none transition transform`}
              >
                <p className="text-lg text-white mb-4">{testimonial.text}</p>
                <p className="font-semibold text-white">{testimonial.name}</p>
                <p className="text-gray-200">{testimonial.role}</p>
              </div>
            ))}
          </div>

          <div
            className="absolute top-1/2 left-0 transform -translate-y-1/2 text-2xl text-white cursor-pointer"
            onClick={prevTestimonial}
          >
            &#10094;
          </div>
          <div
            className="absolute top-1/2 right-0 transform -translate-y-1/2 text-2xl text-white cursor-pointer"
            onClick={nextTestimonial}
          >
            &#10095;
          </div>
        </div>
      </div>
    </div>
  );
}
