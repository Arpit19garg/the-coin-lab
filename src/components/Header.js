import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Header({ isLoggedIn, user, handleLogout }) {
  const [cartCount, setCartCount] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const updateCartCount = () => {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
      setCartCount(totalItems);
    };

    updateCartCount();
    window.addEventListener("cartUpdated", updateCartCount);

    return () => {
      window.removeEventListener("cartUpdated", updateCartCount);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-gray-900 text-white p-4 flex flex-col md:flex-row justify-between items-center shadow-md">
      {/* Left Side Nav Links */}
      <nav className="flex-1 flex justify-center space-x-4 text-lg">
        <Link to="/" className="hover:text-yellow-400">Home</Link>
        <Link to="/products" className="hover:text-yellow-400">Products</Link>
        <Link to="/grading" className="hover:text-yellow-400">Grading</Link>
        <Link to="/about" className="hover:text-yellow-400">About Us</Link>

        {/* Dropdown for More Options */}
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="hover:text-yellow-400 focus:outline-none"
          >
            More ▾
          </button>
          {dropdownOpen && (
            <div className="absolute top-full left-0 mt-2 bg-gray-800 rounded shadow-lg z-10 min-w-[150px]">
              <Link
                to="/blog"
                className="block px-4 py-2 hover:bg-gray-700 text-white"
                onClick={() => setDropdownOpen(false)}
              >
                Blog
              </Link>
              <Link
                to="/faqs"
                className="block px-4 py-2 hover:bg-gray-700 text-white"
                onClick={() => setDropdownOpen(false)}
              >
                FAQs
              </Link>
              <Link
                to="/contact"
                className="block px-4 py-2 hover:bg-gray-700 text-white"
                onClick={() => setDropdownOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          )}
        </div>
      </nav>

      {/* Right Side Cart and Login/Logout */}
      <div className="mt-2 md:mt-0 flex items-center space-x-4">
        <Link to="/cart" className="hover:text-yellow-400 text-lg">
          🛒 Cart ({cartCount})
        </Link>

        {/* Login or Logout */}
        {isLoggedIn ? (
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="text-lg text-white hover:text-yellow-400 focus:outline-none"
            >
              {user.username}
            </button>
            <div className="relative">
              {dropdownOpen && (
                <div className="absolute top-full right-0 mt-2 bg-gray-800 rounded shadow-lg z-10 min-w-[150px]">
                  <Link
                    to="/profile"
                    className="block px-4 py-2 hover:bg-gray-700 text-white"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Profile
                  </Link>
                  <Link
                    to="/orders"
                    className="block px-4 py-2 hover:bg-gray-700 text-white"
                    onClick={() => setDropdownOpen(false)}
                  >
                    My Orders
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="block w-full px-4 py-2 text-left hover:bg-gray-700 text-white"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        ) : (
          <Link to="/login" className="hover:text-yellow-400 text-lg">
            Login
          </Link>
        )}
      </div>
    </header>
  );
}
