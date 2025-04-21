import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Header({ isLoggedIn, user, handleLogout }) {
  const [cartCount, setCartCount] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

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
    <header className="sticky top-0 z-50 bg-gray-900 text-white px-4 py-2 flex flex-wrap justify-between items-center shadow-md border-b border-gray-700">
      {/* Left Nav */}
      <nav className="flex items-center space-x-4 text-sm sm:text-base font-medium">
        <Link to="/" className="hover:text-yellow-400 transition">Home</Link>
        <Link to="/products" className="hover:text-yellow-400 transition">Products</Link>
        <Link to="/grading" className="hover:text-yellow-400 transition">Grading</Link>
        <Link to="/about" className="hover:text-yellow-400 transition">About Us</Link>

        {/* Dropdown for More */}
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="hover:text-yellow-400 focus:outline-none"
          >
            More ▾
          </button>
          {dropdownOpen && (
            <div className="absolute left-0 mt-2 bg-gray-800 rounded shadow-md z-10 w-40 text-sm">
              <Link to="/blog" className="block px-4 py-2 hover:bg-gray-700" onClick={() => setDropdownOpen(false)}>Blog</Link>
              <Link to="/faqs" className="block px-4 py-2 hover:bg-gray-700" onClick={() => setDropdownOpen(false)}>FAQs</Link>
              <Link to="/contact" className="block px-4 py-2 hover:bg-gray-700" onClick={() => setDropdownOpen(false)}>Contact Us</Link>
            </div>
          )}
        </div>
      </nav>

      {/* Right Side - Cart & User */}
      <div className="flex items-center space-x-4 mt-2 sm:mt-0 text-sm sm:text-base">
        <Link to="/cart" className="hover:text-yellow-400">
          🛒 Cart ({cartCount})
        </Link>

        {isLoggedIn ? (
          <div className="relative">
            <button
              onClick={() => setUserDropdownOpen(!userDropdownOpen)}
              className="hover:text-yellow-400 focus:outline-none"
            >
              {user.username}
            </button>
            {userDropdownOpen && (
              <div className="absolute right-0 mt-2 bg-gray-800 rounded shadow-md z-10 w-40 text-sm">
                <Link to="/profile" className="block px-4 py-2 hover:bg-gray-700" onClick={() => setUserDropdownOpen(false)}>Profile</Link>
                <Link to="/orders" className="block px-4 py-2 hover:bg-gray-700" onClick={() => setUserDropdownOpen(false)}>My Orders</Link>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-700"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link to="/login" className="hover:text-yellow-400">
            Login
          </Link>
        )}
      </div>
    </header>
  );
}
