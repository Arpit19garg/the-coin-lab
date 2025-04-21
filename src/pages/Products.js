import { useState } from "react";
import { Link } from "react-router-dom";

const allProducts = [
  {
    id: 1,
    name: "1862 One Rupee Victoria Silver Coin",
    price: "₹4,999",
    img: "https://coinbazzar.com/wp-content/uploads/2023/12/11-3.jpeg",
    grade: "XF",
    year: 1862,
  },
  {
    id: 2,
    name: "Mughal Empire Akbar Gold Coin",
    price: "₹15,000",
    img: "https://www.baldwin.co.uk/wp-content/uploads/2022/05/C223001044-2-20220504091251.jpg",
    grade: "VF",
    year: 1570,
  },
  {
    id: 3,
    name: "1998 Republic India 5 Rupees Coin",
    price: "₹350",
    img: "https://media1.allnumis.com/15099/17-12-2013/5-rupees-1998_15099_78099304fc8a98L.jpg",
    grade: "UNC",
    year: 1998,
  },
  {
    id: 4,
    name: "British India 1943 One Rupee Coin",
    price: "₹1,200",
    img: "https://coinbazzar.com/wp-content/uploads/2023/12/IMG20231029201610.jpg",
    grade: "VF",
    year: 1943,
  },
  {
    id: 5,
    name: "Chola Dynasty Silver Coin",
    price: "₹8,000",
    img: "https://en.numista.com/catalogue/photos/chola_dynasty/60706db8d77a98.67989212-original.jpg",
    grade: "XF",
    year: 1100,
  },
  {
    id: 6,
    name: "2020 Republic India 10 Rupees Coin",
    price: "₹500",
    img: "https://www.bidcurios.com/wp-content/uploads/2024/02/267_fce976bf-89eb-4efb-9c14-c500543e0ca2_600x-1.jpg",
    grade: "UNC",
    year: 2020,
  },
];

export default function Products() {
  const [search, setSearch] = useState("");
  const [gradeFilter, setGradeFilter] = useState("");
  const [yearFilter, setYearFilter] = useState("");

  const addToCart = (product, event) => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    product.quantity = 1;
    existingCart.push(product);
    localStorage.setItem("cart", JSON.stringify(existingCart));
    alert(product.name + " added to cart!");

    window.dispatchEvent(new Event("cartUpdated"));
    window.dispatchEvent(new CustomEvent("animateCart", { detail: event }));
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
    <div className="p-6 bg-gray-50 min-h-screen text-gray-900">
      <h2 className="text-4xl font-extrabold mb-6 text-center text-gray-800 drop-shadow-sm">
        🪙 Our Coins
      </h2>

      {/* Search + Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Search coins..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 w-full md:w-1/3"
        />

        <select
          value={gradeFilter}
          onChange={(e) => setGradeFilter(e.target.value)}
          className="p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 w-full md:w-1/4"
        >
          <option value="">All Grades</option>
          <option value="XF">XF</option>
          <option value="VF">VF</option>
          <option value="UNC">UNC</option>
        </select>

        <select
          value={yearFilter}
          onChange={(e) => setYearFilter(e.target.value)}
          className="p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 w-full md:w-1/4"
        >
          <option value="">All Years</option>
          <option value="before1900">Before 1900</option>
          <option value="after1900">1900 & After</option>
        </select>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.length === 0 ? (
          <p className="text-center col-span-full text-gray-600">
            No products match your search or filters.
          </p>
        ) : (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              className="border border-gray-200 rounded-2xl p-4 shadow hover:shadow-lg transition-all bg-white"
            >
              <Link to={`/product/${product.id}`} className="block">
                <div className="w-full h-64 flex justify-center items-center overflow-hidden">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="h-full object-contain rounded"
                  />
                </div>
                <h3 className="text-lg font-semibold mt-4 text-gray-800">{product.name}</h3>
                <p className="text-green-700 font-bold">{product.price}</p>
                <p className="text-sm text-gray-600">Grade: {product.grade}</p>
                <p className="text-sm text-gray-600 mb-2">Year: {product.year}</p>
              </Link>
              <button
                onClick={(e) => addToCart(product, e)}
                className="w-full mt-2 px-4 py-2 bg-yellow-500 text-black font-medium rounded-lg hover:bg-yellow-600 transition-colors"
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
