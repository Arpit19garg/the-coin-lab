import React from "react";
import { useParams } from "react-router-dom";

const allProducts = [
  {
    id: 1,
    name: "1862 One Rupee Victoria Silver Coin",
    price: "₹4,999",
    grade: "XF",
    year: 1862,
    img: "https://coinbazzar.com/wp-content/uploads/2023/12/11-3.jpeg",
    description:
      "A rare 1862 British India silver rupee coin featuring Queen Victoria. Minted during colonial rule, this coin is an essential part of numismatic collections. Struck in 91.7% silver, it's a historical piece with immense value.",
    availability: "In Stock",
    rating: 4.6,
    reviews: 78,
    origin: "British India",
    metal: "Silver (.917)",
    weight: "11.66 g",
    diameter: "30.5 mm",
  },
  {
    id: 2,
    name: "Mughal Empire Akbar Gold Coin",
    price: "₹15,000",
    grade: "VF",
    year: 1570,
    img: "https://www.baldwin.co.uk/wp-content/uploads/2022/05/C223001044-2-20220504091251.jpg",
    description:
      "A gold coin from the time of Akbar the Great, showcasing Mughal calligraphy. A rare collectible from one of the richest dynasties in Indian history.",
    availability: "Only 2 left in stock",
    rating: 4.9,
    reviews: 34,
    origin: "Mughal Empire",
    metal: "Gold",
    weight: "10.8 g",
    diameter: "21 mm",
  },
  {
    id: 3,
    name: "1998 Republic India 5 Rupees Coin",
    price: "₹350",
    grade: "UNC",
    year: 1998,
    img: "https://media1.allnumis.com/15099/17-12-2013/5-rupees-1998_15099_78099304fc8a98L.jpg",
    description:
      "Issued in 1998, this 5 rupees coin commemorates India's growing economy. A modern collector's piece in uncirculated condition.",
    availability: "In Stock",
    rating: 4.3,
    reviews: 41,
    origin: "Republic of India",
    metal: "Nickel-Brass",
    weight: "9 g",
    diameter: "23 mm",
  },
  {
    id: 4,
    name: "British India 1943 One Rupee Coin",
    price: "₹1,200",
    grade: "VF",
    year: 1943,
    img: "https://coinbazzar.com/wp-content/uploads/2023/12/IMG20231029201610.jpg",
    description:
      "This silver coin from 1943 was minted under British rule and features King George VI. A popular choice for British India collectors.",
    availability: "Only 3 left",
    rating: 4.4,
    reviews: 58,
    origin: "British India",
    metal: "Nickel",
    weight: "11.66 g",
    diameter: "30 mm",
  },
  {
    id: 5,
    name: "Chola Dynasty Silver Coin",
    price: "₹8,000",
    grade: "XF",
    year: 1100,
    img: "https://en.numista.com/catalogue/photos/chola_dynasty/60706db8d77a98.67989212-original.jpg",
    description:
      "Dating back to the 12th century, this silver coin is from the powerful Chola dynasty. Known for their advanced naval power and art.",
    availability: "In Stock",
    rating: 4.8,
    reviews: 21,
    origin: "Chola Dynasty",
    metal: "Silver",
    weight: "4.3 g",
    diameter: "18 mm",
  },
  {
    id: 6,
    name: "2020 Republic India 10 Rupees Coin",
    price: "₹500",
    grade: "UNC",
    year: 2020,
    img: "https://www.bidcurios.com/wp-content/uploads/2024/02/267_fce976bf-89eb-4efb-9c14-c500543e0ca2_600x-1.jpg",
    description:
      "This modern 10 rupee coin was issued in 2020. It features the national emblem of India and is made of bi-metallic material.",
    availability: "In Stock",
    rating: 4.2,
    reviews: 16,
    origin: "Republic of India",
    metal: "Bi-metallic (Nickel-Brass & Stainless Steel)",
    weight: "7.7 g",
    diameter: "27 mm",
  },
];

const ProductDetail = () => {
  const { productId } = useParams();
  const product = allProducts.find((p) => p.id === parseInt(productId));

  if (!product) return <div className="p-8 text-center">Product not found!</div>;

  const addToCart = (product) => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    product.quantity = 1;
    existingCart.push(product);
    localStorage.setItem("cart", JSON.stringify(existingCart));
    alert(product.name + " added to cart!");
    window.dispatchEvent(new Event("cartUpdated"));
  };

  return (
    <div className="max-w-6xl mx-auto p-6 grid md:grid-cols-2 gap-10 bg-white text-gray-800 rounded-lg shadow">
      {/* Image */}
      <div className="flex justify-center items-center bg-gray-100 p-4 rounded-lg">
        <img
          src={product.img}
          alt={product.name}
          className="w-full max-w-md object-contain rounded shadow"
        />
      </div>

      {/* Details */}
      <div className="space-y-5">
        <h2 className="text-3xl font-bold">{product.name}</h2>

        {/* Rating */}
        <div className="flex items-center text-yellow-500 text-lg">
          {"★".repeat(Math.round(product.rating))}
          {"☆".repeat(5 - Math.round(product.rating))}
          <span className="ml-2 text-sm text-gray-600">
            ({product.reviews} reviews)
          </span>
        </div>

        {/* Price */}
        <p className="text-2xl font-semibold text-green-700">{product.price}</p>

        {/* Meta */}
        <div className="text-sm text-gray-700 space-y-1">
          <p><strong>Grade:</strong> {product.grade}</p>
          <p><strong>Mint Year:</strong> {product.year}</p>
          <p><strong>Origin:</strong> {product.origin}</p>
          <p><strong>Metal:</strong> {product.metal}</p>
          <p><strong>Weight:</strong> {product.weight}</p>
          <p><strong>Diameter:</strong> {product.diameter}</p>
        </div>

        {/* Stock & Shipping */}
        <div className="text-sm space-y-1">
          <p className="text-green-600 font-semibold">{product.availability}</p>
          <p><strong>Delivery:</strong> within 5–7 business days</p>
          <p><strong>Return Policy:</strong> 7-day return window</p>
        </div>

        {/* Description */}
        <div>
          <h3 className="font-semibold text-lg">Description</h3>
          <p className="text-sm text-gray-700">{product.description}</p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-3">
          <button
            onClick={() => addToCart(product)}
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 rounded transition duration-200"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
