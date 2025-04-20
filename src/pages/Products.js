import { useState } from "react";
import { Link } from "react-router-dom";

const allProducts = [
  {
    id: 1,
    name: "1862 One Rupee Victoria Silver Coin",
    price: "₹4,999",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/India_1_Rupee_1862.jpg/800px-India_1_Rupee_1862.jpg",
    grade: "XF",
    year: 1862,
  },
  {
    id: 2,
    name: "Mughal Empire Akbar Gold Coin",
    price: "₹15,000",
    img: "https://upload.wikimedia.org/wikipedia/commons/3/30/AkbarGoldCoin.jpg",
    grade: "VF",
    year: 1570,
  },
  {
    id: 3,
    name: "1998 Republic India 5 Rupees Coin",
    price: "₹350",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/5_Rupees_India_1998.jpg/800px-5_Rupees_India_1998.jpg",
    grade: "UNC",
    year: 1998,
  },
  {
    id: 4,
    name: "British India 1943 One Rupee Coin",
    price: "₹1,200",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/One_rupee_british_india_1943.jpg/800px-One_rupee_british_india_1943.jpg",
    grade: "VF",
    year: 1943,
  },
  {
    id: 5,
    name: "Chola Dynasty Silver Coin",
    price: "₹8,000",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Chola_coin.jpg/800px-Chola_coin.jpg",
    grade: "XF",
    year: 1100,
  },
  {
    id: 6,
    name: "2020 Republic India 10 Rupees Coin",
    price: "₹500",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/2020_India_10_rupees_obverse.jpg/800px-2020_India_10_rupees_obverse.jpg",
    grade: "UNC",
    year: 2020,
  },
];

export default function Products() {
  const [search, setSearch] = useState("");
  const [gradeFilter, setGradeFilter] = useState("");
  const [yearFilter, setYearFilter] = useState("");

  const addToCart = (product) => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    product.quantity = 1;
    existingCart.push(product);
    localStorage.setItem("cart", JSON.stringify(existingCart));
    alert(product.name + " added to cart!");
    window.dispatchEvent(new Event("cartUpdated"));
  };

  const filteredProducts = allProducts.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());
    const matchesGrade = gradeFilter ? product.grade === gradeFilter : true;
    const matchesYear =
      yearFilter === "before1900"
        ? product.year < 1900
        : yearFilter === "after1900"
        ? product.year >= 1900
        : true;

    return matchesSearch && matchesGrade && matchesYear;
  });

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6">🪙 Our Coins</h2>

      {/* Search + Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Search coins..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-2 border rounded w-full md:w-1/3"
        />

        <select
          value={gradeFilter}
          onChange={(e) => setGradeFilter(e.target.value)}
          className="p-2 border rounded w-full md:w-1/4"
        >
          <option value="">All Grades</option>
          <option value="XF">XF</option>
          <option value="VF">VF</option>
          <option value="UNC">UNC</option>
        </select>

        <select
          value={yearFilter}
          onChange={(e) => setYearFilter(e.target.value)}
          className="p-2 border rounded w-full md:w-1/4"
        >
          <option value="">All Years</option>
          <option value="before1900">Before 1900</option>
          <option value="after1900">1900 & After</option>
        </select>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.length === 0 ? (
          <p className="text-center col-span-full text-gray-600">No products match your search or filters.</p>
        ) : (
          filteredProducts.map((product) => (
            <div key={product.id} className="border rounded-lg p-4 shadow hover:shadow-lg transition-all">
              <Link to={`/product/${product.id}`} className="block">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-40 object-cover rounded"
                />
                <h3 className="text-xl font-semibold mt-2">{product.name}</h3>
                <p className="text-green-600 font-bold">{product.price}</p>
                <p className="text-sm text-gray-500">Grade: {product.grade}</p>
                <p className="text-sm text-gray-500 mb-2">Year: {product.year}</p>
              </Link>
              <button
                onClick={() => addToCart(product)}
                className="w-full px-4 py-2 bg-yellow-400 text-black font-medium rounded hover:bg-yellow-500"
              >
                Add to Cart
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
