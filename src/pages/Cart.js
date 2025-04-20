import { useEffect, useState } from "react";

export default function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart.map(item => ({ ...item, quantity: item.quantity || 1 })));
  }, []);

  const updateLocalStorage = (newCart) => {
    localStorage.setItem("cart", JSON.stringify(newCart));
    setCart(newCart);
    window.dispatchEvent(new Event("cartUpdated")); // update header count too
  };

  const removeFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    updateLocalStorage(updatedCart);
  };

  const clearCart = () => {
    updateLocalStorage([]);
  };

  const updateQuantity = (index, amount) => {
    const updatedCart = [...cart];
    const newQty = updatedCart[index].quantity + amount;
    if (newQty >= 1) {
      updatedCart[index].quantity = newQty;
      updateLocalStorage(updatedCart);
    }
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => {
      const price = parseInt(item.price.replace(/[^\d]/g, ""));
      return total + (price * item.quantity);
    }, 0);
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6">🛒 Your Cart</h2>

      {cart.length === 0 ? (
        <div className="text-center">
          <p className="text-lg mb-4">Your cart is currently empty.</p>
          <a
            href="/products"
            className="inline-block bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700"
          >
            Browse Coins
          </a>
        </div>
      ) : (
        <>
          <div className="space-y-6">
            {cart.map((item, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row justify-between items-center border rounded-lg p-4 shadow"
              >
                <div className="flex items-center gap-4 w-full md:w-2/3">
                  <img src={item.img} alt={item.name} className="w-28 h-28 object-cover rounded-md border" />
                  <div>
                    <h3 className="text-xl font-semibold">{item.name}</h3>
                    <p className="text-green-700 text-lg">{item.price}</p>
                    <p className="text-sm text-gray-500">Grade: {item.grade}</p>
                    <p className="text-sm text-gray-500">Year: {item.year}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 mt-4 md:mt-0">
                  <button
                    onClick={() => updateQuantity(index, -1)}
                    className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                  >
                    −
                  </button>
                  <span className="text-lg">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(index, 1)}
                    className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                  >
                    +
                  </button>
                  <button
                    onClick={() => removeFromCart(index)}
                    className="ml-4 px-3 py-1 text-white bg-red-500 rounded hover:bg-red-600"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 border rounded-lg p-4 shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Cart Summary</h3>
            <p className="text-xl mb-2">
              Total Price:{" "}
              <span className="text-green-700 font-bold">₹{calculateTotal()}</span>
            </p>

            <div className="flex flex-col md:flex-row gap-4 mt-4">
              <button
                onClick={clearCart}
                className="w-full md:w-auto bg-gray-300 px-6 py-2 rounded hover:bg-gray-400"
              >
                Clear Cart
              </button>
              <button
                onClick={() => alert("Proceeding to payment (not implemented)")}
                className="w-full md:w-auto bg-yellow-500 text-white px-6 py-2 rounded hover:bg-yellow-600"
              >
                Proceed to Buy
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
