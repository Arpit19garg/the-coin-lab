import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function ThankYou() {
  useEffect(() => {
    // Clear cart when reaching this page
    localStorage.removeItem("cart");
    window.dispatchEvent(new Event("cartUpdated"));
  }, []);

  return (
    <div className="p-6 text-center">
      <h1 className="text-4xl font-bold text-green-700 mb-4">🎉 Thank You!</h1>
      <p className="text-xl mb-6">Your order has been placed successfully.</p>

      <Link
        to="/products"
        className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
      >
        Continue Shopping
      </Link>
    </div>
  );
}
