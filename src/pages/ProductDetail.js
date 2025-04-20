import React from "react";
import { useParams } from "react-router-dom";

// Sample product data - You should ideally import this data from a JSON file or API
const allProducts = [
  {
    id: 1,
    name: "1862 One Rupee Victoria Silver Coin",
    price: "₹4,999",
    grade: "XF",
    year: 1862,
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/India_1_Rupee_1862.jpg/800px-India_1_Rupee_1862.jpg",
  },
  {
    id: 2,
    name: "Mughal Empire Akbar Gold Coin",
    price: "₹15,000",
    grade: "VF",
    year: 1570,
    img: "https://upload.wikimedia.org/wikipedia/commons/3/30/AkbarGoldCoin.jpg",
  },
  {
    id: 3,
    name: "1998 Republic India 5 Rupees Coin",
    price: "₹350",
    grade: "UNC",
    year: 1998,
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/5_Rupees_India_1998.jpg/800px-5_Rupees_India_1998.jpg",
  },
  {
    id: 4,
    name: "British India 1943 One Rupee Coin",
    price: "₹1,200",
    grade: "VF",
    year: 1943,
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/One_rupee_british_india_1943.jpg/800px-One_rupee_british_india_1943.jpg",
  },
  {
    id: 5,
    name: "Chola Dynasty Silver Coin",
    price: "₹8,000",
    grade: "XF",
    year: 1100,
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Chola_coin.jpg/800px-Chola_coin.jpg",
  },
  {
    id: 6,
    name: "2020 Republic India 10 Rupees Coin",
    price: "₹500",
    grade: "UNC",
    year: 2020,
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/2020_India_10_rupees_obverse.jpg/800px-2020_India_10_rupees_obverse.jpg",
  },
];

const ProductDetail = () => {
  const { productId } = useParams(); // Extracts productId from the URL
  const product = allProducts.find((p) => p.id === parseInt(productId));

  if (!product) {
    return <div>Product not found!</div>;
  }

  const addToCart = (product) => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    product.quantity = 1;
    existingCart.push(product);
    localStorage.setItem("cart", JSON.stringify(existingCart));
    alert(product.name + " added to cart!");
    window.dispatchEvent(new Event("cartUpdated"));
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6">{product.name}</h2>
      <img
        src={product.img}
        alt={product.name}
        className="w-full h-96 object-cover rounded mb-6"
      />
      <p className="text-lg font-semibold">{product.price}</p>
      <p className="text-sm text-gray-500">Grade: {product.grade}</p>
      <p className="text-sm text-gray-500">Year: {product.year}</p>

      {/* Add to Cart button */}
      <button
        onClick={() => addToCart(product)}
        className="w-full px-4 py-2 bg-yellow-400 text-black font-medium rounded hover:bg-yellow-500"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetail;
