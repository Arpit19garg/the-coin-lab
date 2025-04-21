import React, { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import ThankYou from "./pages/ThankYou";
import ProductDetail from "./pages/ProductDetail";
import About from "./pages/About";
import Grading from "./pages/Grading";
import Blog from "./pages/Blog";
import FAQs from "./pages/FAQs";
import Login from "./pages/Login"; // Import the login page
import { Helmet } from 'react-helmet';

function App() {
  // State to track if the user is logged in
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true" // Check if the user is logged in from localStorage
  );
  // Store user info if logged in
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null // Check if user info exists in localStorage
  );

  // Handle login and set user info
  const handleLogin = (userData) => {
    setIsLoggedIn(true);
    setUser(userData);
    localStorage.setItem("isLoggedIn", "true"); // Store login status in localStorage
    localStorage.setItem("user", JSON.stringify(userData)); // Store user data in localStorage
  };

  // Handle logout
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
    localStorage.removeItem("isLoggedIn"); // Remove login status from localStorage
    localStorage.removeItem("user"); // Remove user data from localStorage
  };

  // Automatically check if the user is logged in when the component mounts
  useEffect(() => {
    const storedLoginStatus = localStorage.getItem("isLoggedIn");
    const storedUser = localStorage.getItem("user");

    if (storedLoginStatus === "true" && storedUser) {
      setIsLoggedIn(true);
      setUser(JSON.parse(storedUser)); // Set user info from localStorage if present
    }
  }, []);

  return (
    <Router>
      <Helmet>
        <title>The Coin Lab - Coin Grading & Collectibles</title>
        <meta name="description" content="India's first standardized coin grading system and collectible coin marketplace." />
        <meta name="keywords" content="coin grading, collectible coins, India coins, numismatics, rare Indian coins" />
      </Helmet>
      <Header isLoggedIn={isLoggedIn} user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/grading" element={<Grading />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route
          path="/login"
          element={<Login handleLogin={handleLogin} />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
